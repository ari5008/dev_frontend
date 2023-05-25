import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"

export const useError = () => {

  const { showMessage } = useMessage()
  const navigate = useNavigate()
  const getCsrfToken = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/csrf`
    )
    axios.defaults.headers.common['X-CSRF-TOKEN'] = data.csrf_token
  }

  const switchErrorHandling = (msg) => {

    let newErrors = []
    if (msg.includes('missing or malformed jwt')) {
      navigate('/login')
      newErrors.push('ログインしてください');
    }
    if (msg.includes('invalid csrf token')) {
      newErrors.push('ページの再読み込みが必要です');
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
    if (msg.includes('record not found')) {
      newErrors.push('メールアドレスが正しくありません');
    }
    if (msg.includes('crypto/bcrypt: hashedPassword is not the hash of the given password')) {
      newErrors.push('パスワードが正しくありません');
    }
    if (msg.includes('limited name max 20 char')) {
      newErrors.push('20文字以内で入力してください');
    }
    if (msg.includes('limited introduction max 100 char')) {
      newErrors.push('100文字以内で入力してください');
    }

    newErrors.map((err) => {
      showMessage({ title: err, status: "error" })
    })
  }

  return { switchErrorHandling }
}