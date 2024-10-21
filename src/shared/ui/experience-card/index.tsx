"use client";

import { Card, CardBody, Img } from "@chakra-ui/react";
import { clsx } from "clsx";
import { PropsWithChildren } from "react";
import { useIsMobile } from "@/shared/lib/screen";
import { ExperienceCardHeader } from "./experience-card-header";
import "./styles.scss";

interface ExperienceCardProps extends PropsWithChildren {
  title: string;
  titleUrl?: string;
  secondaryTitle?: string;
  logoSource?: string;
  startDate: Date;
  endDate?: Date;
  className?: string;
}

export function ExperienceCard(props: ExperienceCardProps) {
  const {
    title,
    titleUrl,
    secondaryTitle,
    logoSource,
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
          titleUrl={titleUrl}
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
