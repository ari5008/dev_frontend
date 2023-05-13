import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"
import { useMutation } from "@tanstack/react-query"
import { useError } from "./useError"
import axios from "axios"
import { useLoginUser } from "../providers/LoginUserProvider"
import { useState } from "react"

export const useMutateAuth = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage()
  const { switchErrorHandling } = useError()
  const { setIsLoggedIn } = useLoginUser()

  const signupMutation = useMutation(
    async (user) => {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, user);
      return response.data;
    },
    {
      onSuccess: () => {
        navigate('/login')
        showMessage({ title: "登録しました", status: "success" })
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

  const loginMutation = useMutation(
    async (user) => {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, user);
      return response.data;
    },
    {
      onSuccess: () => {
        setIsLoggedIn(true)
        navigate('/')
        showMessage({ title: "ログインしました", status: "success" })
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

  const logoutMutation = useMutation(
    async () => await axios.post(`${import.meta.env.VITE_API_URL}/logout`),
    {
      onSuccess: () => {
        setIsLoggedIn(false)
        navigate('/login')
        showMessage({ title: "ログアウトしました", status: "success" })
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

  return { signupMutation, loginMutation, logoutMutation, loading }
}