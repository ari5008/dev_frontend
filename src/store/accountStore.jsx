import { create } from "zustand";

export const accountStore = create((set) => ({
  editedAccount: {
    id: 0,
    name: "",
    image_url: "",
    introduction: "",
  },
  updateEditedAccount: (payload) =>
    set({
      editedAccount: payload
    }),
  resetEditedAccount: () =>
    set({
      editedAccount: {
        id: 0,
        name: "",
        image_url: "",
        introduction: "",
      }
    }),
}))