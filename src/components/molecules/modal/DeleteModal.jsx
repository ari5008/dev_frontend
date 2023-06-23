import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { memo, useRef } from "react";
import { useMutateTrack } from "../../../hooks/useMutateTrack";
import { useMutateLikeFlag } from "../../../hooks/useMutateLikeFlag";

export const DeleteModal = memo(({ isOpen, onClose, handleOverlayClick, dat }) => {

  const { deleteTrackMutation } = useMutateTrack()
  const { deleteLikeFlagMutation } = useMutateLikeFlag()
  const cancelRef = useRef()
  return (
    <>
      {isOpen && (
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          position="fixed"
          top="0"
          left="0"
          height="100vh"
          width="100vw"
          zIndex="10"
          onClick={handleOverlayClick}
        >
          <Box
            bg="gray.100"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            height="230px"
            width={{ base: "375px", md: "400px" }}
            boxShadow="-2px 0px 5px rgba(0,0,0,0.25)"
            zIndex="20"
            borderRadius={5}
          >
            <Flex justifyContent="center" alignItems="center" my={8}>
              <Heading fontSize="25px" color="gray.700">本当に削除してよろしいですか？</Heading>
            </Flex>
            <Flex justifyContent="center" alignItems="center" my={8}>
              <Text>&#8251; 一度削除すると元に戻せません</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" my={8}>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='red'
                ml={3}
                onClick={() => {
                  deleteTrackMutation.mutate(dat)
                  deleteLikeFlagMutation.mutate(dat.id)
                  onClose()
                }}
              >
                Delete
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  )
})