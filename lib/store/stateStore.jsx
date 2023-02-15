import create from 'zustand'


const useStateStore = create((set) => ({
  activeMobilePage: 'explore',
  setActiveMobilePage: (payload) => set(_ => ({ activeMobilePage: payload })),
  ///////////////////////////
  houseCount: null,
  setHouseCount: (payload) => set(_ => ({ houseCount: payload })),
  ///////////////////////////

}))
export default useStateStore