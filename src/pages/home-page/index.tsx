import { HelloBanner } from "@/widgets/about";
import { CareerSection } from "@/widgets/career";
import { EducationSection } from "@/widgets/education";
import { SkillsSection } from "@/widgets/skills";
import "./styles.scss";

export function HomePage() {
  return (
    <div className="home-page">
      <HelloBanner />
      <SkillsSection />
      <CareerSection />
      <EducationSection />
    </div>
  );
}
