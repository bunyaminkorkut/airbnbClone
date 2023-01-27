import create from 'zustand'


const useFilterStore = create((set) => ({
  allHauses: [],
  setAllHouses: (payload) => set(_ => ({ allHauses: payload })),
  ///////////////////////////
  filters: {
    priceRange:[0, 10000],
    activeBedroom:0,
    activeBeds:0,
    activeBath:0,
    typeOfPlace:{ allPlace: false, share: false, private: false },
    typeOfHome:{ home: false, apartment: false, guest: false, hotel: false },
    facilities:{ wifi: false, kitchen: false, washing_machine: false, air_conditioning: false, dryer: false, heating: false },
    instantBook:false,
    selfEnter:false,
    freeCancel:false,
    accessibility:{ steplessEnter: false, cm81: false, disabledParking: false, steplessWat: false },
    superHost:false,
    airbnbPlus:false,
    language:{ turkish: false, english: false, french: false, japanese: false },
  },
  setFilterList: (payload) => set(_ => ({ filters: payload })),
  // ///////////////////////////
  // priceRange: [0, 10000],
  // setPriceRange: (payload) => set(_ => ({ priceRange: payload })),
  // ///////////////////////////
  // activeBedroom: 0,
  // setActiveBedroom: (payload) => set(_ => ({ activeBedroom: payload })),
  // ///////////////////////////
  // activeBeds: 0,
  // setActiveBeds: (payload) => set(_ => ({ activeBeds: payload })),
  // ///////////////////////////
  // activeBath: 0,
  // setActiveBaths: (payload) => set(_ => ({ activeBath: payload })),
  // ///////////////////////////
  // typeOfPlace: { allPlace: false, share: false, private: false },
  // setTypeOfPlace: (payload) => set(_ => ({ typeOfPlace: payload })),
  // ///////////////////////////
  // typeOfHome: { home: false, apartment: false, guest: false, hotel: false },
  // setTypeOfHome: (payload) => set(_ => ({ typeOfHome: payload })),
  // ///////////////////////////
  // facilities: { wifi: false, kitchen: false, washing_machine: false, air_conditioning: false, dryer: false, heating: false },
  // setFacilities: (payload) => set(_ => ({ facilities: payload })),
  // ///////////////////////////
  // instantBook: false,
  // setInstantBook: () => set((state) => ({ instantBook: !state.instantBook })),
  // ///////////////////////////
  // selfEnter: false,
  // setSelfEnter: () => set((state) => ({ selfEnter: !state.instantBook })),
  // ///////////////////////////
  // freeCancel: false,
  // setFreeCancel: () => set((state) => ({ freeCancel: !state.freeCancel })),
  // ///////////////////////////
  // accessibility: { steplessEnter: false, cm81: false, disabledParking: false, steplessWat: false },
  // setAccessibility: (payload) => set(_ => ({ accessibility: payload })),
  // ///////////////////////////
  // superHost: false,
  // setSuperHost: () => set((state) => ({ superHost: !state.superHost })),
  // ///////////////////////////
  // airbnbPlus: false,
  // setAirbnbPlus: () => set((state) => ({ airbnbPlus: !state.airbnbPlus })),
  // ///////////////////////////
  // language: { turkish: false, english: false, french: false, japanese: false },
  // setLanguage: (payload) => set(_ => ({ language: payload })),
  // ///////////////////////////

}))
export default useFilterStore