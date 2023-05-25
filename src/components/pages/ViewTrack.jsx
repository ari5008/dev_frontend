import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { TrackTabs } from './../organisms/tabs/TrackTabs';

export const ViewTrack = memo(() => {

  return (
    <>
      <Box mt="3rem"></Box>
      <TrackTabs />
    </>
  )
});