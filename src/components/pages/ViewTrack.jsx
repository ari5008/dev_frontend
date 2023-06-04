import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Button, Tab, TabIndicator, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { memo } from "react";
import backgroundImage from "../../images/trackBackground.jpg"
import { Link } from "react-router-dom";
import { TrackTabPanel } from "../molecules/tabs/TrackTabPanel";
import { useQueryTracks } from "../../hooks/useQueryTrack";

export const ViewTrack = memo(() => {

  // const { data, isLoading } = useQueryTracks()
  const expiry = localStorage.getItem('expiry');

  return (
    <>
      <Box mt="3rem"></Box>
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
                <Button as={Link} to="/account/createTrack" colorScheme='blackAlpha' mt="65px" className="button_link" >
                  <span >
                    曲を選ぶ
                    <SmallAddIcon ml="2px" pb={1} fontSize="20px" />
                  </span>
                </Button>
              ) : null}
            </Box>
          </Box>
        </Box>
        <TabPanels borderBottomRadius="15px" bg="gray.200">
          <TrackTabPanel />
          <TrackTabPanel />
          <TrackTabPanel />
        </TabPanels>
      </Tabs >
    </>
  )
});