import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useError } from './useError';
import axios from 'axios';
import { useMessage } from './useMessage';
import { useNavigate } from 'react-router-dom';
import { trackStore } from './../store/trackStore';
import { useState } from 'react';

export const useMutateTrack = () => {

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { switchErrorHandling } = useError()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false);
  const resetEditedTrack = trackStore((state) => state.resetEditedTrack)

  const createTrackMutation = useMutation(
    async (track) => {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/account/createTrack`, track)
      return response;
    },
    {
      onSuccess: (res) => {
        // createLikeFlagMutation{}
        queryClient.setQueryData(["tracks"], (oldTracks = []) => [...oldTracks, res.data])
        navigate('/account/tracks')
        showMessage({ title: "登録しました", status: "success" })
        resetEditedTrack()
        setLoading(false);
      },
      onError: (err) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
        setLoading(false);
      },
    }
  )

  const updateTrackMutation = useMutation(
    async (track) => {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/track/${track.id}`, {
        title: track.title,
        artist_name: track.artist_name,
        jacket_image: track.jacket_image,
        genre: track.genre,
        comment: track.comment,
        likes: track.likes,
        is_liked: track.is_liked,
        account_id: track.account_id,
      })
      return response;
    },
    {
      onSuccess: (res, variables) => {
        const previousAccount = queryClient.getQueryData(['tracks'])
        if (previousAccount) {
          queryClient.setQueryData(
            ['tracks'],
            previousAccount.id === variables.id ? res.data : previousAccount
          )
        }
        navigate(`/account/tracks`)
      },
      onError: (err) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )

  return {
    createTrackMutation,
    updateTrackMutation,
    loading,
  }
}