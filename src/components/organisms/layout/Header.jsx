import { memo } from "react";
import { Flex, Box, useDisclosure } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { CustomDrawer } from "../../molecules/CustomDrawer";

export const Header = memo(() => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const navigate = useNavigate()

  const onClickHome = () => navigate("/")
  const onClickLogin = () => navigate("/login")
  const onClickSignup = () => navigate("/signup")

  return (
    <>
      <Flex
        as="nav"
        bg="black"
        backgroundColor="rgba(66, 24, 66, 0.5)"
        color="white"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Link to="/" as="h1" color="white"
            fontSize={{ base: "md", md: "lg" }}
          >
            曲選出
          </Link>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", lg: "flex" }}>
          <Box pr={4}>
            <Link to="/login">Login</Link>
          </Box>
          <Link to="/signup">Signup</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
        <CustomDrawer isOpen={isOpen} handleOverlayClick={handleOverlayClick} onClickHome={onClickHome} onClickLogin={onClickLogin} onClickSignup={onClickSignup} />
    </>
  )
})

