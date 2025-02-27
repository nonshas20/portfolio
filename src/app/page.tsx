"use client";

import React from 'react';
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Hero />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  );
}
