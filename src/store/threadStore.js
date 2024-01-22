import { create } from "zustand";

const useThreadStore = create((set) => ({
  threads: [],
  setThreads: (threads) => set({ threads }),
  createThread: (thread) =>
    set((state) => ({ threads: [thread, ...state.threads] })),
}));

export default useThreadStore;
