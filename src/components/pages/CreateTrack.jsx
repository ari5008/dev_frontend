import { ChatIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, Textarea } from "@chakra-ui/react";
import { memo } from "react";
import { TrackSelect } from "../atoms/select/TrackSelect";
import { TrackImage } from "../atoms/image/TrackImage";
import { useMutateTrack } from "../../hooks/useMutateTrack";
import { trackStore } from "../../store/trackStore";
import { Link } from "react-router-dom";
import { selectedDataStore } from "../../store/selectedDataStore";

export const CreateTrack = memo(() => {

  const { editedSelectedData } = selectedDataStore()
  const { createTrackMutation, loading } = useMutateTrack()
  const { editedTrack } = trackStore()
  const updateTrack = trackStore((state) => state.updateEditedTrack)

  const submitTrackHandler = (e) => {
    e.preventDefault()
    if (editedTrack.id === 0) {
      createTrackMutation.mutate({
        title: editedSelectedData.name,
        artist_name: editedSelectedData.artists,
        jacket_image: editedSelectedData.image_url,
        genre: editedTrack.genre,
        comment: editedTrack.comment,
        likes: editedTrack.likes,
      })
    }
  }
  return (
    <>
      <Box
        bgGradient='linear(to-r, gray.100, white, gray.100)'
        mt="2rem"
        mb={{ base: "2rem", lg: "2.5rem" }}
        borderRadius="15px"
        color="black"
      >
        <Heading textAlign='center' fontSize="25px" py={6} >曲を選択</Heading>
        <form onSubmit={submitTrackHandler}>
          <Flex align="center" pl={{ base: "30px", md: "65px", lg: "105px" }} pb={1}>
            <Box pb={6} >
              <Text pb={1}>曲名</Text>
              <Text
                fontSize="xl"
                color="gray.600"
                textShadow="1px 0px 1px gray"
                pt={2}
                pl={2}
              >
                {editedSelectedData.name || ""}
              </Text>
            </Box>
            <Button as={Link} to="search" colorScheme='blackAlpha' ml={{ base: "20px", md: "110px" }} mr={{ base: "20px", md: "40px" }} size={{ base: "lg", md: "md" }}>
              曲を選択
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
              src={editedSelectedData.image_url || editedTrack.jacket_image}
              boxSize={"240px"}
            />
            <Flex flexDirection="column" justify="center" align="center" pb={8} pt={5} w="90%" margin="auto">
              <Text fontSize="13px">アーティスト名</Text>
              <Text color="gray.600" fontSize="xl" textShadow="1px 0px 1px gray" pt={2}>{editedSelectedData.artists || "????"}</Text>
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
              mb={5}
              size={{ base: "lg", md: "md" }}
              isLoading={loading}
              loadingText="登録する"
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