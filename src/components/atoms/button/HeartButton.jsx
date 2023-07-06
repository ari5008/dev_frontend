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
  const { createLikeFlagMutation, addLikeFlagMutation, addUnLikeFlagMutation } = useMutateLikeFlag()
  const { incrementTrackLikesMutation, decrementTrackLikesMutation } = useMutateTrack()

  async function initialize() {
    if (accountData?.id != 0 && trackData.id != 0) {
      await createLikeFlagMutation.mutateAsync({ account_id: accountData?.id, track_id: trackData.id });

      const { data: response } = await axios.get(`${import.meta.env.VITE_API_URL}/account/getLikeFlag/${trackData.id}`,
        { withCredentials: true }
      );
      setFlag(response.liked);
    }
  }

  useEffect(() => {
    if (!accountData || !trackData) return;

    initialize();

  }, [trackData.id, accountData?.id]);


  function handleClick() {
    if (flag === true) {
      decrementTrackLikesMutation.mutate({ ...trackData, likes: trackData.likes })
      addUnLikeFlagMutation.mutate({ account_id: accountData?.id, track_id: trackData.id })
      setFlag(false)
    } else {
      incrementTrackLikesMutation.mutate({ ...trackData, likes: trackData.likes })
      addLikeFlagMutation.mutate({ account_id: accountData?.id, track_id: trackData.id })
      setFlag(true)
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
      <Text ml={4}>{trackData.likes}</Text>
    </Button>
  )
});