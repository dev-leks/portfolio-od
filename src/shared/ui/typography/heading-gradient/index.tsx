import { Heading, HeadingProps } from "@chakra-ui/react";
import "./styles.scss";

export function HeadingGradient(props: HeadingProps) {
  const { children, ...otherProps } = props;

  return (
    <Heading
      as="h1"
      size="3xl"
      className="heading-gradient"
      {...otherProps}
    >
      {children}
    </Heading>
  );
}
