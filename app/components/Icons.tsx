import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

let icon_multiplier = 1;
window.onload = function () {
  const screen_width = screen.width;
  if (screen_width >= 1536) {
    icon_multiplier = 25;
  } else if (screen_width >= 1280) {
    icon_multiplier = 8;
  } else if (screen_width >= 1024) {
    icon_multiplier = 6;
  } else if (screen_width >= 768) {
    icon_multiplier = 4;
  } else if (screen_width >= 640) {
    icon_multiplier = 1;
  } else {
    icon_multiplier = 1;
  }
};
console.log(icon_multiplier);
const Icons: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!boxRef.current || !canvasRef.current) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Events = Matter.Events;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

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

    let walls: Matter.Body[] = [];

    const createWalls = (width: number, height: number) => [
      Bodies.rectangle(width / 2, height, width, 20, {
        isStatic: true,
        render: { fillStyle: "rgb(15, 19, 33)" },
      }),
      Bodies.rectangle(width / 2, 0, width, 20, {
        isStatic: true,
        render: { fillStyle: "rgb(15, 19, 33)" },
      }),
      Bodies.rectangle(0, height / 2, 20, height, {
        isStatic: true,
        render: { fillStyle: "rgb(15, 19, 33)" },
      }),
      Bodies.rectangle(width, height / 2, 20, height, {
        isStatic: true,
        render: { fillStyle: "rgb(15, 19, 33)" },
      }),
    ];

    const icons: Matter.Body[] = [];

    for (let i = 0; i < icon_multiplier; i++) {
      icons.push(
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/java.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/css.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/html.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/javascript.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/linux.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/nextjs.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/react.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/tailwind.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/chakra.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/python.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/flask.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/figma.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/canva.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/node.png",
              yScale: 1,
              xScale: 1,
            },
          },
        }),
        Bodies.rectangle(0, 0, 50, 50, {
          restitution: 0.9,
          render: {
            sprite: {
              texture: "/sql.png",
              yScale: 1,
              xScale: 1,
            },
          },
        })
      );
    }
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: true },
      },
    });

    World.add(engine.world, [...icons, mouseConstraint]);

    const addWalls = () => {
      if (walls.length) {
        World.remove(engine.world, walls);
      }
      const width = render.options.width ?? 800;
      const height = render.options.height ?? 600;
      walls = createWalls(width, height);
      World.add(engine.world, walls);
    };

    const repositionOutOfBoundsIcons = () => {
      icons.forEach((icon) => {
        const width = render.options.width ?? 800;
        const height = render.options.height ?? 600;

        // Reset position if icon goes out of bounds
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

    addWalls();

    Events.on(engine, "afterUpdate", repositionOutOfBoundsIcons);

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      Render.stop(render);
      render.canvas.width = window.innerWidth * 0.8;
      render.canvas.height = window.innerHeight * 0.6;
      render.options.width = window.innerWidth * 0.8;
      render.options.height = window.innerHeight * 0.6;
      addWalls(); // Reset walls after resizing
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
  }, []);

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
