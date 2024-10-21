import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { themeConfig } from "@/shared/config";

const theme = extendTheme(themeConfig);

export const withChakraUI = (Component: FC<PropsWithChildren>) => (props: PropsWithChildren) => (
  <ChakraProvider theme={theme}>
    <Component {...props} />
  </ChakraProvider>
);
