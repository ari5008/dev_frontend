import { Box, Button, Card, CardFooter, Divider, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react"
import { memo } from "react"
import "../../../styles.css"
import { HeartButton } from "../../atoms/button/HeartButton"
import { GenreTag } from "../../atoms/tag/GenreTag"
import { TrackImage } from './../../atoms/image/TrackImage';
import { DeleteIcon } from "@chakra-ui/icons"
import { DeleteModal } from "../modal/DeleteModal"

export const TrackCard = memo(({ dat, flag }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const expiry = localStorage.getItem('expiry');

  return (
    <Card
      w={{ base: "350px", lg: "340px", xl: "320px" }}
      h={{ base: "500px", xl: "485px" }}
      bg="gray.100"
      borderRadius="10px"
      shadow="lg"
      // _hover={{ cursor: "pointer", opacity: 0.9 }}
      display="flex"
      flexDirection="column"
    >
      <Box
        bgGradient='linear(to-r, black, teal.700, black)'
        color="gray.200"
        textAlign="center"
        // h="200px"
        pb={1}
        borderTopRadius="10px"
      >
        <Flex mt={2} p={2}>
          <Box flex={1} textAlign="left" pl={6} >
            <Text fontSize="sm" >曲名</Text>
          </Box>
          {dat.title.length > 15 ? (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="2xs">
              <Text>{dat.title}</Text>
            </Box>
          ) : dat.title.length > 8 ? (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="sm">
              <Text>{dat.title}</Text>
            </Box>
          ) : (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="md">
              <Text>{dat.title}</Text>
            </Box>
          )}
        </Flex>
        <Divider />
        <Flex p={2}>
          <Box flex={1} textAlign="left" pl={6}>
            <Text fontSize="sm" >アーティスト名</Text>
          </Box>
          {dat.artist_name.length > 15 ? (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="2xs">
              <Text>{dat.artist_name}</Text>
            </Box>
          ) : dat.artist_name.length > 8 ? (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="sm">
              <Text>{dat.artist_name}</Text>
            </Box>
          ) : (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="md">
              <Text>{dat.artist_name}</Text>
            </Box>
          )}
        </Flex>
      </Box>
      <Flex justifyContent="space-between">
        <Box m={3} mb={2}>
          <GenreTag genre={dat.genre} />
        </Box>

        <Box m={3} mb={2} fontSize="18px">
          {flag && (
            <Button onClick={onOpen}>
              <Icon as={DeleteIcon} />
            </Button>
          )}
        </Box>
        <DeleteModal isOpen={isOpen} onClose={onClose} handleOverlayClick={handleOverlayClick} dat={dat}/>
        
      </Flex>
      <Flex flex={1} justifyContent="flex-end" alignItems="center" >
        <TrackImage src={dat.jacket_image} boxSize={"220px"} />
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
        {(expiry && new Date().getTime() < parseInt(expiry)) ? (
          <HeartButton dat={dat} />
        ) : null}
      </CardFooter>
    </Card>

  )
})