import { Box, Flex, Grid, TabPanel, Text, Wrap } from "@chakra-ui/react"
import { memo } from "react"
import { TrackCard } from '../card/TrackCard';
import { useQueryTracks } from '../../../hooks/useQueryTrack';
import { CustomSpinner } from "../../atoms/spinner/CustomSpinner";

export const TrackTabPanel = memo(({ sortOption }) => {
  
  const { data, isLoading } = useQueryTracks(sortOption)

  return (
    <>
      <TabPanel>
        {isLoading ? (
          <Flex flexDirection='column' alignItems='center' justifyContent='center' h='30vh'>
            <CustomSpinner />
          </Flex>
        ) : (
          <>
            {(Array.isArray(data) && data.length !== 0) ? (
              <Wrap pt={{ base: 4, md: 10 }} justify="center">
                <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap="50px">
                  {data?.map((dat, index) => (
                    <Box key={index} minWidth={{ base: "auto", md: "250px" }}>
                      <TrackCard dat={dat} />
                    </Box>
                  ))}
                </Grid>
              </Wrap>
            ) : (
              <Wrap py={{ base: 2, md: 4 }} justify="center" color="blue.900" fontWeight="bold">
                <Text>何も選曲されていません...</Text>
              </Wrap>
            )}
          </>
        )}
      </TabPanel>
    </>
  )
})