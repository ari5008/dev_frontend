import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useMutateLikeFlag = () => {
  const queryClient = useQueryClient()

  const createLikeFlagMutation = useMutation(
    async (likeFlag) => {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/account/createLikeFlag`, likeFlag)
      return response;
    },
    {
      onError: (err) => {
        if (err.response.data.message) {
          console.log(err.response.data.message)
        } else {
          console.log(err.response.data)
        }
      },
    }
  )
  const addLikeFlagMutation = useMutation(
    async (likeFlag) => {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/addLikeFlag`, likeFlag)
      return response;
    },
    {
      onSuccess: (res) => {
        const previousLikeFlag = queryClient.getQueryData(['likeFlag', res.data.track_id, res.data.account_id])
        if (previousLikeFlag) {
          queryClient.setQueryData(['likeFlag', res.data.track_id, res.data.account_id], {...previousLikeFlag, ...res.data})
        }
      },
      onError: (err) => {
        if (err.response.data.message) {
          console.log(err.response.data.message)
        } else {
          console.log(err.response.data.message)
        }
      },
    }
  )

  const addUnLikeFlagMutation = useMutation(
    async (likeFlag) => {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/addUnLikeFlag`, likeFlag)
      return response;
    },
    {
      onSuccess: (res) => {
        const previousLikeFlag = queryClient.getQueryData(['likeFlag', res.data.track_id, res.data.account_id])
        if (previousLikeFlag) {
          queryClient.setQueryData(['likeFlag', res.data.track_id, res.data.account_id], {...previousLikeFlag, ...res.data})
        }
      },
      onError: (err) => {
        if (err.response.data.message) {
          console.log(err.response.data.message)
        } else {
          console.log(err.response.data.message)
        }
      },
    }
  )

  const deleteLikeFlagMutation = useMutation(
    async (id) => {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/account/deleteLikeFlag/${id}`)
      return response;
    },
    {
      onError: (err) => {
        if (err.response.data.message) {
          console.log(err.response.data.message)
        } else {
          console.log(err.response.data.message)
        }
      },
    }
  )


  return {
    createLikeFlagMutation,
    addLikeFlagMutation,
    addUnLikeFlagMutation,
    deleteLikeFlagMutation,
  }
}