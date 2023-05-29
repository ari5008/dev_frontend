import { Tag } from "@chakra-ui/react";
import { memo } from "react";

export const GenreTag = memo(({ genre }) => {

  return (
    <Tag
      borderRadius='full'
      variant='solid'
      bg={genre === "ポップ" ? 'orange.400' : genre === "可愛い" ? 'pink.400' : genre === "ロック" ? 'red.700' : genre === "レトロ" ? 'teal' : genre === "癒されたい" ? 'green.400' : genre === "テンションが上がる" ? 'red' : genre === "無心で聞きたい" ? 'gray.500' : genre === "ドライブで聞きたい" ? 'cyan.600' : genre === "最近のおすすめ" ? 'yellow.400' : null}
    >
      {genre}
    </Tag>
  )
})