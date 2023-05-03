import { Box, Text, useDisclosure } from "@chakra-ui/react"
import { SideMapIconButton } from "../../atoms/button/SideMapIconButton";
import { NavDrawer } from "../../molecules/drawer/NavDrawer";
import gray from "../../../images/gray.jpg"

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
          h="10%"
          bg="gray.200"
          pb={6}
          bgGradient="linear(to-r, teal.100, teal.200)"
        >
          <SideMapIconButton onOpen={onOpen} />
        </Box>
        <NavDrawer isOpen={isOpen} handleOverlayClick={handleOverlayClick} />
      </Box>
      <Box
        h="90%"
        sx={{
          backgroundImage: gray,
          backgroundSize: "cover",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          display={isOpen ? 'none' : 'block'}
          writingMode="horizontal-tb"
          position="fixed"
          bottom="3"
          left="0"
          width="8vw"
          textAlign="center"
          fontSize="13px"
          color="gray"
        >
          &copy; 2023 All Rights Reserved.
        </Text>
      </Box>
    </>
  )
}