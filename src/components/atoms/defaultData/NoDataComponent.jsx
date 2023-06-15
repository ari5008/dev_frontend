import { Box } from "@chakra-ui/react";
import { memo } from "react";

export const NoDataComponent = memo(() => {
  return <Box display="flex" textAlign="center" pb={5}>何も選択されていません</Box>;
})