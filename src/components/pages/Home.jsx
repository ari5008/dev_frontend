import { memo } from "react";
import "../../styles.css";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { ScrollToTopOnMount } from "../atoms/scroll/ScrollToTopOnMount";
import dogImage from "../../images/dog.png"
import HomeImage from "../../images/Home.jpg"

const Home = memo(() => {

  const outerBoxStyles = {
    background: `url(${HomeImage}) center/cover no-repeat`,
    backgroundPosition: 'center center',
  }

  return (
    <>
      <Box pb="2rem" >
        <ScrollToTopOnMount />
        <Box
          mt={3}
          h="90vh"
          borderRadius="xl"
          shadow="md"
          sx={outerBoxStyles}
          color="purple.800"
        >
          <Flex flexDirection="row" >
            <Text
              position="absolute"
              top={{ base: "40%", md: "45%" }}
              left={{ base: "13%", md: "13%" }}
              className="recommended-song"
              color="white"
              fontSize={{ base: "30px", md: "45px" }}
              fontWeight="bold"
            >
              おすすめの一曲を
            </Text>
            <Stack
              fontSize={{ base: "15px", md: "20px" }}
              color="white"
              fontWeight="bold"
              position="absolute"
              top={{ base: "45%", md: "37%" }}
              right={{ base: "30%", md: "15%" }}
            >
              <Text>日々の生活に癒しを求めて...</Text>
            </Stack>
          </Flex>

        </Box>
        <Box
          position="absolute"
          bottom="8%"
          right={{ base: "45%", md: "52%" }}
        >
          <Image src={dogImage} w="250px" h="250px" />
        </Box>
      </Box>
    </>
  );
});

export default Home;