import { Box, Flex, Grid, TabPanel, Wrap } from "@chakra-ui/react"
import { memo } from "react"
import { TrackCard } from '../card/TrackCard';
import { useQueryTracks } from './../../../hooks/useQueryTrack';
import { CustomSpinner } from "../../atoms/spinner/CustomSpinner";

export const TrackTabPanel = memo(() => {

  const { data, isLoading } = useQueryTracks()

  // const carouselItems = [
  //   { src: "https://source.unsplash.com/SAS0lq2QGLs", alt: "text1" },
  //   { src: "https://source.unsplash.com/tJZr5F72eFQ", alt: "text2" },
  //   { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  //   { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  //   { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  //   { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  //   { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  // ];

  return (
    <>
      <TabPanel>
        {isLoading ? (
          <Flex flexDirection='column' alignItems='center' justifyContent='center' h='30vh'>
            <CustomSpinner />
          </Flex>
        ) : (
          <Wrap spacing={3} p={{ base: 4, md: 10 }} justify="center">
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={10}>
              {data?.map((dat, index) => (
                <Box key={index} minWidth={{ base: "auto", md: "250px" }}>
                  <TrackCard dat={dat} />
                </Box>
              ))}
            </Grid>
          </Wrap>
        )}
      </TabPanel>
    </>
  )
})