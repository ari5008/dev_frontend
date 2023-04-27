import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../organisms/layout/Header";
import { Navbar } from '../organisms/layout/Navbar';
import { useIsSmallScreen } from "../../hooks/useIsSmallScreen";

export const Layout = ({ children }) => {

  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <>
          <Header />
          <Box
            paddingTop="4rem"
            overflow="hidden"
            w="95%"
            margin="auto"
          >
            {children}
          </Box>
        </>
      ) : (
        <>
          <Header />
          <Box>
            <Flex>
              <Box w="12%" bg="white" h="100vh">
                <Navbar />
              </Box>
              <Box w="88%" margin="auto">
                <Box w="80%" margin="auto" >
                  {children}
                </Box>
              </Box>
            </Flex>
          </Box>
        </>

      )}

    </>
  );
}