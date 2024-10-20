import { clsx } from "clsx";
import { Container, ContainerProps } from "@/shared/ui";
import { SectionHeading } from "./section-heading";
import "./styles.scss";

interface SectionProps extends ContainerProps {}

export function Section(props: SectionProps) {
  const { children, className, ...otherProps } = props;

  return (
    <Container as="section" className={clsx("section", className)} {...otherProps}>
      {children}
    </Container>
  );
}

Section.Heading = SectionHeading;
