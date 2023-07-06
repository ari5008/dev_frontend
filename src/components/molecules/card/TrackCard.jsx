import { Avatar, Box, Button, Card, CardFooter, Divider, Flex, Icon, Popover, PopoverTrigger, Stack, Tag, Text, useDisclosure } from "@chakra-ui/react"
import { memo, useRef } from "react"
import "../../../styles.css"
import { HeartButton } from "../../atoms/button/HeartButton"
import { GenreTag } from "../../atoms/tag/GenreTag"
import { TrackImage } from './../../atoms/image/TrackImage';
import { DeleteIcon } from "@chakra-ui/icons"
import { DeleteModal } from "../modal/DeleteModal"
import { DetailTrackPoverContent } from "../popover/DetailTrackPopverContent"
import { useQueryAccountByTrackId } from "../../../hooks/useQueryAccountByTrackId"

export const TrackCard = memo(({ dat, flag }) => {

  const { data } = useQueryAccountByTrackId(dat.id)
  const initialFocusRef = useRef()
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
      h={{ base: "589px", xl: "589px" }}
      bg="gray.100"
      borderRadius="10px"
      shadow="lg"
      display="flex"
      flexDirection="column"
    >
      <Box
        bgGradient='linear(to-r, black, teal.700, black)'
        color="gray.200"
        textAlign="center"
        pb={1}
        minHeight="90px"
        borderTopRadius="10px"
      >
        <Flex mt={1} p={2} >
          <Box flex={1} textAlign="left" pl={6} >
            <Text fontSize="sm" >曲名</Text>
          </Box>
          {dat.title.length > 25 ? (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="2xs">
              <Text>{dat.title}</Text>
            </Box>
          ) : dat.title.length > 18 ? (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="sm">
              <Text>{dat.title}</Text>
            </Box>
          ) : (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="md">
              <Text >{dat.title}</Text>
            </Box>
          )}
        </Flex>
        <Divider />
        <Flex p={2}>
          <Box flex={1} textAlign="left" pl={6}>
            <Text fontSize="sm" >アーティスト名</Text>
          </Box>
          {dat.artist_name.length > 25 ? (
            <Box flex={1} textAlign="left" fontWeight="bold" fontSize="2xs">
              <Text>{dat.artist_name}</Text>
            </Box>
          ) : dat.artist_name.length > 18 ? (
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
        <Box m={3} mt={5}>
          <GenreTag genre={dat.genre} />
        </Box>

        <Box m={3} mb={2} fontSize="18px">
          {flag && (
            <Button onClick={onOpen}>
              <Icon as={DeleteIcon} />
            </Button>
          )}
        </Box>
        <DeleteModal isOpen={isOpen} onClose={onClose} handleOverlayClick={handleOverlayClick} dat={dat} />
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent="flex-end">
        <TrackImage src={dat.jacket_image} boxSize={"220px"} />
      </Flex>
      <Divider color="gray.300" mt={5}/>
      <Flex justifyContent='flex-start' mt={3} ml={7} >
          <Stack textAlign='left'>
            <span>
              <Tag colorScheme='blackAlpha'>選曲者</Tag>
            </span>
            <Flex>
              <Avatar
                size='md'
                mr={6}
                src={data?.image_url}
                _hover={{ cursor: "pointer" }}
              />
              <Text fontWeight='bold' ml={2} mt={3}>
                {(data?.user_name != "") ? data?.user_name : "名無し"}
              </Text>
            </Flex>
          </Stack>
        </Flex>
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '100px',
          },
        }}
      >
        <Popover
          initialFocusRef={initialFocusRef}
          placement='top'
          closeOnBlur={true}
          offsetX="-50px"
        >
          <PopoverTrigger>
            <Button
              colorScheme='telegram'
              variant='outline'
              flex='1'
              mr={2}
            >
              選曲コメント
            </Button>
          </PopoverTrigger>
          <DetailTrackPoverContent dat={dat} data={data} />
        </Popover>
        {(expiry && new Date().getTime() < parseInt(expiry)) ? (
          <HeartButton dat={dat} />
        ) : null}
      </CardFooter>
    </Card>

  )
})