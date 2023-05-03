import { Box, Button, Card, CardFooter, Divider, Flex, Image, Text } from "@chakra-ui/react"
import { memo, useState } from "react"
import "../../../styles.css"
import { HeratButton } from "../../atoms/button/HeartButton"
import { GenreTag } from "../../atoms/tag/GenreTag"

export const TopicCard = memo(({ carouselItem }) => {

  const [isFilled, setIsFilled] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setIsFilled((prevIsFilled) => !prevIsFilled);
    setCount((prevCount) => isFilled ? prevCount - 1 : prevCount + 1);
  }

  return (
    <Card
      w={{ base: "350px", md: "250px", xl: "320px" }}
      h={{ base: "450px", xl: "450px" }}
      bg="gray.100"
      borderRadius="10px"
      shadow="lg"
      _hover={{ cursor: "pointer", opacity: 0.9 }}
      display="flex"
      flexDirection="column"
    >
      <Box
        bgGradient='linear(to-r, black, teal.700, black)'
        color="gray.200"
        textAlign="center"
        h="130px"
        lineHeight="55px"
        borderTopRadius="10px"
      >
        <Flex mt={2}>
          <Box flex={1} textAlign="left" pl={6}>
            <Text fontSize="sm" >曲名</Text>
          </Box>
          <Box flex={1} textAlign="left" fontWeight="bold">
            <Text>桜</Text>
          </Box>
        </Flex>
        <Divider />
        <Flex>
          <Box flex={1} textAlign="left" pl={6}>
            <Text fontSize="sm" >アーティスト名</Text>
          </Box>
          <Box flex={1} textAlign="left" fontWeight="bold">
            <Text>作詞/作曲 コブクロ</Text>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="flex-end">
        <Box style={{ marginLeft: "auto" }} flex={1} m={3} mb={2}>
          <GenreTag />
        </Box>
      </Flex>
      <Flex flex={1} justifyContent="flex-end" alignItems="center" >
        <Image
          className="Image"
          borderRadius="50%"
          boxSize="200px"
          src={carouselItem.src}
          alt={carouselItem.alt}
          m="auto"
        />
      </Flex>
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button colorScheme='telegram' flex='1' variant='outline' mr={2}>
          詳細
        </Button>
        <HeratButton isFilled={isFilled} count={count} handleClick={handleClick} />
      </CardFooter>
    </Card>

  )
})