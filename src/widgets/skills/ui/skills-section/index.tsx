import { SkillsList } from "@/features/skills";
import { Section } from "@/shared/ui";

export function SkillsSection() {
  return (
    <Section>
      <Section.Heading>
        I&#39;m creating great things with them
      </Section.Heading>
      <SkillsList />
    </Section>
  );
}
