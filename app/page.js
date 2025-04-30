import Image from "next/image";
 import HeroSection from "./components/HeroSection";
 import ProjectsSection from "./components/ProjectsSection";
 import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
