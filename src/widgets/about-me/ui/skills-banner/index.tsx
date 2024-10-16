import { SkillsList } from "@/features/skills";
import { Container, SectionHeading } from "@/shared/ui";
import "./styles.scss";

export function SkillsBanner() {
  return (
    <Container as="section" className="skills-banner-container">
      <SectionHeading>
        I&#39;m creating great things with them
      </SectionHeading>
      <SkillsList />
    </Container>
  );
}
