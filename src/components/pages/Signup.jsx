import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" >アカウント登録ページです</Heading>
        <Divider my={4} />
        <form>
          <Stack spacing={4} py={4} px={10}>
            <Input placeholder="メールアドレス" value="" />
            <Input placeholder="パスワード" value="" />
            <Button
              colorScheme='teal'
              isDisabled=""
            >
              登録
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  )
}

export default Signup;