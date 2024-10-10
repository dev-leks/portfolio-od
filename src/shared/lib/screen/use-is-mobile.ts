import { useMediaQuery } from "@chakra-ui/react";
import { ScreenSizes } from "@/shared/config";

interface UseIsMobileReturnValues {
  isMobile: boolean;
}

export const useIsMobile = (): UseIsMobileReturnValues => {
  const [isMobile] = useMediaQuery(`(max-width: ${ScreenSizes.lg - 1}px)`);

  return { isMobile };
};
