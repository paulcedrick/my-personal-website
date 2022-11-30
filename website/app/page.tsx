import AboutSection from "./AboutSection";
import ContactsSection from "./ContactsSection";
import ExperiencesSection from "./ExperiencesSection";
import HeroHeader from "./HeroHeader";
import ProjectsSection from "./ProjectsSection";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroHeader />
        <AboutSection />
        <ExperiencesSection />
        {/* <ProjectsSection /> */}
        <ContactsSection />
      </div>
    </>
  );
}
