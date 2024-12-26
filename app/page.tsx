"use client";

import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Navbar } from '@/components/navbar';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Footer />

    </main>
  );
}