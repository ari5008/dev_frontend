import axios from 'axios';
import { useError } from './useError';
import { useQuery } from '@tanstack/react-query';

export const useTracksByAccountId = (accountId) => {
  const { switchErrorHandling } = useError()

  const getTrackByAccountId = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/account/trackByAccountId/${accountId}`,
      { withCredentials: true }
    )
    return data
  }

  return useQuery({
    queryKey: ["tracks", "AccountId", accountId],
    queryFn: getTrackByAccountId,
    staleTime: 0,
    refetchInterval: 2000,
    onError: (err) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response.data)
      }
    },
  })
}