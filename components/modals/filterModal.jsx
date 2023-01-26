'use client';
import { useState } from "react";
import { FaHotel, FaTimes, FaWarehouse } from "react-icons/fa";
import useModalStore from "../../lib/store/modalStore"
import { Columns } from "../columns";
import SliderBar from "../slider";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import ModalSkeleton from "./ModalSkeleton"
import Checkbox from '@mui/material/Checkbox';
import { BsBuilding, BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { Switch } from "@mui/material";
import { AddHome } from "../../lib/firebase/firebase";
import { getPhotos } from "../photos";
import { constants } from "buffer";

export const FilterModal = () => {

  const filterModal = useModalStore().filterModal
  const toggleFilterModal = useModalStore().toggleFilterModal
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [activeBedroom, setActiveBedroom] = useState(0)
  const [activeBeds, setActiveBeds] = useState(0)
  const [activeBath, setActiveBaths] = useState(0)
  const set = () => {
     getPhotos().then((res)=>{
       res.photos.map(photos => { 
        AddHome({photos}) 
      })
     })
  }


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
                  <div className="flex gap-4">
                    <div className="mt-2">
                      <Checkbox color="default" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl">Yerin tamami</h3>
                      <p>Tamamen size ait bir yer</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-2">
                      <Checkbox color="default" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl">Özel oda</h3>
                      <p>Bir evde veya otelde kendi odanızın yanı sıra bazı ortak alanlar</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-2">
                      <Checkbox color="default" />
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
              <div className=" text-[#707070] text-lg my-8 flex gap-4 text-black" >
                <div className="border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl ">
                  <BsHouseDoor />
                  <p className="text-sm">Ev</p>
                </div>
                <div className="border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl ">
                  <BsBuilding />
                  <p className="text-sm">Daire</p>
                </div>
                <div className="border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl ">
                  <FaWarehouse />
                  <p className="text-sm">Misafir Evi</p>
                </div>
                <div className="border hover:border-black flex flex-col hover:cursor-pointer text-black font-semibold justify-center items-start p-4 gap-6 text-3xl w-full rounded-xl ">
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
                  <div><Checkbox color="default" /> Wifi </div>
                  <div><Checkbox color="default" /> Mutfak </div>
                  <div><Checkbox color="default" /> Çamaşır makinesi </div>
                  <div><Checkbox color="default" /> Kurutma Makinesi </div>
                  <div><Checkbox color="default" /> Klima </div>
                  <div><Checkbox color="default" /> Isıtma </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 py-6">
              <h2 className="text-2xl font-semibold">Rezervasyon Seçenekleri</h2>
              <div className="mt-4 text-black text-lg flex gap-4 text-black flex-col" >
                <h3 className="font-semibold">Temel Olanaklar</h3>
                <div className="flex justify-between text-[#707070]">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Anında Rezervasyon</h2>
                    <p className="text-sm">Ev sahibinden onay beklemeden rezervasyon yapabileceğiniz kayıtlar</p>
                  </div>
                  <div>
                    <Switch />
                  </div>
                </div>
                <div className="flex justify-between text-[#707070]">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Kendi kendine giriş</h2>
                    <p className="text-sm">Varışta mekâna kolay erişim</p>
                  </div>
                  <div>
                    <Switch />
                  </div>
                </div>
                <div className="flex justify-between text-[#707070]">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Ücretsiz iptal</h2>
                    <p className="text-sm">Yalnızca ücretsiz iptal sunan konaklama yerlerini göster</p>
                  </div>
                  <div>
                    <Switch />
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
                  <div><Checkbox color="default" /> Basamaksız misafir girişi </div>
                  <div><Checkbox color="default" /> 81 cm'den geniş misafir girişi </div>
                  <div><Checkbox color="default" /> Engelli park yeri </div>
                  <div><Checkbox color="default" /> Misafir girişine giden basamaksız yol</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[90%] mx-auto my-6 py-6">
              <h2 className="text-2xl font-semibold">En üst düzey konaklamalar</h2>
              <div className="mt-4 text-black text-lg flex gap-4 text-black flex-col" >
                <div className="flex justify-between text-[#707070]">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Süper Ev Sahibi</h2>
                    <p className="text-sm">Saygın ev sahipleriyle kalın</p>
                  </div>
                  <div>
                    <Switch />
                  </div>
                </div>
                <div className="flex justify-between text-[#707070]">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-lg">Airbnb Plus</h2>
                    <p className="text-sm">Kalitesi ve tasarımı onaylanmış konaklama yerlerinden oluşan bir seçki</p>
                  </div>
                  <div>
                    <Switch />
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
                  <div><Checkbox color="default" /> Türkçe </div>
                  <div><Checkbox color="default" /> English </div>
                  <div><Checkbox color="default" /> French </div>
                  <div><Checkbox color="default" /> Japanese</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 font-semibold border-t relative align-center">
          <div className="h-full flex items-center justify-between w-[90%] mx-auto my-4">
            <button onClick={() => { set() }} className="underline hover:bg-[#e0e0e0] px-4 py-2 rounded-lg ">Tümünü temizle</button>
            <button className=" px-6 py-3 rounded-lg bg-[#222222] hover:bg-black text-white font-semibold ">evi goster</button>
          </div>
        </div>
      </div>
    </ModalSkeleton>
  )
}