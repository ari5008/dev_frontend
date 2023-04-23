import { Card, Image } from "@chakra-ui/react";
import { memo } from "react";

export const SamllScreenCard = memo(({ carouselItem }) => {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow='hidden'
    >
      <Image
        src={carouselItem.src}
        alt={carouselItem.alt}
        h="44vh"
        w="44vh"
        objectFit='cover'
      />
    </Card>
  )
})