"use client";

import compose from "compose-function";
import { FC, PropsWithChildren } from "react";
import { withChakraUI } from "./with-chakra-ui";

const withProviders = compose(withChakraUI);

const Providers: FC<PropsWithChildren> = withProviders(({ children }: PropsWithChildren) => {
  return <>{children}</>;
});

export default Providers;
