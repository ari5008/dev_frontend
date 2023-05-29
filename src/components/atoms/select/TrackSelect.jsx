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
      <option value='ポップ'>ポップ 🎶</option>
      <option value='可愛い'>可愛い 💖</option>
      <option value='ロック'>ロック 🎸</option>
      <option value='レトロ'>レトロ 💿</option>
      <option value='癒されたい'>癒されたい ☘️</option>
      <option value='テンションが上がる'>テンションが上がる 🔥</option>
      <option value='無心で聞きたい'>無心で聞きたい 😑</option>
      <option value='ドライブで聞きたい'>ドライブで聞きたい 🚗</option>
      <option value='最近のおすすめ'>最近のおすすめ 👍</option>
    </Select >
    </>
  )
})