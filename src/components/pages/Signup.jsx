import { Box, Button, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { memo, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useError } from "../../hooks/useError";
import ErrorAlert from "../atoms/alert/ErrorAlert";

const Signup = memo(() => {

  const outerBoxStyles = {
    background: 'url(https://source.unsplash.com/SAS0lq2QGLs) center/cover no-repeat',
    backgroundPosition: 'bottom top',
  }

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { switchErrorHandling, errors } = useError()

  const submitAuthHandler = async (e) => {
    e.preventDefault()
    await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      email: email,
      password: password,
    })
      .then(() => {
        navigate('/login')
      })
      .catch((err) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      })
  }

  return (
    <>
      {errors && <ErrorAlert errors={errors} />}
      <Flex align="center" justify="center" >
        <Box h="lg" w="lg" p={20} borderRadius="xl" shadow="md" sx={outerBoxStyles} color="purple.800">
          <Box bg="black" border="1px solid white" borderRadius="md" mb={3}>
            <Heading as="h1" size="lg" textAlign="center" color="white" p={3}>新規登録</Heading>
          </Box>
          <form onSubmit={submitAuthHandler}>
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
            <Divider my={4} />

            <Text color="white" mt={4} mb={6}>
              アカウントをお持ちの方
            </Text>
            <Link
              to='/login'
              style={{ backgroundColor: 'black', borderRadius: "5px", padding: '8px', color: "white", border: "1px solid gray" }}

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