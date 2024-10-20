import { Container as ChakraContainer, ContainerProps as ChakraContainerProps } from "@chakra-ui/react";
import { clsx } from "clsx";
import "./styles.scss";

export interface ContainerProps extends ChakraContainerProps {}

export function Container(props: ContainerProps) {
  const { children, className, ...otherProps } = props;

  return (
    <ChakraContainer maxW="container.xl" className={clsx("container", className)} {...otherProps}>
      {children}
    </ChakraContainer>
  );
}
