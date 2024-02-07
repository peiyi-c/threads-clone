import { create } from "zustand";
// store which profile we're checking
const useUserProfileStore = create((set) => ({
  userProfile: null,
  // set the user of ProfilePage
  setUserProfile: (userProfile) => set({ userProfile }),
  // for ui if user of ProfilePage equals to authUser
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
  addRepost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        reposts: [post.id, ...state.userProfile.reposts],
      },
    })),
  removeRepost: (id) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        reposts: state.userProfile.reposts.filter((repost) => repost.id !== id),
      },
    })),
}));

export default useUserProfileStore;
