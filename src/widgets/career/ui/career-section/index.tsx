import { CompaniesList } from "@/features/career";
import { Section } from "@/shared/ui";

export function CareerSection() {
  return (
    <Section>
      <Section.Heading>
        Here’s where I gained and used my expertise
      </Section.Heading>
      <CompaniesList />
    </Section>
  );
}
