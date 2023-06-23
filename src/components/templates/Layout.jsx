import { Box } from "@chakra-ui/react";
import { Header } from "../organisms/layout/Header";

export const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Box position="relative">
        <Box
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