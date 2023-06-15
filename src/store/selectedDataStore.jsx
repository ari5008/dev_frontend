import { create } from "zustand";

export const selectedDataStore = create((set) => ({
  editedSelectedData: {
    id: 0,
    name: "",
    external_url: "",
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
        external_url: "",
        artists: "",
        image_url: "",
      },
    })
  )
}))