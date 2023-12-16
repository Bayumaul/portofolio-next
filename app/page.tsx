import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import ProjectSection from "@/components/project-section";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import MaintenanceMode from "../components/MaintenanceMode";

export default function Home() {
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return <MaintenanceMode />;
  }

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <ProjectSection />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
