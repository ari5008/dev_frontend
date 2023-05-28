import { Box, Grid, TabPanel, Wrap } from "@chakra-ui/react"
import { memo } from "react"
import { TrackCard } from '../card/TrackCard';

export const TrackTabPanel = memo(() => {

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
    </>
  )
})