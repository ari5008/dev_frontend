import { Button, Text } from "@chakra-ui/react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { memo, useEffect, useState } from "react"
import { useMutateTrack } from "../../../hooks/useMutateTrack"
import { useQueryAccount } from "../../../hooks/useQueryAccount"
import { useMutateLikeFlag } from "../../../hooks/useMutateLikeFlag"
import axios from "axios"

export const HeartButton = memo(({ dat: trackData }) => {

  const { data: accountData } = useQueryAccount()
  const [flag, setFlag] = useState(null);
  const { createLikeFlagMutation, addLikeFlag, addUnLikeFlag } = useMutateLikeFlag()
  const [count, setCount] = useState(trackData.likes)
  const { IncrementTrackLikesMutation, DecrementTrackLikesMutation } = useMutateTrack()

  async function initialize() {
    if (accountData?.id != 0 && trackData.id != 0) {
      await createLikeFlagMutation.mutateAsync({ account_id: accountData?.id, track_id: trackData.id });
    }
    const { data: response } = await axios.get(`${import.meta.env.VITE_API_URL}/account/getLikeFlag/${trackData.id}`,
      { withCredentials: true }
    );
    setFlag(response.liked);
  }

  useEffect(() => {
    if (!accountData || !trackData) return;

    initialize();

  }, [trackData.id, accountData?.id]);


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/account/track/${trackData.id}`).then(res => {
      setCount(res.data.likes);
    });
  }, [trackData.likes]);


  function handleClick() {
    if (flag === false) {
      IncrementTrackLikesMutation.mutate({...trackData, likes: count})
      addLikeFlag.mutate({ account_id: accountData?.id, track_id: trackData.id, likes: count })
      setCount(count + 1)
      setFlag(true)
    } else {
      DecrementTrackLikesMutation.mutate({...trackData, likes: count})
      addUnLikeFlag.mutate({ account_id: accountData?.id, track_id: trackData.id })
      setCount(count - 1)
      setFlag(false)
    }
  }

  return (
    <Button
      colorScheme='red'
      color="black"
      flex='1'
      variant='ghost'
      alignItems="center"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={faHeart}
        color={flag ? "red" : "black"}
      />
      <Text ml={4}>{count}</Text>
    </Button>
  )
});