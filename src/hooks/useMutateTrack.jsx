import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useError } from './useError';
import axios from 'axios';
import { useMessage } from './useMessage';
import { useNavigate } from 'react-router-dom';
import { trackStore } from './../store/trackStore';

export const useMutateTrack = () => {

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { switchErrorHandling } = useError()
  const { showMessage } = useMessage()
  const resetEditedTrack = trackStore((state) => state.resetEditedTrack)

  const createTrackMutation = useMutation(
    async (track) => {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/account/createTrack`, track)
      return response;

    },
    {
      onSuccess: (res) => {
        const previousTracks = queryClient.getQueriesData(['tracks'])
        if (previousTracks) {
          queryClient.setQueryData(['tracks'], [...previousTracks, res.data])
        } 
        navigate('/tracks')
        showMessage({ title: "登録しました", status: "success" })
        console.log(res.data)
        resetEditedTrack()
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
  }
}