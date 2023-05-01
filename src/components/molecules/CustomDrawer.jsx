import { Box, Flex, Button, VStack, StackDivider } from "@chakra-ui/react";
import { memo } from "react";

export const CustomDrawer = memo(({ isOpen, handleOverlayClick, onClickHome, onClickLogin, onClickSignup, onClickViewTopic }) => {

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
            width="250px"
            boxShadow="-2px 0px 5px rgba(0,0,0,0.25)"
            zIndex="20"
          >
            <Flex justify="flex-end" padding="10px">
              <Button 
              color="purple.800" border="2px solid gray" bg="url(https://source.unsplash.com/mIT9kEQBC6Q)" onClick={handleOverlayClick}>
                Close
              </Button>
            </Flex>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={1}
              align='stretch'
            >
              <Button border="2px solid gray" color="purple.800" bg="gray.300" w="100%" onClick={onClickHome}>Home</Button>
              <Button border="2px solid gray" color="purple.800" bg="gray.300" w="100%" onClick={onClickLogin}>ログイン</Button>
              <Button border="2px solid gray" color="purple.800" bg="gray.300" w="100%" onClick={onClickSignup}>アカウント登録</Button>
              <Button border="2px solid gray" color="purple.800" bg="gray.300" w="100%" onClick={onClickViewTopic}>Topic閲覧</Button>
            </VStack>
          </Box>
        </Box>
      )}
    </>
  );
});