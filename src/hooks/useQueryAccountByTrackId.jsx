import { useQuery } from "@tanstack/react-query"
import { useError } from "./useError"
import axios from "axios"

export const useQueryAccountByTrackId = (trackId) => {
  const { switchErrorHandling } = useError()

  const getAccountByTrackId = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/getAccount/${trackId}`,
      { withCredentials: true }
    )
    return data
  }

  return useQuery({
    queryKey: ["account", trackId],
    queryFn: getAccountByTrackId,
    staleTime: Infinity,
    onError: (err) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response.data)
      }
    },
  })
}