"use client";

import compose from "compose-function";
import { FC, PropsWithChildren } from "react";
import { withChakraUi } from "./with-chakra-ui";

const withProviders = compose(withChakraUi);

const Providers: FC<PropsWithChildren> = withProviders(({ children }: PropsWithChildren) => {
  return <>{children}</>;
});

export default Providers;
