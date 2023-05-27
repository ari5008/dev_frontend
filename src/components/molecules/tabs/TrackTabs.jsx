import { Box, Button, Grid, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, Wrap } from "@chakra-ui/react"
import { memo } from "react"
import backgroundImage from "../../../images/track.jpg"
import { TrackCard } from '../card/TrackCard';
import { SmallAddIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import "../../../styles.css";

export const TrackTabs = memo(() => {

  const expiry = localStorage.getItem('expiry');

  const carouselItems = [
    { src: "https://source.unsplash.com/SAS0lq2QGLs", alt: "text1" },
    { src: "https://source.unsplash.com/tJZr5F72eFQ", alt: "text2" },
    { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
    { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
    { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
    { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
    { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  ];

  return (
    <>
      <Tabs
        align='end'
        variant="unstyled"
        color="black"
        mb={8}
      >
        <Box
          h="310px"
          borderTopRadius="15px"
          sx={{
            backgroundImage: backgroundImage,
            backgroundPosition: "top top",
            backgroundSize: "cover",
          }}
        >
          <TabList p={2}>
            <Tab bg="gray.400" roundedLeft="md">人気順</Tab>
            <Tab bg="gray.400" >新しい順</Tab>
            <Tab bg="gray.400" roundedRight="md">古い順</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="white"
          />
          <Box textAlign="center" >
            <Box
              color="gray.200"
              display="inline-block"
              p="2"
            >
              <Text fontWeight="bold" fontSize="40px" transform="skewX(-10deg)" textShadow="0px 1px 1px #0b0c0d">曲一覧</Text>
              {(expiry && new Date().getTime() < parseInt(expiry)) ? (
                <Button as={Link} to="/createTrack" colorScheme='blackAlpha' mt="65px" className="button_link" >
                  <span >
                    曲を選ぶ
                  <SmallAddIcon ml="2px" pb={1} fontSize="20px"/>
                  </span>
                </Button>
              ) : null}
            </Box>
          </Box>
        </Box>
        <TabPanels borderBottomRadius="15px" bg="gray.200">
          <TabPanel>

            <Wrap spacing={3} p={{ base: 4, md: 10 }} justify="center">
              <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={10}>
                {carouselItems.map((carouselItem, index) => (
                  <Box key={index} minWidth={{ base: "auto", md: "250px" }}>
                    <TrackCard carouselItem={carouselItem} />
                  </Box>
                ))}
              </Grid>
            </Wrap>

          </TabPanel>
          <TabPanel>
            <p>2番目</p>
          </TabPanel>
          <TabPanel>
            <p>3番目</p>
          </TabPanel>
        </TabPanels>
      </Tabs >
    </>
  )
})