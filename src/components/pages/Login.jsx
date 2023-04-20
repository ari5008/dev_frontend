import { Box, Button, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const outerBoxStyles = {
    background: 'url(https://source.unsplash.com/SAS0lq2QGLs) center/cover no-repeat',
    backgroundPosition: 'center bottom',
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <Flex align="center" justify="center" height="90vh">
        <Box h="lg" w="lg" p={20} borderRadius="xl" shadow="md" sx={outerBoxStyles} color="purple.800">
          <Box bg="black" border="1px solid white" borderRadius="md" mb={3}>
            <Heading as="h1" size="lg" textAlign="center" color="white" p={3}>ログインページ</Heading>
          </Box>
          <form>
            <Stack spacing={6} pt={10} px={8} >
              <Input type="email" placeholder="メールアドレス" value={email} onChange={onChangeEmail} bg="white" />
              <Input type="password" placeholder="パスワード" value={password} onChange={onChangePassword} bg="white" />
              <Button
                colorScheme='teal'
                isDisabled=""
              >
                ログイン
              </Button>
            </Stack>
          </form>
          <Box textAlign="center" shadow="md">
            <Divider my={4} />

            <Text color="white" mt={4} mb={6}>
              アカウントを持っていない方
            </Text>
            <Link to='/signup' style={{ backgroundColor: '#2874aa', borderRadius: "10%", padding: '8px', color: "white" }}>登録する(無料)</Link>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Login;