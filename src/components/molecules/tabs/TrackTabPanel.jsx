import { Box, Flex, Grid, TabPanel, Wrap } from "@chakra-ui/react"
import { memo } from "react"
import { TrackCard } from '../card/TrackCard';
import { useQueryTracks } from './../../../hooks/useQueryTrack';
import { CustomSpinner } from "../../atoms/spinner/CustomSpinner";

export const TrackTabPanel = memo(() => {

  const { data, isLoading } = useQueryTracks()

  return (
    <>
      <TabPanel>
        {isLoading ? (
          <Flex flexDirection='column' alignItems='center' justifyContent='center' h='30vh'>
            <CustomSpinner />
          </Flex>
        ) : (
          <Wrap  pt={{ base: 4, md: 10 }} justify="center">
            <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap="50px">
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