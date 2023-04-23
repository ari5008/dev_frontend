import { Box, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";
import { useIsSmallScreen } from "../../hooks/useIsSmallScreen";
import { ViewSlider } from "../molecules/ViewSlider";

const Home = memo(() => {

  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <Box overflow="hidden" w="95%" margin="auto">
          <ViewSlider isSmallScreen={isSmallScreen}/>
        </Box>
      ) : (
        <Flex>
          <Box w="30%" h="100vh" bg="gray.400">
            
          </Box>
          <Box w="70%" h="100vh" margin="auto">
            <Box w="70%" margin="auto" >
              <ViewSlider isSmallScreen={isSmallScreen}/>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
});

export default Home;