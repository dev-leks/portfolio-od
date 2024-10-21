import { useMediaQuery } from "@chakra-ui/react";
import { ScreenSizes } from "@/shared/config/screen";

interface UseIsTabletReturnValues {
  isTablet: boolean;
}

export const useIsTablet = (): UseIsTabletReturnValues => {
  const [isTablet] = useMediaQuery(`(max-width: ${ScreenSizes.lg - 1}px)`);

  return { isTablet };
};
