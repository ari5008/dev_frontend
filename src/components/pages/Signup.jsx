import { Box, Button, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { memo, useState } from "react"
import { Link } from 'react-router-dom'
import { useMutateAuth } from "../../hooks/useMutateAuth"
import authImage from "../../images/auto.jpg"

export const Signup = memo(() => {

  const outerBoxStyles = {
    background: `url(${authImage}) center/cover no-repeat`,
    backgroundPosition: 'center bottom',
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signupMutation, loading } = useMutateAuth()

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
      <Flex align="center" justify="center" pt={{ base: "0rem", md: "3.5rem" }} pb={{ base: "0px", md: "65px" }} h="90vh">
        <Box
          h="lg"
          w="lg"
          p={20}
          borderRadius="xl"
          shadow="md"
          sx={outerBoxStyles}
          color="purple.800"
        >
          <Box bg="black" border="1px solid white" borderRadius="md" mb={3}>
            <Heading as="h1" size="lg" textAlign="center" color="white" p={3}>新規登録</Heading>
          </Box>
          <form onSubmit={submitSignupHandler}>
            <Stack spacing={6} pt={10} px={{ base: "0px", md: "50px" }} >
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
                isLoading={loading}
                loadingText='登録する'
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
