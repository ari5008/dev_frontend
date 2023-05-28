import { Image } from "@chakra-ui/react";
import { memo } from "react";
import "../../../styles.css"
import peopleImage from "../../../images/people.png"


export const TrackImage = memo(({ src, boxSize }) => {
  return (
    <Image
      className="Image"
      borderRadius="50%"
      boxSize={boxSize}
      src={src || peopleImage}
      m="auto"
    />
  )
})