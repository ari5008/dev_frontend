import { Avatar, Flex, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, Stack, Tag, Text } from "@chakra-ui/react"
import { memo } from "react"
import { FaSpotify } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useQueryAccountByTrackId } from "../../../hooks/useQueryAccountByTrackId"

export const DetailTrackPoverContent = memo(({ dat }) => {

  const { data } = useQueryAccountByTrackId(dat.id)

  return (
    <>
      <PopoverContent
        color='blue.800'
        bg='#e8e9ef'
        borderColor='#e8e9ef'
        style={{ left: "6px" }}
        borderRadius="3%"
        shadow="lg"
      >
        <PopoverHeader pt={4} border='0'>
          <Flex justifyContent='flex-start'>
            <Avatar
              size='lg'
              mr={6}
              src={data?.image_url}
              _hover={{ cursor: "pointer" }}
            />
            <Stack mt={2} textAlign='left'>
              <span>
                <Tag colorScheme='blackAlpha'>選曲者</Tag>
              </span>
              <Text fontWeight='bold' ml={2}>
                {(data?.user_name != "") ? data?.user_name : "名無し"}
              </Text>
            </Stack>
          </Flex>
        </PopoverHeader>
        <PopoverArrow bg='#e8e9ef' />
        <PopoverCloseButton />
        <PopoverBody mt={2}>
          <Stack textAlign='left'>
            <span>
              <Tag colorScheme='blackAlpha'>コメント</Tag>
            </span>
            <Text textAlign='left' ml={2} fontWeight='bold'>
              {(dat.comment != "") ? dat.comment : "...."}
            </Text>
          </Stack>
        </PopoverBody>
        <PopoverFooter
          border='0'
          pb={4}
        >
          <Flex justifyContent='flex-end' mr={1} color="green.600" >
            <Link to={dat.external_url} >
              <FaSpotify size="25px" />
            </Link>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </>
  )
})