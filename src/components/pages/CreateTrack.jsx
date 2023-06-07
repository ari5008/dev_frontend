import { ChatIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { TrackSelect } from "../atoms/select/TrackSelect";
import { TrackImage } from "../atoms/image/TrackImage";
import { useMutateTrack } from "../../hooks/useMutateTrack";
import { trackStore } from "../../store/trackStore";
import { SearchModal } from './../molecules/modal/SearchModal';

export const CreateTrack = memo(() => {

  const [selectedData, setSelectedData] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { createTrackMutation, loading } = useMutateTrack()
  const { editedTrack } = trackStore()
  const updateTrack = trackStore((state) => state.updateEditedTrack)

  const submitTrackHandler = (e) => {
    e.preventDefault()
    if (editedTrack.id === 0) {
      createTrackMutation.mutate({
        title: selectedData.title,
        artist_name: selectedData.artist_name,
        jacket_image: selectedData.jacket_image,
        genre: editedTrack.genre,
        comment: editedTrack.comment,
        likes: editedTrack.likes,
      })
    }
  }

  useEffect(() => {
    console.log(editedTrack)
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
          <Flex align="center" pl={{ base: "30px", md: "65px", lg: "105px" }} pb={1}>
            <Box pb={6} >
              <Text pb={1}>曲名</Text>
              <Text
                fontSize="xl"
                color="gray.600"
                textShadow="1px 0px 1px gray"
                mr="110px"
                pl={2}
              >
                {selectedData.title || ""}
              </Text>
            </Box>


            <Button colorScheme='blackAlpha' ml={2} size={{ base: "lg", md: "md" }} onClick={onOpen}>
              曲を選択
            </Button>
            <SearchModal isOpen={isOpen} onClose={onClose} handleOverlayClick={handleOverlayClick} setSelectedData={setSelectedData} />


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
              src={selectedData.jacket_image || editedTrack.jacket_image}
              boxSize={"240px"}
            />
            <Flex flexDirection="column" justify="center" align="center" pb={5} pt={3}>
              <Text fontSize="13px">アーティスト名</Text>
              <Text color="gray.600" fontSize="xl" textShadow="1px 0px 1px gray" >{selectedData.artist_name || "????"}</Text>
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