import { useEducationsList } from "@/features/education";
import { EducationCard } from "@/entities/education";
import "./styles.scss";

export function EducationsList() {
  const { educationsList } = useEducationsList();

  return (
    <div className="educations-list">
      {educationsList.map((education) => (
        <EducationCard key={education.name} {...education} />
      ))}
    </div>
  );
}
