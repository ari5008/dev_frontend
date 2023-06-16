import { Tag } from "@chakra-ui/react";
import { memo } from "react";

export const GenreTag = memo(({ genre }) => {

  return (
    <Tag
      borderRadius='full'
      variant='solid'
      bgGradient={genre === "ポップ" ? 'linear(to-b, purple.700, purple.600, purple.300)' : genre === "可愛い" ? 'linear(to-r, pink.500, red.400, pink.500)' : genre === "ロック" ? 'linear(to-r, red, black)' : genre === "ヒップホップ" ? 'linear(to-b, orange.300, orange.500, orange.500)' : genre === "レトロ" ? 'linear(to-b, teal.500, teal.700)' : genre === "アンニュイ" ? 'linear(to-b, blue.500, gray.500)' : genre === "癒されたい" ? 'linear(to-r, green.500, green.400, green.500)' : genre === "テンションが上がる" ? 'linear(to-b, red.700, red, red.300)' : genre === "無心で聞きたい" ? 'linear(to-b, gray.400, gray.500)' : genre === "ドライブで聞きたい" ? 'linear(to-l, blue.400, cyan.400)' : genre === "最近のおすすめ" ? 'linear(to-b, yellow.600, yellow.500, yellow.700)' : null}
    >
      {genre}
    </Tag>
  )
})  