import Image from "next/image";
 import HeroSection from "./components/HeroSection";
 import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
