import { CardHeader, Heading, Link, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { ReactNode } from "react";
import { Formats } from "@/shared/config/date";

interface ExperienceCardHeaderProps {
  title: string;
  titleUrl?: string;
  secondaryTitle?: string;
  startDate: Date;
  endDate?: Date;
  image?: ReactNode;
}

export function ExperienceCardHeader(props: ExperienceCardHeaderProps) {
  const { title, titleUrl, secondaryTitle, startDate, endDate, image } = props;

  const formatedStartDate = dayjs(startDate).format(Formats.fullMonthAndYear);
  const formatedEndDate = endDate ? dayjs(endDate).format(Formats.fullMonthAndYear) : "Present";

  return (
    <CardHeader className="experience-card-header">
      {image}
      <div className="experience-card-header-content">
        <div className="experience-card-header-title-wrapper">
          <Heading as="h4" size="sm" className="experience-card-header-title">
            <Link href={titleUrl} target="_blank">
              {title}
            </Link>
          </Heading>
          <Text className="experience-card-header-range">
            {`${formatedStartDate} - ${formatedEndDate}`}
          </Text>
        </div>
        <Text className="experience-card-header-secondary-title">
          {secondaryTitle}
        </Text>
      </div>
    </CardHeader>
  );
}
