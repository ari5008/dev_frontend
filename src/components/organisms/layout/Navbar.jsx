import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react"
import { SideMapIconButton } from "../../atoms/button/SideMapIconButton";

export const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <Box paddingTop="2.7rem">
        <Box
          bg="gray.200"
          pb={6}
          bgGradient="linear(to-r, teal.100, teal.200)"
        >
          <SideMapIconButton onOpen={onOpen} />

        </Box>

        {isOpen && (
          <Box
            bg="rgba(0, 0, 0, 0.5)"
            position="fixed"
            top="0"
            right="0"
            height="100vh"
            width="100vw"
            zIndex="10"
            onClick={handleOverlayClick}
          >
            <Box
              bg="gray.100"
              position="absolute"
              top="0"
              left="0"
              height="100vh"
              width="500px"
              boxShadow="-2px 0px 5px rgba(0,0,0,0.25)"
              zIndex="20"
            >
              <Flex justify="flex" padding="10px">
                <Button
                  color="purple.800" border="2px solid gray" onClick={handleOverlayClick}>
                  Close
                </Button>
              </Flex>
            </Box>
          </Box>
        )}
      </Box>


    </>
  )
}