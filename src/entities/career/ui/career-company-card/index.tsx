import { ListItem, UnorderedList } from "@chakra-ui/react";
import { CareerCompany } from "@/entities/career";
import { ExperienceCard } from "@/shared/ui";
import "./styles.scss";

export function CareerCompanyCard(props: CareerCompany) {
  const { name, position, logoSource, startDate, endDate, url, accomplishments } = props;

  return (
    <ExperienceCard
      title={name}
      titleUrl={url}
      secondaryTitle={position}
      logoSource={`/images/${logoSource}`}
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
