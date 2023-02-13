'use client';
import { useEffect, useState } from "react";
import { FaHotel, FaTimes, FaWarehouse } from "react-icons/fa";
import useModalStore from "../../lib/store/modalStore"
import { Columns } from "../columns";
import SliderBar from "../slider";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import ModalSkeleton from "./ModalSkeleton"
import Checkbox from '@mui/material/Checkbox';
import { BsBuilding, BsHouseDoor, } from "react-icons/bs";
import { Switch } from "@mui/material";
import { AddHome } from "../../lib/firebase/firebase";
import { getPhotos } from "../photos";
import useFilterStore from "../../lib/store/filterStore";

export const FilterModal = () => {

  const filterModal = useModalStore().filterModal
  const toggleFilterModal = useModalStore().toggleFilterModal
  const setFilterList = useFilterStore(state => state.setFilterList)
  const filters = useFilterStore().filters
  const houseCount = useFilterStore().houseCount

  //////filters/////
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [activeBedroom, setActiveBedroom] = useState(0)
  const [activeBeds, setActiveBeds] = useState(0)
  const [activeBath, setActiveBaths] = useState(0)
  const [typeOfPlace, setTypeOfPlace] = useState({ allPlace: false, share: false, private: false })
  const [typeOfHome, setTypeOfHome] = useState({ home: false, apartment: false, guest: false, hotel: false })
  const [facilities, setFacilities] = useState({ wifi: false, kitchen: false, washing_machine: false, air_conditioning: false, dryer: false, heating: false })
  const [instantBook, setInstantBook] = useState(false)
  const [selfEnter, setSelfEnter] = useState(false)
  const [freeCancel, setFreeCancel] = useState(false)
  const [accessibility, setAccessibility] = useState({ steplessEnter: false, cm81: false, disabledParking: false, steplessWat: false })
  const [superHost, setSuperHost] = useState(false)
  const [airbnbPlus, setAirbnbPlus] = useState(false)
  const [language, setLanguage] = useState({ turkish: false, english: false, french: false, japanese: false })

  useEffect(() => {
    setFilterList({
      priceRange: priceRange,
      activeBedroom: activeBedroom,
      activeBeds: activeBeds,
      activeBath: activeBath,
      typeOfPlace: typeOfPlace,
      typeOfHome: typeOfHome,
      facilities: facilities,
      instantBook: instantBook,
      selfEnter: selfEnter,
      freeCancel: freeCancel,
      accessibility: accessibility,
      superHost: superHost,
      airbnbPlus: airbnbPlus,
      language: language,
    })
    console.log(filters);
  }, [priceRange, activeBedroom, activeBeds, activeBath, typeOfPlace, typeOfHome, facilities,
    instantBook, selfEnter, freeCancel, accessibility, superHost, airbnbPlus, language])






  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });
  const deleteFilters = () => {
    setPriceRange([0, 10000])
    setActiveBedroom(0)
    setActiveBeds(0)
    setActiveBaths(0)
    setTypeOfPlace({ allPlace: false, share: false, private: false })
    setTypeOfHome({ home: false, apartment: false, guest: false, hotel: false })
    setFacilities({ wifi: false, kitchen: false, washing_machine: false, air_conditioning: false, dryer: false, heating: false })
    setInstantBook(false)
    setSelfEnter(false)
    setFreeCancel(false)
    setAccessibility({ steplessEnter: false, cm81: false, disabledParking: false, steplessWat: false })
    setSuperHost(false)
    setAirbnbPlus(false)
    setLanguage({ turkish: false, english: false, french: false, japanese: false })
  }




  return (
    <ModalSkeleton slider={true} show={filterModal} outsideClick={toggleFilterModal} bgClass="bg-white w-[95%] sm:w-[750px] rounded-2xl">
      <div className="relative">
        <div className="fixed top-0 font-semibold border-b pb-4 relative align-center">
          <div className="flex justify-center">
            <div className="h-full flex items-center">
              <button onClick={toggleFilterModal} className="absolute left-6 my-auto">
                <FaTimes />
              </button>
              <h2>Filtreler</h2>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-hidden max-h-[calc(85vh-140px)] h-full">
          <div className="mx-6 mt-6 pb-8 border-b">
            <div className="mb-8">
              <div>
                <h2 className="font-semibold text-2xl">Fiyat Aralığı</h2>
                <h4 className="text-gray-500 text-lg pt-2">Ortalama fiyat şudur:</h4>
              </div>
            </div>
            <div className="w-[90%] mx-auto">
              <div className="relative">
                <Columns range={priceRange} />
              </div>
              <div className="pt-[50px]">
                <SliderBar onChange={setPriceRange} value={[priceRange[0] / 100, priceRange[1] / 100]} />
              </div>
            </div>
            <div className="flex w-[90%] mx-auto justify-between items-center gap-2 text-xl">
              <div className="w-6/12">
                <TextField
                  label="Minimum Fiyat"
                  className="w-full"
                  id="filled-start-adornment"
                  value={Math.floor((priceRange[0]))}
                  defaultValue={Math.floor((priceRange[0]))}
                  onChange={(e) => { setPriceRange([(e.target.value > priceRange[1] ? priceRange[1] : e.target.value), priceRange[1]]) }}
                  sx={{}}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">&#8378;</InputAdornment>,
                  }}
                  variant="filled"
                />
              </div>
              <div>
                -
              </div>
              <div className="w-6/12">
                <TextField
                  label="Maksimum Fiyat"
                  value={Math.floor((priceRange[1]))}
                  className="w-full"
                  id="filled-start-adornment"
                  defaultValue={Math.floor((priceRange[1]))}
                  onChange={(e) => { setPriceRange([priceRange[0], (e.target.value > 10000 ? 10000 : e.target.value)]) }}
                  sx={{}}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">&#8378;</InputAdornment>,
                  }}
                  variant="filled"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto  my-6">
              <h2 className="font-semibold text-2xl">
                Yerin türü
              </h2>
              <div className="mt-4 text-[#707070]">
                <div className="grid justify-center items-start grid-cols-2">
                  <div onClick={() => { setTypeOfPlace({ ...typeOfPlace, allPlace: !typeOfPlace.allPlace }) }} className="cursor-pointer flex gap-4">
                    <div className="mt-2">
                      <Checkbox color="default" checked={typeOfPlace.allPlace ? 'checked' : ''} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl">Yerin tamami</h3>
                      <p>Tamamen size ait bir yer</p>
                    </div>
                  </div>
                  <div onClick={() => { setTypeOfPlace({ ...typeOfPlace, private: !typeOfPlace.private }) }} className="flex gap-4 cursor-pointer">
                    <div className="mt-2">
                      <Checkbox color="default" checked={typeOfPlace.private ? 'checked' : ''} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl">Özel oda</h3>
                      <p>Bir evde veya otelde kendi odanızın yanı sıra bazı ortak alanlar</p>
                    </div>
                  </div>
                  <div onClick={() => { setTypeOfPlace({ ...typeOfPlace, share: !typeOfPlace.share }) }} className="flex gap-4 cursor-pointer">
                    <div className="mt-2">
                      <Checkbox color="default" checked={typeOfPlace.share ? 'checked' : ''} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl">Müşterek Oda</h3>
                      <p>Başkalarıyla paylaşılabilecek bir uyku alanı ve ortak alanlar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 border-y py-6">
              <h2 className="text-2xl font-semibold">Odalar ve Yataklar</h2>
              <div className="mt-4 text-[#707070] text-lg" >
                <div>
                  <h3>Yatak Odaları</h3>
                  <div className="my-4 flex justify-center items-center gap-2">
                    <button onClick={() => { setActiveBedroom(0) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 0 ? 'bg-black text-white' : 'text-black')}>Tümü</button>
                    <button onClick={() => { setActiveBedroom(1) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 1 ? 'bg-black text-white' : 'text-black')}>1</button>
                    <button onClick={() => { setActiveBedroom(2) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 2 ? 'bg-black text-white' : 'text-black')}>2</button>
                    <button onClick={() => { setActiveBedroom(3) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 3 ? 'bg-black text-white' : 'text-black')}>3</button>
                    <button onClick={() => { setActiveBedroom(4) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 4 ? 'bg-black text-white' : 'text-black')}>4</button>
                    <button onClick={() => { setActiveBedroom(5) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 5 ? 'bg-black text-white' : 'text-black')}>5</button>
                    <button onClick={() => { setActiveBedroom(6) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 6 ? 'bg-black text-white' : 'text-black')}>6</button>
                    <button onClick={() => { setActiveBedroom(7) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 7 ? 'bg-black text-white' : 'text-black')}>7</button>
                    <button onClick={() => { setActiveBedroom(8) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBedroom === 8 ? 'bg-black text-white' : 'text-black')}>8+</button>
                  </div>
                </div>
                <div>
                  <h3>Yataklar</h3>
                  <div className="my-4 flex justify-center items-center gap-2">
                    <button onClick={() => { setActiveBeds(0) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 0 ? 'bg-black text-white' : 'text-black')}>Tümü</button>
                    <button onClick={() => { setActiveBeds(1) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 1 ? 'bg-black text-white' : 'text-black')}>1</button>
                    <button onClick={() => { setActiveBeds(2) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 2 ? 'bg-black text-white' : 'text-black')}>2</button>
                    <button onClick={() => { setActiveBeds(3) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 3 ? 'bg-black text-white' : 'text-black')}>3</button>
                    <button onClick={() => { setActiveBeds(4) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 4 ? 'bg-black text-white' : 'text-black')}>4</button>
                    <button onClick={() => { setActiveBeds(5) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 5 ? 'bg-black text-white' : 'text-black')}>5</button>
                    <button onClick={() => { setActiveBeds(6) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 6 ? 'bg-black text-white' : 'text-black')}>6</button>
                    <button onClick={() => { setActiveBeds(7) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 7 ? 'bg-black text-white' : 'text-black')}>7</button>
                    <button onClick={() => { setActiveBeds(8) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBeds === 8 ? 'bg-black text-white' : 'text-black')}>8+</button>
                  </div>
                </div>
                <div>
                  <h3>Banyolar</h3>
                  <div className="my-4 flex justify-center items-center gap-2">
                    <button onClick={() => { setActiveBaths(0) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 0 ? 'bg-black text-white' : 'text-black')}>Tümü</button>
                    <button onClick={() => { setActiveBaths(1) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 1 ? 'bg-black text-white' : 'text-black')}>1</button>
                    <button onClick={() => { setActiveBaths(2) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 2 ? 'bg-black text-white' : 'text-black')}>2</button>
                    <button onClick={() => { setActiveBaths(3) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 3 ? 'bg-black text-white' : 'text-black')}>3</button>
                    <button onClick={() => { setActiveBaths(4) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 4 ? 'bg-black text-white' : 'text-black')}>4</button>
                    <button onClick={() => { setActiveBaths(5) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 5 ? 'bg-black text-white' : 'text-black')}>5</button>
                    <button onClick={() => { setActiveBaths(6) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 6 ? 'bg-black text-white' : 'text-black')}>6</button>
                    <button onClick={() => { setActiveBaths(7) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 7 ? 'bg-black text-white' : 'text-black')}>7</button>
                    <button onClick={() => { setActiveBaths(8) }} className={"border hover:border-black rounded-3xl px-4 py-2 w-full " + (activeBath === 8 ? 'bg-black text-white' : 'text-black')}>8+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6">
              <h2 className="text-2xl font-semibold">Yer tipi</h2>
              <div className=" text-[#707070] text-lg my-8 flex gap-4 text-black py-2 box-border"  >
                <div onClick={() => { setTypeOfHome({ ...typeOfHome, home: !typeOfHome.home }) }} className={"border box-border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl active:scale-95 duration-300 " + (typeOfHome.home ? ' border-black bg-[#f3f3f3]  border-2' : '')}>
                  <BsHouseDoor />
                  <p className="text-sm">Ev</p>
                </div>
                <div onClick={() => { setTypeOfHome({ ...typeOfHome, apartment: !typeOfHome.apartment }) }} className={"border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl active:scale-95 duration-300 " + (typeOfHome.apartment ? ' border-black bg-[#f3f3f3] border-2' : '')}>
                  <BsBuilding />
                  <p className="text-sm">Daire</p>
                </div>
                <div onClick={() => { setTypeOfHome({ ...typeOfHome, guest: !typeOfHome.guest }) }} className={"border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl active:scale-95 duration-300 " + (typeOfHome.guest ? ' border-black bg-[#f3f3f3] border-2' : '')}>
                  <FaWarehouse />
                  <p className="text-sm">Misafir Evi</p>
                </div>
                <div onClick={() => { setTypeOfHome({ ...typeOfHome, hotel: !typeOfHome.hotel }) }} className={"border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl active:scale-95 duration-300 " + (typeOfHome.hotel ? ' border-black bg-[#f3f3f3]  border-2' : '')}>
                  <FaHotel />
                  <p className="text-sm">Otel</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 py-6 border-y">
              <h2 className="text-2xl font-semibold">Olanaklar</h2>
              <div className="mt-4 text-black text-lg flex gap-4 text-black flex-col" >
                <h3 className="font-semibold">Temel Olanaklar</h3>
                <div className="grid grid-cols-2 text-[#707070]  text-[16px]">
                  <div className="cursor-pointer" onClick={() => { setFacilities({ ...facilities, wifi: !facilities.wifi }) }}  ><Checkbox color="default" checked={facilities.wifi ? 'checked' : ''} /> Wifi </div>
                  <div className="cursor-pointer" onClick={() => { setFacilities({ ...facilities, kitchen: !facilities.kitchen }) }}  ><Checkbox color="default" checked={facilities.kitchen ? 'checked' : ''} /> Mutfak </div>
                  <div className="cursor-pointer" onClick={() => { setFacilities({ ...facilities, washing_machine: !facilities.washing_machine }) }}  ><Checkbox color="default" checked={facilities.washing_machine ? 'checked' : ''} /> Çamaşır makinesi </div>
                  <div className="cursor-pointer" onClick={() => { setFacilities({ ...facilities, dryer: !facilities.dryer }) }}  ><Checkbox color="default" checked={facilities.dryer ? 'checked' : ''} /> Kurutma Makinesi </div>
                  <div className="cursor-pointer" onClick={() => { setFacilities({ ...facilities, air_conditioning: !facilities.air_conditioning }) }}  ><Checkbox color="default" checked={facilities.air_conditioning ? 'checked' : ''} /> Klima </div>
                  <div className="cursor-pointer" onClick={() => { setFacilities({ ...facilities, heating: !facilities.heating }) }}  ><Checkbox color="default" checked={facilities.heating ? 'checked' : ''} /> Isıtma </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 py-6">
              <h2 className="text-2xl font-semibold">Rezervasyon Seçenekleri</h2>
              <div className="mt-4 text-black text-lg flex gap-4 text-black flex-col" >
                <h3 className="font-semibold">Temel Olanaklar</h3>
                <div onClick={() => { setInstantBook(!instantBook) }} className="flex justify-between text-[#707070] cursor-pointer">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Anında Rezervasyon</h2>
                    <p className="text-sm">Ev sahibinden onay beklemeden rezervasyon yapabileceğiniz kayıtlar</p>
                  </div>
                  <div>
                    <Switch checked={(instantBook ? 'checked' : '')} />
                  </div>
                </div>
                <div onClick={() => { setSelfEnter(!selfEnter) }} className="flex justify-between text-[#707070] cursor-pointer">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Kendi kendine giriş</h2>
                    <p className="text-sm">Varışta mekâna kolay erişim</p>
                  </div>
                  <div>
                    <Switch checked={(selfEnter ? 'checked' : '')} />
                  </div>
                </div>
                <div onClick={() => { setFreeCancel(!freeCancel) }} className="flex justify-between text-[#707070] cursor-pointer">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Ücretsiz iptal</h2>
                    <p className="text-sm">Yalnızca ücretsiz iptal sunan konaklama yerlerini göster</p>
                  </div>
                  <div>
                    <Switch checked={(freeCancel ? 'checked' : '')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 py-6 border-y">
              <h2 className="text-2xl font-semibold">Erişilebilirlik özellikleri</h2>
              <p className=" text-[#707070]">Bu bilgi, ev sahibi tarafından sağlandı ve Airbnb tarafından incelendi.</p>
              <div className="mt-6 text-black text-lg flex gap-4 text-black flex-col" >
                <h3 className="font-semibold">Misafir girişı ve park yeri</h3>
                <div className="grid grid-cols-2 text-[16px] text-[#707070]">
                  <div className="cursor-pointer"  onClick={() => { setAccessibility({ ...accessibility, steplessEnter: !accessibility.steplessEnter }) }}  ><Checkbox color="default" checked={accessibility.steplessEnter ? 'checked' : ''} /> Basamaksız misafir girişi </div>
                  <div className="cursor-pointer" onClick={() => { setAccessibility({ ...accessibility, cm81: !accessibility.cm81 }) }}   ><Checkbox color="default" checked={accessibility.cm81 ? 'checked' : ''} /> 81 cm'den geniş misafir girişi </div>
                  <div className="cursor-pointer" onClick={() => { setAccessibility({ ...accessibility, disabledParking: !accessibility.disabledParking }) }}   ><Checkbox color="default" checked={accessibility.disabledParking ? 'checked' : ''} /> Engelli park yeri </div>
                  <div className="cursor-pointer" onClick={() => { setAccessibility({ ...accessibility, steplessWat: !accessibility.steplessWat }) }}   ><Checkbox color="default" checked={accessibility.steplessWat ? 'checked' : ''} /> Misafir girişine giden basamaksız yol</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 py-6">
              <h2 className="text-2xl font-semibold">En üst düzey konaklamalar</h2>
              <div className="mt-4 text-black text-lg flex gap-4 text-black flex-col" >
                <div onClick={() => { setSuperHost(!superHost) }} className="flex justify-between text-[#707070] cursor-pointer">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Süper Ev Sahibi</h2>
                    <p className="text-sm">Saygın ev sahipleriyle kalın</p>
                  </div>
                  <div>
                    <Switch checked={superHost ? 'checked' : ''} />
                  </div>
                </div>
                <div onClick={() => { setAirbnbPlus(!airbnbPlus) }} className="flex justify-between text-[#707070] cursor-pointer">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Airbnb Plus</h2>
                    <p className="text-sm">Kalitesi ve tasarımı onaylanmış konaklama yerlerinden oluşan bir seçki</p>
                  </div>
                  <div>
                    <Switch checked={airbnbPlus ? 'checked' : ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 border-t py-6">
              <h2 className="text-2xl font-semibold">Ev sahibinin konuştuğu dil</h2>
              <div className="mt-6 text-black text-lg flex gap-4 text-black flex-col" >
                <div className="grid grid-cols-2 text-[16px] text-[#707070]">
                  <div className="cursor-pointer" onClick={() => { setLanguage({ ...language, turkish: !language.turkish }) }} ><Checkbox color="default" checked={language.turkish ? 'checked' : ''} /> Türkçe </div>
                  <div className="cursor-pointer" onClick={() => { setLanguage({ ...language, english: !language.english }) }}><Checkbox color="default" checked={language.english ? 'checked' : ''} /> English </div>
                  <div className="cursor-pointer" onClick={() => { setLanguage({ ...language, french: !language.french }) }} ><Checkbox color="default" checked={language.french ? 'checked' : ''} /> French </div>
                  <div className="cursor-pointer" onClick={() => { setLanguage({ ...language, japanese: !language.japanese }) }} ><Checkbox color="default" checked={language.japanese ? 'checked' : ''} /> Japanese</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 font-semibold border-t relative align-center">
          <div className="h-full flex items-center justify-between w-[90%] mx-auto my-4">
            <button onClick={() => { deleteFilters() }} className="underline hover:bg-[#e0e0e0] px-4 py-2 rounded-lg ">Tümünü temizle</button>
            <button className=" px-6 py-3 rounded-lg bg-[#222222] hover:bg-black text-white font-semibold ">{houseCount} evi goster</button>
          </div>
        </div>
      </div>
    </ModalSkeleton>
  )
}