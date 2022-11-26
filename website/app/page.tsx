import AboutSection from "./AboutSection";
import ExperiencesSection from "./ExperiencesSection";
import HeroHeader from "./HeroHeader";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroHeader />
        <AboutSection />
        <ExperiencesSection />
      </div>
    </>
  );
}
