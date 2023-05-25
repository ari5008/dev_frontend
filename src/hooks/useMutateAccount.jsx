import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useError } from "./useError";

export const useMutateAccount = () => {

  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { showMessage } = useMessage()
  const { switchErrorHandling } = useError()

  const updateAccountMutation = useMutation(
    (account) => 
       axios.put(`${import.meta.env.VITE_API_URL}/account/${account.id}`, {
        name: account.name,
        image_url: account.image_url,
        introduction: account.introduction,
      }),
    {
      onSuccess: (res, variables) => {
        const previousAccount = queryClient.getQueryData(['account'])
        if (previousAccount) {
          queryClient.setQueryData(
            ['account'],
            previousAccount.id === variables.id ? res.data : previousAccount
          )
        }
        showMessage({ title: "登録しました", status: "success" })
        navigate(`/account`)
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

  return { updateAccountMutation }
}