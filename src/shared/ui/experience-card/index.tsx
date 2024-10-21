"use client";

import { Card, CardBody, Img } from "@chakra-ui/react";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { Experience } from "@/shared/config/experience";
import { useIsMobile } from "@/shared/lib/screen";
import { ExperienceCardHeader } from "./experience-card-header";
import "./styles.scss";

interface ExperienceCardProps extends Omit<Experience, "name"> {
  title: string;
  secondaryTitle?: string;
  className?: string;
  children?: ReactNode;
}

export function ExperienceCard(props: ExperienceCardProps) {
  const {
    title,
    secondaryTitle,
    logoSource,
    url,
    startDate,
    endDate,
    className,
    children,
  } = props;

  const { isMobile } = useIsMobile();

  const image = logoSource ? (
    <Img
      src={logoSource}
      alt={title}
      className={clsx({ "experience-card-logo": !isMobile })}
      boxSize={{ base: "20", lg: "24" }}
      objectFit="cover"
      borderRadius="2xl"
    />
  ) : null;

  return (
    <Card
      direction={{ base: "column", md: "row" }}
      variant="outline"
      maxW="container.md"
      className={clsx("experience-card", className)}
    >
      {!isMobile && image}
      <div className="experience-card-inner">
        <ExperienceCardHeader
          title={title}
          url={url}
          secondaryTitle={secondaryTitle}
          startDate={startDate}
          endDate={endDate}
          image={isMobile && image}
        />
        <CardBody className="experience-card-body">
          {children}
        </CardBody>
      </div>
    </Card>
  );
}
