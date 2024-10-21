import { Education } from "@/entities/education";
import { ExperienceCard } from "@/shared/ui";

interface EducationCardProps extends Education {}

export function EducationCard(props: EducationCardProps) {
  const { name, degree, logoSource, url, startDate, endDate } = props;

  return (
    <ExperienceCard
      title={name}
      secondaryTitle={degree}
      logoSource={logoSource && `/images/${logoSource}`}
      url={url}
      startDate={startDate}
      endDate={endDate}
    />
  );
}
