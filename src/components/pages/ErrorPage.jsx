import { Box, Heading, Text } from "@chakra-ui/react"
import { memo } from "react"

export const ErrorPage = memo(() => {
  return (
    <>
      <Box display="flex" justifyContent="center" height="100vh">
        <Box textAlign="center" pt="3rem" >
          <Heading fontSize="6xl">404</Heading>
          <Text fontSize="2xl">page not found</Text>
          <Text fontSize="2xl" pt="3rem" >申し訳ございません。お探しのページは見つかりませんでした。</Text>
          <Text fontSize="2xl" >ページが存在しないか、予期しないエラーが発生しました。</Text>
          <br/>
        </Box>
      </Box>
    </>
  )
})