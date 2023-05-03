import { Button, Text } from "@chakra-ui/react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { memo } from "react"

export const HeratButton = memo(({ isFilled, count, handleClick }) => {

  return (
    <Button
      colorScheme='red'
      color="black"
      flex='1'
      variant='ghost'
      alignItems="center"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={faHeart}
        color={isFilled ? "red" : "black"}
      />
      <Text ml={4}>{count}</Text>
    </Button>
  )
})