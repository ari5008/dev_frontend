import { create } from "zustand";

export const selectedDataStore = create((set) => ({
  editedSelectedData: {
    id: 0,
    name: "",
    artists: "",
    image_url: "",
  },
  updateEditedSelectedData: (payload) => (
    set({
      editedSelectedData: payload
    })
  ),
  resetEditedSelectedData: () => (
    set({
      editedSelectedData: {
        id: 0,
        name: "",
        artists: "",
        image_url: "",
      },
    })
  )
}))