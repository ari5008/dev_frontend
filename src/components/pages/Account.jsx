import { Avatar, Box, Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { memo } from "react";

export const Account = memo(() => {
  return (
    <>
      <Flex
        mt="2.5rem"
        h="80vh"
        color='black'
        flexDirection='column'
      >
        <Box h={{ base: '360px', md: '300px' }} bg='white' borderTopRadius={10}>
          <Heading textAlign='center' fontSize="25px" py={7}>アカウント画面</Heading>
          <Box ml={{ base: '25px', md: '45px' }}>
            <form>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='left'
                pb={8}
              >
                <Avatar
                  // src='https://bit.ly/broken-link'
                  src="https://source.unsplash.com/tJZr5F72eFQ"
                  size='lg'
                  mr={6}
                />
                <Input variant='outline' placeholder='ユーザー名(20文字以内)' w="58%" />
              </Box>
              <Box
                display='flex'
                alignItems={{ base: 'center', md: 'flex-end' }}
                justifyContent='left'
                flexDirection={{ base: 'column', md: 'row' }}
              >
                <Textarea
                  placeholder='プロフィール(100文字以内)'
                  resize="none"
                  mr={5}
                  mb={{ base: '20px', md: '0px' }}
                />
                <Button colorScheme='teal' variant='outline' mr={8} size="md">登録する</Button>
              </Box>
            </form>
          </Box>
        </Box>
        <Box flex='1' bg='gray.200' borderBottomRadius={10}>
          <Text></Text>
        </Box>
      </Flex >
    </>
  )
});