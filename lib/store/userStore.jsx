import create from 'zustand'


const useUserStore = create((set) => ({
    auth: false,
    setAuth: (payload) => set(_ => ({ auth: payload })),
    // toggleAuth: () => set((state) => ({ auth: !state.auth })),
}))
export default useUserStore