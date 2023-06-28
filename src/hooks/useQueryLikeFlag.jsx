import axios from 'axios';
import { useError } from './useError';
import { useQuery } from '@tanstack/react-query';

export const useQueryLikeFlag = (trackId, accountId) => {
  const { switchErrorHandling } = useError();
  const getLikeFlag = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/account/getLikeFlag/${trackId}`,
      { withCredentials: true }
    );
    return data;
  };
  return useQuery({
    queryKey: ["likeFlag", trackId, accountId],
    queryFn: getLikeFlag,
    staleTime: 0,
    onError: (err) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message);
      } else {
        switchErrorHandling(err.response.data);
      }
    },
  });
};