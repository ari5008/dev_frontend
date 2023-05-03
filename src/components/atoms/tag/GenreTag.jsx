import { Tag } from "@chakra-ui/react";
import { memo } from "react";

export const GenreTag = memo(() => {

  return (
    <Tag
      borderRadius='full'
      variant='solid'
      colorScheme='pink'
    >
      Pop
    </Tag>
  )
})