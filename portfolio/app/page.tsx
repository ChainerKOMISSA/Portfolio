"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import { StickyScrollRevealDemo } from "@/components/Work";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar
          navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects/>
        <StickyScrollRevealDemo/>
        <Experience/>
        <Footer />
      </div>
    </main>
  );
}
