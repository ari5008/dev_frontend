import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useError } from "./useError";
import { useState } from "react";

export const useMutateAccount = () => {

  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage()
  const { switchErrorHandling } = useError()

  const updateAccountMutation = useMutation(
    async (account) => {
      setLoading(true);
       const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/${account.id}`, {
        user_name: account.user_name,
        image_url: account.image_url,
        introduction: account.introduction,
      })
      return response;
    },
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

  return { updateAccountMutation, loading }
}