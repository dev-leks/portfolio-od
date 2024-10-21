import { useMediaQuery } from "@chakra-ui/react";
import { ScreenSizes } from "@/shared/config/screen";

interface UseIsMobileReturnValues {
  isMobile: boolean;
}

export const useIsMobile = (): UseIsMobileReturnValues => {
  const [isMobile] = useMediaQuery(`(max-width: ${ScreenSizes.md - 1}px)`);

  return { isMobile };
};
