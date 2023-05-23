import create from "zustand";

const useStore = create((set) => ({
  token: "",
  user: null,
  currentModal: null,
  userDetails: {},
  setModal: (newModal) =>
    set((state) => ({ ...state, currentModal: newModal })),
  setToken: (newVal) => set((state) => ({ ...state, token: newVal })),
  setUser: (newUser) => set((state) => ({ ...state, user: newUser })),
  setUserDetails: (userDetail) =>
    set((state) => ({ ...state, userDetails: userDetail })),
}));

export default useStore;
