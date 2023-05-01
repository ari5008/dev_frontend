import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { memo } from "react"
import "../../../styles.css"

export const TopicCard = memo(({ carouselItem }) => {
  return (
    <Box
      w={{ base: "350px", md: "250px", xl: "320px" }}
      h={{ base: "400px", xl: "400px" }}
      bg="gray.50"
      borderRadius="10px"
      shadow="lg"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      display="flex"
      flexDirection="column"
    >
      <Box
        bg="#5d8aa9e0"
        color="black"
        textAlign="center"
        h="100px"
        lineHeight="50px"
        borderTopRadius="10px"
      >
        <Text fontSize="lg" fontWeight="bold">
          aaa
        </Text>
        <Text fontSize="sm">iii</Text>
      </Box>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Image
          className="Image"
          borderRadius="50%"
          boxSize="200px"
          src={carouselItem.src}
          alt={carouselItem.alt}
          m="auto"
        />
      </Flex>
    </Box>

  )
})