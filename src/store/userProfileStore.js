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
  removeThread: (id) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        threads: state.userProfile.threads.filter((thread) => thread.id !== id),
      },
    })),
  createReply: (replyId) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        replies: [replyId, ...state.userProfile.replies],
      },
    })),
  removeReply: (replyId) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        replies: state.userProfile.replies.filter(
          (reply) => reply.id !== replyId
        ),
      },
    })),
}));

export default useUserProfileStore;
