import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Highlights from "@/components/sections/Highlights";
import Tracks from "@/components/sections/Tracks";
import Timeline from "@/components/sections/Timeline";
import Judging from "@/components/sections/Judging";
import Sponsors from "@/components/sections/Sponsors";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Highlights />
      <Tracks />
      <Timeline />
      <Judging />
      <Sponsors />
      <Contact />
    </>
  );
}
