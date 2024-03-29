import { BsChevronUp, BsGlobe } from "react-icons/bs"
import { MobileFooter } from "./mobileFooter"

export const Footer = () => {


  return (
    <div className="md:h-[47px] h-16 fixed  bottom-0 bg-white md:bg-gray-100 border-t w-[100vw]">
      <div className="md:w-[88%] justify-between items-center h-full mx-auto xl:w-[90%] md:flex hidden">
        <div className="text-sm flex gap-1">
          <span>
            &copy;2023 Airbnb, Inc.
          </span>
          <span>-</span>
          <a className=" hover:cursor-pointer hover:border-b border-black">Gizlilik</a>
          <span>-</span>
          <a className=" hover:cursor-pointer hover:border-b border-black">Şartlar</a>
          <span>-</span>
          <a className=" hover:cursor-pointer hover:border-b border-black">Site Haritası</a>
        </div>
        <div className="flex justify-center items-center gap-6 font-semibold">
          <a className=" hover:cursor-pointer">
            <div className="flex justify-center items-center gap-1">
              <BsGlobe /> <span className="hover:border-b border-black">Türkçe(TR)</span>
            </div>
          </a>
          <a className=" hover:cursor-pointer">
            <div>
              <span className="hover:border-b border-black">&#8378; TRY</span>
            </div>
          </a>
          <a className=" hover:cursor-pointer">
            <div className="flex justify-center items-center">
              <span className="hover:border-b border-black mr-2">Destek ve kayaklar</span><BsChevronUp />
            </div>
          </a>
        </div>
      </div>
      <div className="md:hidden h-full my-auto">
            <MobileFooter />
      </div>
    </div>
  )
}