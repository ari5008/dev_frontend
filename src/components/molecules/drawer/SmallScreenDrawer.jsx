import { Box, Divider, Flex, Button, Heading } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "../../../styles.css";
import backgroundImage from "../../../images/smallNav.jpg";

export const SmallScreenDrawer = memo(({ isOpen, handleOverlayClick, logout, expiry }) => {

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
            top="0"
            right="0"
            height="100vh"
            width="70%"
            boxShadow="-2px 0px 5px rgba(0,0,0,0.25)"
            zIndex="20"
          >
            <Box
              h="20%"
              sx={{
                backgroundImage: backgroundImage,
                backgroundPosition: "center right",
                backgroundSize: "cover",
              }}
            >
              <Flex justify="flex-end" px="25px" py="10px">
                <Button
                  color="gray.800"
                  border="2px solid gray"
                  colorScheme='gray'
                  onClick={handleOverlayClick}>
                  Close
                </Button>
              </Flex>
              <Heading pl={5}>Menu</Heading>
            </Box>
            <Flex
              flexDirection="column"
              alignItems="center"
              h="80%"
              bg="#54474736"
            >
              <Divider colorScheme='whatsapp' />
              <Box px={3} my={3} color="gray.800" >
                <Link to="/" className="navlink" style={{ fontSize: "30px" }} >
                  <Box className="box" textShadow="1px 0px 1px #222527af">Home</Box>
                </Link>
              </Box>
              <Divider colorScheme='whatsapp' />
              <Box px={3} my={3} color="gray.800" >
                <Link to="/topic" className="navlink" style={{ fontSize: "28px" }}>
                  <Box className="box" textShadow="1px 0px 1px #222527af">閲覧</Box>
                </Link>
              </Box>
              <Divider color='primary' />
              {!(expiry && new Date().getTime() < parseInt(expiry)) ? (
                <>
                  <Box px={3} my={3} color="gray.800" >
                    <Link to="/signup" className="navlink" style={{ fontSize: "28px" }}>
                      <Box className="box" textShadow="1px 0px 1px #222527af">新規登録</Box>
                    </Link>
                  </Box>
                  <Divider color='primary' />
                  <Box px={3} my={3} color="gray.800" >
                    <Link to="/login" className="navlink" style={{ fontSize: "28px" }}>
                      <Box className="box" textShadow="1px 0px 1px #222527af">ログイン</Box>
                    </Link>
                  </Box>
                  <Divider color='primary' />
                </>
              ) : (
                <>
                  <Box px={3} my={3} color="gray.800" >
                    <Link to="/login" onClick={logout} className="navlink" style={{ fontSize: "28px" }}>
                      <Box className="box" textShadow="1px 0px 1px #222527af">ログアウト</Box>
                    </Link>
                  </Box>
                </>
              )}
            </Flex>
          </Box>
        </Box >
      )}
    </>
  );
});