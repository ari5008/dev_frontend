import { useQuery } from "@tanstack/react-query"
import { useError } from "./useError"
import axios from "axios"
import { accountStore } from "../store/accountStore"

export const useQueryAccount = () => {
  const { switchErrorHandling } = useError()
  const updateAccount = accountStore((state) => state.updateEditedAccount)

  const getAccount = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/account`,
      { withCredentials: true }
    )
    updateAccount(data)
    return data
  }

  return useQuery({
    queryKey: ["account"],
    queryFn: getAccount,
    staleTime: Infinity,
    refetchInterval: 2000,
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