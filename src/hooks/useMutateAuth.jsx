import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"
import { useMutation } from "@tanstack/react-query"
import { useError } from "./useError"
import axios from "axios"
import { useLoginUser } from "../providers/LoginUserProvider"

export const useMutateAuth = () => {
  const { showMessage } = useMessage()
  const navigate = useNavigate()
  const { switchErrorHandling } = useError()
  const { setIsLoggedIn } = useLoginUser()

  const signupMutation = useMutation(
    async (user) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/signup`, user),
    {
      onSuccess: () => {
        navigate('/login')
        showMessage({ title: "登録しました", status: "success" })
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

  const loginMutation = useMutation(
    (user) =>
      axios.post(`${import.meta.env.VITE_API_URL}/login`, user),
    {
      onSuccess: () => {
        setIsLoggedIn(true)
        navigate('/')
        showMessage({ title: "ログインしました", status: "success" })
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

  return { signupMutation, loginMutation, logoutMutation }
}