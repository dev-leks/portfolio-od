import { CardHeader, Heading, Link, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { ReactNode } from "react";
import { DateFormats } from "@/shared/config/date";
import { Experience } from "@/shared/config/experience";

interface ExperienceCardHeaderProps extends Pick<Experience, "url" | "startDate" | "endDate"> {
  title: string;
  secondaryTitle?: string;
  image?: ReactNode;
}

export function ExperienceCardHeader(props: ExperienceCardHeaderProps) {
  const { title, url, secondaryTitle, startDate, endDate, image } = props;

  const formatedStartDate = startDate && dayjs(startDate).format(DateFormats.shortMonthAndYear);
  const formatedEndDate = endDate ? dayjs(endDate).format(DateFormats.shortMonthAndYear) : "Present";

  return (
    <CardHeader className="experience-card-header">
      {image}
      <div className="experience-card-header-content">
        <div className="experience-card-header-title-wrapper">
          <Heading as="h4" size="sm" className="experience-card-header-title">
            {url ? (
              <Link href={url} target="_blank">
                {title}
              </Link>
            ) : title}
          </Heading>
          <Text className="experience-card-header-range">
            {startDate ? `${formatedStartDate} - ${formatedEndDate}` : null}
          </Text>
        </div>
        <Text className="experience-card-header-secondary-title">
          {secondaryTitle}
        </Text>
      </div>
    </CardHeader>
  );
}
