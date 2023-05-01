import { Card, Image } from "@chakra-ui/react";
import { memo } from "react";

export const HomeSliderCard = memo(({ carouselItem }) => {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      borderRadius="10px"
      >
      <Image
        src={carouselItem.src}
        alt={carouselItem.alt}
        w={{ base: "44vh", md: "65vh" }}
        h={{ base: "44vh", md: "65vh" }}
        borderRadius="10px"
        objectFit='cover'
      />
    </Card>
  )
})