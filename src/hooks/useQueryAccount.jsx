import { useQuery } from "@tanstack/react-query"
import { useError } from "./useError"
import axios from "axios"

export const useQueryAccount = () => {
  const { switchErrorHandling } = useError()

  const getAccount = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/account`,
      { withCredentials: true }
    )
    return data
  }

  return useQuery({
    queryKey: ["account"],
    queryFn: getAccount,
    staleTime: Infinity,
    onError: (err) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response.data)
      }
      localStorage.removeItem("expiry");
    },
  })

}