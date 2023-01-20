'use client';
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import useModalStore from "../../lib/store/modalStore"
import { Columns } from "../columns";
import SliderBar from "../slider";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import ModalSkeleton from "./ModalSkeleton"
import Checkbox from '@mui/material/Checkbox';

export const FilterModal = () => {

  const filterModal = useModalStore().filterModal
  const toggleFilterModal = useModalStore().toggleFilterModal
  const [priceRange, setPriceRange] = useState([0, 100])

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
      <div>
        <div className="font-semibold border-b pb-4 relative align-center">
          <div className="flex justify-center">
            <div className="h-full flex items-center">
              <button onClick={toggleFilterModal} className="absolute left-6 my-auto">
                <FaTimes />
              </button>
              <h2>Filtreler</h2>
            </div>
          </div>
        </div>

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
              <SliderBar onChange={setPriceRange} value={priceRange} />
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
                onChange={(e) => { setPriceRange([e.target.value, priceRange[1]]) }}
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
                onChange={(e) => { setPriceRange([priceRange[0], e.target.value]) }}
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
      </div>
    </ModalSkeleton>
  )
}