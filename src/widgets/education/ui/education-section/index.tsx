import { EducationsList } from "@/features/education";
import { Section } from "@/shared/ui";

export function EducationSection() {
  return (
    <Section>
      <Section.Heading>
        Education that shaped my career
      </Section.Heading>
      <EducationsList />
    </Section>
  );
}
