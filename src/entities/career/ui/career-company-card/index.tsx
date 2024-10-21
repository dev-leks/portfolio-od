import { ListItem, UnorderedList } from "@chakra-ui/react";
import { CareerCompany } from "@/entities/career";
import { ExperienceCard } from "@/shared/ui";
import "./styles.scss";

interface CareerCompanyCardProps extends CareerCompany {}

export function CareerCompanyCard(props: CareerCompanyCardProps) {
  const { name, position, logoSource, url, startDate, endDate, accomplishments } = props;

  return (
    <ExperienceCard
      title={name}
      secondaryTitle={position}
      logoSource={logoSource && `/images/${logoSource}`}
      url={url}
      startDate={startDate}
      endDate={endDate}
    >
      {!!accomplishments?.length && (
        <div className="career-company-card-list-wrapper">
          <UnorderedList>
            {accomplishments?.map((accomplishment, index) => (
              <ListItem key={index} className="career-company-card-list-item">
                {accomplishment}
              </ListItem>
            ))}
          </UnorderedList>
        </div>
      )}
    </ExperienceCard>
  );
}
