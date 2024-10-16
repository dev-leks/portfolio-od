import { Heading, HeadingProps } from "@chakra-ui/react";
import { clsx } from "clsx";
import "./styles.scss";

export function SectionHeading(props: HeadingProps) {
  return (
    <Heading
      as="h3"
      size="md"
      {...props}
      className={clsx("section-heading", props.className)}
    />
  );
}
