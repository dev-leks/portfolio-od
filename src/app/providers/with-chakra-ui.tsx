import { ChakraProvider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const withChakraUi = (Component: FC<PropsWithChildren>) => (props: PropsWithChildren) => (
  <ChakraProvider>
    <Component {...props} />
  </ChakraProvider>
);
