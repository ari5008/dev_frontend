import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const useError = () => {

  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const getCsrfToken = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/csrf`
    )
    axios.defaults.headers.common['X-CSRF-TOKEN'] = data.csrf_token
  }

  const switchErrorHandling = (msg) => {
    
    let newErrors = []
    if (msg.includes('invalid csrf token')) {
      newErrors.push('再度ログインしてください');
      getCsrfToken()
      navigate('/login')
    }
    if (msg.includes('require email')) {
      newErrors.push('メールアドレスは必須です');
    }
    if (msg.includes('limit email')) {
      newErrors.push('メールアドレスは30文字以内で入力してください');
    }
    if (msg.includes('correct email')) {
      newErrors.push('正しいメールアドレスの形式ではありません');
    }
    if (msg.includes('require password')) {
      newErrors.push('パスワードは必須です');
    }
    if (msg.includes('limit password')) {
      newErrors.push('パスワードは6文字以上30文字以内で入力してください');
    }
    if (msg.includes('same email')) {
      newErrors.push('同じメールアドレスが既に存在します');
    }

    setErrors(newErrors)
  }

  return { switchErrorHandling, errors }
}