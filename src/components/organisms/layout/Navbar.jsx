import { Box, useDisclosure } from "@chakra-ui/react"
import { SideMapIconButton } from "../../atoms/button/SideMapIconButton";
import { NavDrawer } from "../../molecules/drawer/NavDrawer";

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
        <NavDrawer isOpen={isOpen} handleOverlayClick={handleOverlayClick} />
      </Box>
    </>
  )
}