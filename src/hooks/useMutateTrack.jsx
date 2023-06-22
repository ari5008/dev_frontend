import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useError } from './useError';
import axios from 'axios';
import { useMessage } from './useMessage';
import { useNavigate } from 'react-router-dom';
import { trackStore } from './../store/trackStore';
import { trackResultStore } from '../store/trackResultStore';
import { selectedDataStore } from '../store/selectedDataStore';
import { useGenreRank } from './useGenreRank';

export const useMutateTrack = () => {

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { switchErrorHandling } = useError()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false);
  const resetEditedTrack = trackStore((state) => state.resetEditedTrack)
  const resetEditedResultTrack = trackResultStore((state) => state.resetEditedResultTrack)
  const resetEditedSelectedData = selectedDataStore((state) => state.resetEditedSelectedData)

  const createTrackMutation = useMutation(
    async (track) => {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/account/createTrack`, track)
      return response;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(["tracks", "Likes"], (oldTracks = []) => {
          const newTracks = [...oldTracks];
          newTracks.sort((a, b) => b.likes - a.likes);
          return [...newTracks, res.data];
        });
        queryClient.setQueryData(["tracks", "Asc"], (oldTracks = []) => {
          return [...oldTracks, res.data];
        });
        queryClient.setQueryData(["tracks", "Desc"], (oldTracks = []) => {
          return [res.data, ...oldTracks];
        });
        queryClient.setQueryData(['tracks', 'AccountId', res.data.account_id], (oldTracks = []) => {
          return [...oldTracks, res.data];
        });
        queryClient.setQueryData(["tracks", "Genre"], (oldTracks = []) => {
          const tracks = [...oldTracks, res.data];
          const newTracks = tracks.sort((a, b) => useGenreRank(a.genre) - useGenreRank(b.genre));
          return [...newTracks];
        });
        navigate('/account/tracks')
        showMessage({ title: "登録しました", status: "success" })
        resetEditedTrack()
        resetEditedResultTrack()
        resetEditedSelectedData()
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

  const deleteTrackMutation = useMutation(
    async (track) => {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/account/deleteTrack/${track.id}`)
      return response;
    },
    {
      onSuccess: (_, variables) => {
        const previousTracks = [
          queryClient.getQueryData(["tracks", "Likes"]),
          queryClient.getQueryData(["tracks", "Asc"]),
          queryClient.getQueryData(["tracks", "Desc"]),
          queryClient.getQueryData(["tracks", "Genre"]),
        ];
        const previousTrackByAccountId = queryClient.getQueryData(["tracks", "AccountId", variables.account_id
        ])
        if (previousTracks !== null && previousTracks !== undefined) {
          queryClient.setQueryData(
            ['tracks', 'Likes'],
            previousTracks[0].filter((track) => track.id !== variables.id)
          );
          queryClient.setQueryData(
            ['tracks', 'Asc'],
            previousTracks[1].filter((track) => track.id !== variables.id)
          );
          queryClient.setQueryData(
            ['tracks', 'Desc'],
            previousTracks[2].filter((track) => track.id !== variables.id)
          );
          queryClient.setQueryData(
            ['tracks', 'Genre'],
            previousTracks[3].filter((track) => track.id !== variables.id)
          );
        }
        if (previousTrackByAccountId) {
          queryClient.setQueryData(
            ["tracks", "AccountId", variables.account_id
            ],
            previousTrackByAccountId.filter((track) => track.id !== variables.id)
          )
        }
        navigate('/account')
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

  const incrementTrackLikesMutation = useMutation(
    async (track) => {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/incrementTrackLikes/${track.id}`, {
        likes: track.likes,
      })
      return response;
    },
    {
      onSuccess: (res, variables) => {
        const likesData = queryClient.getQueryData(["tracks", "Likes"]);
        const ascData = queryClient.getQueryData(["tracks", "Asc"]);
        const descData = queryClient.getQueryData(["tracks", "Desc"]);
        const genreData = queryClient.getQueryData(["tracks", "Genre"]);
        const previousTracks = [
          likesData !== null && likesData !== undefined ? likesData : [],
          ascData !== null && ascData !== undefined ? ascData : [],
          descData !== null && descData !== undefined ? descData : [],
          genreData !== null && genreData !== undefined ? genreData : [],
        ];
        const previousTracksByAccountId = queryClient.getQueryData(["tracks", "AccountId", variables.account_id])

        if (previousTracks) {
          queryClient.setQueryData(
            ['tracks', 'Likes'],
            previousTracks[0].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
          queryClient.setQueryData(
            ['tracks', 'Asc'],
            previousTracks[1].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
          queryClient.setQueryData(
            ['tracks', 'Desc'],
            previousTracks[2].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
          queryClient.setQueryData(
            ['tracks', 'Genre'],
            previousTracks[3].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
        }
        if (previousTracksByAccountId) {
          queryClient.setQueryData(
            ["tracks", "AccountId", variables.account_id],
            previousTracksByAccountId.map((previousTrackByAccountId) => (
              previousTrackByAccountId.id === variables.id ? res.data : previousTrackByAccountId
            ))
          )
        }
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

  const decrementTrackLikesMutation = useMutation(
    async (track) => {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/account/decrementTrackLikes/${track.id}`, {
        likes: track.likes,
      })
      return response;
    },
    {
      onSuccess: (res, variables) => {
        const likesData = queryClient.getQueryData(["tracks", "Likes"]);
        const ascData = queryClient.getQueryData(["tracks", "Asc"]);
        const descData = queryClient.getQueryData(["tracks", "Desc"]);
        const genreData = queryClient.getQueryData(["tracks", "Genre"]);
        const previousTracks = [
          likesData !== null && likesData !== undefined ? likesData : [],
          ascData !== null && ascData !== undefined ? ascData : [],
          descData !== null && descData !== undefined ? descData : [],
          genreData !== null && genreData !== undefined ? genreData : [],
        ];
        const previousTracksByAccountId = queryClient.getQueryData(["tracks", "AccountId", variables.account_id])

        if (previousTracks) {
          queryClient.setQueryData(
            ['tracks', 'Likes'],
            previousTracks[0].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
          queryClient.setQueryData(
            ['tracks', 'Asc'],
            previousTracks[1].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
          queryClient.setQueryData(
            ['tracks', 'Desc'],
            previousTracks[2].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
          queryClient.setQueryData(
            ['tracks', 'Genre'],
            previousTracks[3].map((previousTrack) => (
              previousTrack.id === variables.id ? res.data : previousTrack
            ))
          )
        }
        if (previousTracksByAccountId) {
          queryClient.setQueryData(
            ["tracks", "AccountId", variables.account_id],
            previousTracksByAccountId.map((previousTrackByAccountId) => (
              previousTrackByAccountId.id === variables.id ? res.data : previousTrackByAccountId
            ))
          )
        }
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

  return {
    createTrackMutation,
    deleteTrackMutation,
    incrementTrackLikesMutation,
    decrementTrackLikesMutation,
    loading,
  }
}