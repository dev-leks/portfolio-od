import { Heading, HeadingProps } from "@chakra-ui/react";
import { clsx } from "clsx";
import "./styles.scss";

interface SectionHeadingProps extends HeadingProps {}

export function SectionHeading(props: SectionHeadingProps) {
  const { className, ...otherProps } = props;

  return (
    <Heading
      as="h3"
      size="md"
      {...otherProps}
      className={clsx("section-heading", className)}
    />
  );
}
