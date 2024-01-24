import { create } from "zustand";
// store which profile we're checking
const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  addThread: (thread) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        threads: [thread.id, ...state.userProfile.threads],
      },
    })),
  createReply: (threadId) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        replies: [threadId, ...state.userProfile.replies],
      },
    })),
}));

export default useUserProfileStore;
