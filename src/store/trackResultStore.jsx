import { create } from "zustand";

export const trackResultStore = create((set) => ({
  editedResultTrack: [],
  updateEditedResultTrack: (payload) => (
    set({
      editedResultTrack: payload
    })
  ),
  resetEditedResultTrack: () => (
    set({
      editedResultTrack: []
    })
  )
}))