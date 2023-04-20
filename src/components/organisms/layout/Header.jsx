import { memo } from "react";
import { Flex, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export const Header = memo(({isSmallScreen}) => {
  return (
    <>
      {isSmallScreen ? (
        <Box>Small Screen Header</Box>
      ) : (
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
          <Flex align="center" fontSize="sm" flexGrow={2} >
            <Box pr={4}>
              <Link to="/login">Login</Link>
            </Box>
            <Link to="/signup">Signup</Link>
          </Flex>
        </Flex>
      )}
    </>
  )
})

