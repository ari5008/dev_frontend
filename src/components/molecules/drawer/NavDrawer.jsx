import { Box, Button, Flex } from "@chakra-ui/react";
import { memo } from "react";

export const NavDrawer = memo(({isOpen, handleOverlayClick}) => {

  return (
    <>
      {isOpen && (
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          position="fixed"
          top="0"
          right="0"
          h="100vh"
          w="100vw"
          onClick={handleOverlayClick}
        >
          <Box
            bg="gray.100"
            position="absolute"
            top="0"
            left="0"
            h="100vh"
            w="500px"
            boxShadow="-2px 0px 5px rgba(0,0,0,0.25)"
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
    </>
  );
});