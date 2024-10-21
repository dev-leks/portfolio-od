import { Heading, HeadingProps } from "@chakra-ui/react";
import "./styles.scss";

interface HeadingGradientProps extends HeadingProps {}

export function HeadingGradient(props: HeadingGradientProps) {
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
