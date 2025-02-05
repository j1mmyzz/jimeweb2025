import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const ICON_TEXTURES = [
  "/java.png",
  "/css.png",
  "/html.png",
  "/javascript.png",
  "/linux.png",
  "/nextjs.png",
  "/react.png",
  "/tailwind.png",
  "/chakra.png",
  "/python.png",
  "/flask.png",
  "/figma.png",
  "/canva.png",
  "/node.png",
  "/sql.png",
  "git.png",
];

const Icons: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [iconMultiplier, setIconMultiplier] = useState(1);
  const wallsRef = useRef<Matter.Body[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    let multiplier = 2;
    if (screenWidth >= 1536) {
      multiplier = 25;
    } else if (screenWidth >= 1280) {
      multiplier = 8;
    } else if (screenWidth >= 1024) {
      multiplier = 6;
    } else if (screenWidth >= 768) {
      multiplier = 4;
    }
    setIconMultiplier(multiplier);
  }, []);

  useEffect(() => {
    if (!boxRef.current || !canvasRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Events,
      Mouse,
      MouseConstraint,
    } = Matter;

    const engine = Engine.create();
    const runner = Runner.create();

    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current!,
      options: {
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.6,
        background: "rgba(55, 55, 55, 0.5)",
        wireframes: false,
      },
    });

    const createWalls = (width: number, height: number) => [
      Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }),
      Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true }),
      Bodies.rectangle(0, height / 2, 20, height, { isStatic: true }),
      Bodies.rectangle(width, height / 2, 20, height, { isStatic: true }),
    ];

    const icons = Array.from({ length: iconMultiplier }, () =>
      ICON_TEXTURES.map((texture) =>
        Bodies.rectangle(
          Math.random() * (render.options.width ?? 800),
          0,
          50,
          50,
          {
            restitution: 0.9,
            render: {
              sprite: { texture, yScale: 1, xScale: 1 },
            },
          }
        )
      )
    ).flat();

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: true } },
    });

    wallsRef.current = createWalls(
      render.options.width!,
      render.options.height!
    );

    World.add(engine.world, [...icons, ...wallsRef.current, mouseConstraint]);

    const repositionOutOfBoundsIcons = () => {
      icons.forEach((icon) => {
        const width = render.options.width ?? 800;
        const height = render.options.height ?? 600;

        if (
          icon.position.x < 0 ||
          icon.position.x > width ||
          icon.position.y < 0 ||
          icon.position.y > height
        ) {
          Matter.Body.setPosition(icon, { x: width / 2, y: height / 4 });
          Matter.Body.setVelocity(icon, { x: 0, y: 0 });
        }
      });
    };

    Events.on(engine, "afterUpdate", repositionOutOfBoundsIcons);

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      World.remove(engine.world, wallsRef.current);

      wallsRef.current = createWalls(
        render.options.width!,
        render.options.height!
      );
      World.add(engine.world, wallsRef.current);

      Render.stop(render);
      render.canvas.width = window.innerWidth * 0.8;
      render.canvas.height = window.innerHeight * 0.6;
      render.options.width = window.innerWidth * 0.8;
      render.options.height = window.innerHeight * 0.6;
      Render.run(render);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Events.off(engine, "afterUpdate", repositionOutOfBoundsIcons);
      World.clear(engine.world, true);
      Engine.clear(engine);
      window.removeEventListener("resize", handleResize);
    };
  }, [iconMultiplier]);

  return (
    <div
      ref={boxRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Icons;
