import { Button, Text } from "@chakra-ui/react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { memo, useEffect } from "react"
import { useMutateTrack } from "../../../hooks/useMutateTrack"
import { useQueryAccount } from "../../../hooks/useQueryAccount"
import { useMutateLikeFlag } from "../../../hooks/useMutateLikeFlag"
import { useQueryLikeFlag } from "../../../hooks/useQueryLikeFlag"

export const HeartButton = memo(({ dat: trackData }) => {

  const { data: accountData } = useQueryAccount()
  const { data: likeFlagData} = useQueryLikeFlag(trackData.id, accountData?.id)
  const { createLikeFlagMutation, addLikeFlagMutation, addUnLikeFlagMutation } = useMutateLikeFlag()
  const { incrementTrackLikesMutation, decrementTrackLikesMutation } = useMutateTrack()

  async function initialize() {
    if (accountData?.id != 0 && trackData.id != 0) {
      await createLikeFlagMutation.mutateAsync({ account_id: accountData?.id, track_id: trackData.id });
    }
  }

  useEffect(() => {
    if (!accountData || !trackData) return;

    initialize();

  }, [trackData.id, accountData?.id]);

  
  function handleClick() {
    if (likeFlagData?.liked === true) {
      decrementTrackLikesMutation.mutate({...trackData, likes: trackData.likes})
      addUnLikeFlagMutation.mutate({ account_id: accountData?.id, track_id: trackData.id })
    } else {
      incrementTrackLikesMutation.mutate({...trackData, likes: trackData.likes})
      addLikeFlagMutation.mutate({ account_id: accountData?.id, track_id: trackData.id })
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
        color={likeFlagData?.liked ? "red" : "black"}
      />
      <Text ml={4}>{trackData.likes}</Text>
    </Button>
  )
});