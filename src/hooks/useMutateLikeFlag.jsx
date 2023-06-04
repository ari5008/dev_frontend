import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useMutateLikeFlag = () => {

  const navigate = useNavigate()

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
const addLikeFlag = useMutation(
  async (likeFlag) => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/addLikeFlag`, likeFlag)
    return response;
  },
  {
    onSuccess: () => {
      navigate('/account/tracks')
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

const addUnLikeFlag = useMutation(
  async (likeFlag) => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/addUnLikeFlag`, likeFlag)
    return response;
  },
  {
    onSuccess: () => {
      navigate('/account/tracks')
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


return {
  createLikeFlagMutation,
  addLikeFlag,
  addUnLikeFlag,
}
}