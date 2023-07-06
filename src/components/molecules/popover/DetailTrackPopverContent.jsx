import {  PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, Stack, Tag, Text } from "@chakra-ui/react"
import { memo } from "react"

export const DetailTrackPoverContent = memo(({ dat }) => {

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
        <PopoverArrow bg='#e8e9ef' />
        <PopoverCloseButton />
        <PopoverBody mt={4} mb={5} mx={1}>
          <Stack textAlign='left'>
            <span>
              <Tag colorScheme='blackAlpha'>選曲コメント</Tag>
            </span>
            <Text textAlign='left' ml={2} fontWeight='bold'>
              {(dat.comment != "") ? dat.comment : "...."}
            </Text>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </>
  )
})