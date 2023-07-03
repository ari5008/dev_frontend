import axios from 'axios';
import { useError } from './useError';
import { useQuery } from '@tanstack/react-query';

export const useQueryTracks = () => {
  const { switchErrorHandling } = useError();
  const getTracks = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tracks`,
      { withCredentials: true }
    );
    return data;
  };
  return useQuery({
    queryKey: ["tracks"],
    queryFn: getTracks,
    staleTime: Infinity,
    onError: (err) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message);
      } else {
        switchErrorHandling(err.response.data);
      }
    },
  });
};