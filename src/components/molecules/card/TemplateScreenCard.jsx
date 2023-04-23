import { Card, Image } from "@chakra-ui/react"
import { memo } from "react"

export const TemplateScreenCard = memo(({ carouselItem }) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
    >
      <Image
        src={carouselItem.src}
        alt={carouselItem.alt}
        h="65vh"
        w="65vh"
        objectFit='cover'
      />
    </Card>
  )
})