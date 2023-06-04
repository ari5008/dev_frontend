import { Tag } from "@chakra-ui/react";
import { memo } from "react";

export const GenreTag = memo(({ genre }) => {

  return (
    <Tag
      borderRadius='full'
      variant='solid'
      bgGradient={genre === "ポップ" ? 'linear(to-b, purple.200, purple.600)' : genre === "可愛い" ? 'linear(to-b, pink.300, pink.400)' : genre === "ロック" ? 'linear(to-r, red, black)' : genre === "ヒップホップ" ? 'linear(to-b, orange.300, orange.600)' : genre === "レトロ" ? 'linear(to-b, teal.500, teal.700)' : genre === "癒されたい" ? 'linear(to-b, green.300, green.400)' : genre === "テンションが上がる" ? 'linear(to-b, red.300, red)' : genre === "無心で聞きたい" ? 'linear(to-b, gray.400, gray.500)' : genre === "ドライブで聞きたい" ? 'linear(to-b, cyan.400, cyan.600)' : genre === "最近のおすすめ" ? 'linear(to-b, yellow.400, yellow.500)' : null}
    >
      {genre}
    </Tag>
  )
})  