import { Flex } from "@chakra-ui/react"
import { memo } from "react"

export const Footer = memo(() => {

  return (
    <>
      <Flex
        bg="blackAlpha.500"
        color="white"
        align="center"
        justify="center"
        padding={{ base: 6, md: 1 }}
        zIndex="10"
        bottom="0"
        width="100%"
        margin="auto"
        borderTopRadius="lg"
      >
        &copy; 曲選曲 2023 All Rights Reserved.
      </Flex>
    </>
  )
})