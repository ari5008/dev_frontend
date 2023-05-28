import { ChatIcon, CheckIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { TrackSelect } from "../atoms/select/TrackSelect";
import { TrackImage } from "../atoms/image/TrackImage";
import { useMutateTrack } from "../../hooks/useMutateTrack";
import { trackStore } from "../../store/trackStore";

export const CreateTrack = memo(() => {

  const { createTrackMutation } = useMutateTrack()
  const { editedTrack } = trackStore()
  const updateTrack = trackStore((state) => state.updateEditedTrack)

  const submitTrackHandler = (e) => {
    e.preventDefault()
    createTrackMutation.mutate({
      title: editedTrack.title,
      artist_name: editedTrack.artist_name,
      jacket_image: editedTrack.jacket_image,
      genre: editedTrack.genre,
      comment: editedTrack.comment,
      likes: editedTrack.likes,
    })
  }

  useEffect(() => {
    // console.log(editedTrack)
  }, [editedTrack])

  return (
    <>
      <Box
        bgGradient='linear(to-r, gray.100, white, gray.100)'
        mt="2rem"
        mb="2rem"
        borderRadius="15px"
        color="black"
      >
        <Heading textAlign='center' fontSize="25px" py={6} >曲を選択</Heading>
        <form onSubmit={submitTrackHandler}>
          <Flex align="center" justifyContent="center" w="90%" m="auto" pb={1}>
            <Box pb={6} w="80%">
              <Text>曲名</Text>
              <Input
                placeholder="好きな曲を選択しよう (20文字以内)"
                size={{ base: "lg", md: "md" }}
                type="text"
                onChange={(e) => updateTrack({ ...editedTrack, title: e.target.value })}
                value={editedTrack.title}
              />
            </Box>
            <Button colorScheme='blackAlpha' ml={2} size={{ base: "lg", md: "md" }} >
              検索する
              <SearchIcon ml={1} />
            </Button>
          </Flex>
          <Flex
            flexDirection="column"
            pl={{ base: "30px", md: "65px", lg: "105px" }}
            pb={{ base: "20px", md: "10px" }}>
            <Text>ジャンル</Text>
            <TrackSelect editedTrack={editedTrack} updateTrack={updateTrack} />
          </Flex>
          <Box>
            <TrackImage
              onChange={(e) => updateTrack({ ...editedTrack, jacket_image: e.target.value })}
              src={editedTrack.jacket_image}
              boxSize={"240px"}
            />
            <Flex flexDirection="column" justify="center" align="center" pb={5} pt={3}>
              <Text fontSize="13px">アーティスト名</Text>
              <Text color="gray.800" fontSize="xl" textShadow="1px 0px 1px #0b0c0d" >{editedTrack.artist_name || "????"}</Text>
            </Flex>
          </Box>
          <Flex align="center" justifyContent="center" w="95%" m="auto">
            <Box pb={6} w="90%">
              <Flex justify="left" alignItems="center">
                <Text>コメント(任意)</Text>
                <ChatIcon ml={1} />
              </Flex>
              <Textarea
                size={{ base: "lg", md: "md" }}
                placeholder="(100文字以内)"
                resize="none"
                type="text"
              onChange={(e) => updateTrack({ ...editedTrack, comment: e.target.value })}
              value={editedTrack.comment}
              />
            </Box>
          </Flex>
          <Flex align="center" justifyContent='center'>
            <Button
              colorScheme='teal'
              type="submit"
              loadingText='登録する'
              mb={5}
              size={{ base: "lg", md: "md" }}
            >
              登録する
              <CheckIcon ml={1} />
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  )
})