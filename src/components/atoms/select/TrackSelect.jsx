import { Select } from "@chakra-ui/react";
import { memo } from "react";

export const TrackSelect = memo(({ editedTrack, updateTrack }) => {
  return (
    <>
      <Select
        width={{ base: "64%", md: "25%" }}
        onChange={(e) => updateTrack({...editedTrack, genre: e.target.value})}
        value={editedTrack.genre}
      >
      <option value='pop' >ポップ 🎶</option>
      <option value='cute'>可愛い 💖</option>
      <option value='rock'>ロック 🎸</option>
      <option value='retro'>レトロ &#x1F4FB;</option>
      <option value='relax'>癒されたい ☘️</option>
      <option value='tension'>テンションが上がる 🔥</option>
      <option value='innocence'>無心で聞きたい 😑</option>
      <option value='driving'>ドライブで聞きたい 🚗</option>
      <option value='recommend'>最近のおすすめ 👍</option>
    </Select >
    </>
  )
})