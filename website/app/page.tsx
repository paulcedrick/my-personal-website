import AboutSection from "./AboutSection";
import HeroHeader from "./HeroHeader";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroHeader />
        <AboutSection />
      </div>
    </>
  );
}
