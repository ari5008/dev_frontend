import { ChatIcon, CheckIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react";
import { memo } from "react";
import { TrackSelect } from "../atoms/select/TrackSelect";

export const CreateTrack = memo(() => {

  // const outerBoxStyles = {
  //   background: 'url(https://source.unsplash.com/iEKg9h5_hd4) center/cover no-repeat',
  //   backgroundPosition: 'center bottom',
  // }

  return (
    <>
      <Box
        bgGradient='linear(to-r, gray.100, white, gray.100)'
        mt="2rem"
        mb="2rem"
        borderRadius="15px"
        color="black"
      >
        <Heading textAlign='center' fontSize="25px" py={6} >曲を選択</Heading>
        <Flex align="center" justifyContent="center" w="90%" m="auto">
          <Box pb={6} w="80%">
            <Text mb='8px'>曲名</Text>
            <Input
              placeholder="好きな曲を選択しよう (20文字以内)"
              size={{ base: "lg", md: "md" }}
            />
          </Box>
          <Button mt={3} color="gray" ml={2} size={{ base: "lg", md: "md" }}>
            検索する
            <SearchIcon ml={1} />
          </Button>
        </Flex>
        <Flex
          align="center"
          justifyContent="left"
          pl={{ base: "30px", md: "65px", lg: "105px" }}
          pb={{ base: "20px", md: "10px" }}>
          <TrackSelect
          />
        </Flex>
        <Box>
          <Image
            src="https://source.unsplash.com/lFdMky1WMSk"
            className="Image"
            borderRadius="50%"
            boxSize="200px"
            m="auto"
          />
          <Flex flexDirection="column" justify="center" align="center" pb={5} pt={3}>
            <Text fontSize="13px">アーティスト名</Text>
            <Text color="gray.800" fontSize="xl" textShadow="1px 0px 1px #0b0c0d" >リアリスト</Text>
          </Flex>
        </Box>
        <Flex align="center" justifyContent="center" w="95%" m="auto">
          <Box pb={6} w="90%">
            <Flex justify="left" alignItems="center">
              <Text >推しコメント(任意)</Text>
              <ChatIcon ml={1} />
            </Flex>
            <Textarea
              size={{ base: "lg", md: "md" }}
              placeholder="(100文字以内)"
              resize="none"
              type="text"

            />
          </Box>
        </Flex>
        <Flex align="center" justifyContent='center'>
          <Button
            colorScheme='teal'
            type="submit"
            loadingText='登録する'
            mb={5}
            size={{ base: "lg", md: "md" }}
          >
            登録する
            <CheckIcon ml={1} />
          </Button>
        </Flex>
      </Box>
    </>
  )
})