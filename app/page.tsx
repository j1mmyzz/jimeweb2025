"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Icons from "./components/Icons";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen  overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Icons />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
