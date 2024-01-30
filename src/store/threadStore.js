import { create } from "zustand";
// store which threads we're checking
const useThreadStore = create((set) => ({
  threads: [],
  setThreads: (threads) => set({ threads }),
  createThread: (thread) =>
    set((state) => ({ threads: [thread, ...state.threads] })),
  deleteThread: (id) =>
    set((state) => ({
      threads: state.threads.filter((thread) => thread.id !== id),
    })),
  addReply: (threadId, replyId) =>
    set((state) => ({
      threads: state.threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            replies: [replyId, ...thread.replies],
          };
        }
        return thread;
      }),
    })),
}));

export default useThreadStore;
