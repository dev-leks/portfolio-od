import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import "./styles.scss";

export function Container(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Box className="container">
      {children}
    </Box>
  );
}
