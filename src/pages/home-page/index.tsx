import { HelloBanner, SkillsBanner } from "@/widgets/about-me";
import "./styles.scss";

export function HomePage() {
  return (
    <div className="home-page">
      <HelloBanner />
      <SkillsBanner />
    </div>
  );
}
