import { HelloBanner } from "@/widgets/about";
import { CareerSection } from "@/widgets/career";
import { SkillsSection } from "@/widgets/skills";
import "./styles.scss";

export function HomePage() {
  return (
    <div className="home-page">
      <HelloBanner />
      <SkillsSection />
      <CareerSection />
    </div>
  );
}
