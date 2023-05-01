import { Box } from "@chakra-ui/react";
import { Header } from "../organisms/layout/Header";
import { Navbar } from '../organisms/layout/Navbar';
import { useIsSmallScreen } from "../../hooks/useIsSmallScreen";

export const Layout = ({ children }) => {

  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      <Header />
      <Box position="relative">
        <Box w={{ base: "0%", lg: "9%" }} bg="white" h="100vh" position="fixed" zIndex="5">
          {isSmallScreen ? null : <Navbar />}
        </Box>
        <Box
          ml={{ base: "0%", lg: "9%" }}
          pt="4rem"
        >
          <Box
            overflow={{ base: "hidden", lg: "unset" }}
            w={{ base: "95%", md: "91%" }}
            margin="auto"
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}