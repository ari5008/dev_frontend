import { useBreakpointValue } from "@chakra-ui/react";

export const useIsSmallScreen = () => {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  return isSmallScreen;
}