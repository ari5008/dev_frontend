import { Box, Button, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { memo, useState } from "react";
import { Link } from 'react-router-dom';
import { useMutateAuth } from "../../hooks/useMutateAuth";

const Signup = memo(() => {

  const outerBoxStyles = {
    background: 'url(https://source.unsplash.com/SAS0lq2QGLs) center/cover no-repeat',
    backgroundPosition: 'center bottom',
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signupMutation } = useMutateAuth()

  const submitSignupHandler = async (e) => {
    e.preventDefault()
    signupMutation
      .mutate({
        email: email,
        password: password,
      })
  }

  return (
    <>
      <Flex align="center" justify="center" pt="3rem">
        <Box h="lg" w="lg" p={20} borderRadius="xl" shadow="md" sx={outerBoxStyles} color="purple.800">
          <Box bg="black" border="1px solid white" borderRadius="md" mb={3}>
            <Heading as="h1" size="lg" textAlign="center" color="white" p={3}>新規登録</Heading>
          </Box>
          <form onSubmit={submitSignupHandler}>
            <Stack spacing={6} pt={10} px={8} >
              <Input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="white"
              />
              <Input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="white"
              />
              <Button
                colorScheme='teal'
                type="submit"
              >
                登録する(無料)
              </Button>
            </Stack>
          </form>
          <Box textAlign="center" shadow="md">
            <Divider my={6} />

            <Text color="white" mt={2} mb={6}>
              アカウントをお持ちの方
            </Text>
            <Link
              to='/login'
              style={{
                borderRadius: "5px",
                padding: '4px',
                color: "white",
                textDecoration: "underline"
              }}
            >
              ログイン
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  )
})

export default Signup;