import { create } from "zustand";

export const trackStore = create((set) => ({
  editedTrack: {
    id: 0,
    title: "",
    artist_name: "",
    jacket_image: "",
    genre: "",
    comment: "",
    likes: 0,
  },
  updateEditedTrack: (payload) => (
    set({
      editedTrack: payload
    })
  ),
  resetEditedTrack: () => (
    set({
      editedTrack: {
        id: 0,
        title: "",
        artist_name: "",
        jacket_image: "",
        genre: "",
        comment: "",
        likes: 0,
      },
    })
  )
}))

