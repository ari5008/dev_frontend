import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { TopicTabs } from "../organisms/tabs/TopicTabs";

export const ViewTopic = memo(() => {

  return (
    <>
      <Box mt="3rem"></Box>
      <TopicTabs />
    </>
  )
});