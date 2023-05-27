import { Select } from "@chakra-ui/react";
import { memo } from "react";

export const TrackSelect = memo(() => {
  return (
    <>
      <Select width={{ base: "70%", md: "25%" }} >
        <option value='option1'>ポップ 🎶</option>
        <option value='option2'>可愛い 💖</option>
        <option value='option3'>ロック 🎸</option>
        <option value='option2'>レトロ &#x1F4FB;</option>
        <option value='option2'>癒されたい ☘️</option>
        <option value='option2'>テンションが上がる 🔥</option>
        <option value='option2'>無心で聞きたい 😑</option>
        <option value='option2'>ドライブで聞きたい 🚗</option>
        <option value='option2'>最近のおすすめ 👍</option>
      </Select>
    </>
  )
})