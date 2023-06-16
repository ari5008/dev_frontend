import { Box, Tab, TabIndicator, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { memo } from "react"
import { TrackTabPanel } from "../molecules/tabs/TrackTabPanel"
import backgroundImage from "../../images/trackBackground.jpg"

export const HomeTrack = memo(() => {
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
})