import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Button, Tab, TabIndicator, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { memo } from "react";
import backgroundImage from "../../images/trackBackground.jpg"
import { Link } from "react-router-dom";
import { ScrollToTopOnMount } from "../atoms/scroll/ScrollToTopOnMount";
import { TrackTabPanel } from "../molecules/tabs/TrackTabPanel";
import { useQueryTracks } from "../../hooks/useQueryTrack";
import { useGenreRank } from "../../hooks/useGenreRank";

export const ViewTrack = memo(() => {

  const expiry = localStorage.getItem('expiry');

  const { data, isLoading } = useQueryTracks()
  const DescData = data?.slice().sort((a, b) => {
    const date1 = new Date(a.created_at);
    const date2 = new Date(b.created_at);

    return date2 - date1;
  });
  const AscData = data?.slice().sort((a, b) => {
    const date1 = new Date(a.created_at);
    const date2 = new Date(b.created_at);

    return date1 - date2;
  });
  const likesData = data?.slice().sort((a, b) => b.likes - a.likes);
  const GenreData = data?.slice().sort((a, b) => useGenreRank(a.genre) - useGenreRank(b.genre));

  return (
    <>
      <Box mt="3rem"></Box>
      <ScrollToTopOnMount />
      <Tabs
        align='end'
        variant="unstyled"
        color="black"
        mb={10}
        size={{ base: "sm", lg: "md" }}
        minH="90vh"
      >
        <Box
          h="290px"
          borderTopRadius="15px"
          sx={{
            backgroundImage: backgroundImage,
            backgroundPosition: "top top",
            backgroundSize: "cover",
          }}
        >
          <TabList p={2} >
            <Tab bg="gray.400" roundedLeft="md">新しい順</Tab>
            <Tab bg="gray.400" >古い順</Tab>
            <Tab bg="gray.400" >人気順</Tab>
            <Tab bg="gray.400" roundedRight="md">ジャンル順</Tab>
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
                <Button
                  to="/account/createTrack"
                  size={{ base: "lg", lg: "md" }}
                  as={Link}
                  colorScheme="blackAlpha"
                  mt={{ base: "35px", lg: "65px" }}
                  className="button_link"
                >
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
          <TrackTabPanel data={DescData} isLoading={isLoading} />
          <TrackTabPanel data={AscData} isLoading={isLoading} />
          <TrackTabPanel data={likesData} isLoading={isLoading} />
          <TrackTabPanel data={GenreData} isLoading={isLoading} />
        </TabPanels>
      </Tabs >
    </>
  )
});