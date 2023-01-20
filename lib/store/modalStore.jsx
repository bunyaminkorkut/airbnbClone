import create from 'zustand'


const useModalStore = create((set) => ({
    loginListModal: false,
    toggleLoginListModal: () => set((state) => ({ loginListModal: !state.loginListModal })),
    setToggleLoginListModal: (payload) => set(_ => ({ loginListModal: payload })),
    ///////////////////////////
    registerModal: false,
    toggleRegisterModal: () => set((state) => ({ registerModal: !state.registerModal })),
    ////////////////////////////
    loginModal: false,
    toggleLoginModal: () => set((state) => ({ loginModal: !state.loginModal })),
    ////////////////////////////
    filterModal: false,
    toggleFilterModal: () => set((state) => ({ filterModal: !state.filterModal })),
}))
export default useModalStore