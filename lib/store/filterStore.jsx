import create from 'zustand'


const useFilterStore = create((set) => ({
  allHauses: [],
  setAllHouses: (payload) => set(_ => ({ allHauses: payload })),
  ///////////////////////////
  houseCount: null,
  setHouseCount: (payload) => set(_ => ({ houseCount: payload })),
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

}))
export default useFilterStore