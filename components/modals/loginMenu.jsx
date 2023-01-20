'use client';
import { useEffect, useRef } from "react";
import { logOut } from "../../lib/firebase/firebase";
import useModalStore from "../../lib/store/modalStore"
import useUserStore from "../../lib/store/userStore";

export const LoginMenu = ({ show }) => {
  const setToggleLoginListModal = useModalStore().setToggleLoginListModal
  const toggleLoginModal = useModalStore().toggleLoginModal
  const toggleRegisterModal = useModalStore().toggleRegisterModal
  const isAuth = useUserStore().auth

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleLoginListModal(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={show ? wrapperRef : null} className={(show ? '' : 'hidden') + ' absolute z-20 top-12 right-0 '}>
      {isAuth ?
        <div className="bg-white py-4 rounded-xl shadow-md shadow-gray-800/60">
          <ul className="flex flex-col pb-2 border-b border-gray-200">
            <button onClick={() => { }} className=" text-left">
              <li className="font-semibold px-4 py-2  hover:bg-gray-100">
                Mesajlar
              </li>
            </button>
            <button onClick={() => { }} className=" text-left">
              <li className="font-semibold px-4 py-2  hover:bg-gray-100">
                Bildirimler
              </li>
            </button>
            <button onClick={() => {}} className=" text-left">
              <li className="font-semibold px-4 py-2  hover:bg-gray-100">
                Seyehatler
              </li>
            </button>
            <button onClick={() => { }} className=" text-left">
              <li className="px-4 py-2 font-semibold   hover:bg-gray-100">
                Istek Listeleri
              </li>
            </button>
          </ul>
          <ul className="flex flex-col border-b border-gray-200 pb-2 pt-2">
            <button className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Evinizi Airbnb'ye Taşıyın</li>
            </button>
            <button className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Bir deneyime ev sahipliği yapın</li>
            </button>
            <button className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Hesap
              </li>
            </button>
          </ul>
          <ul className="flex flex-col pt-2">
            <button className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Yardım</li>
            </button>
            <button onClick={()=>{logOut();setToggleLoginListModal()}} className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Oturumu Kapatın</li>
            </button>
          </ul>
        </div>
        :
        <div className="bg-white py-4 rounded-xl shadow-md shadow-gray-800/60">
          <ul className="flex flex-col pb-2 border-b border-gray-200">
            <button onClick={() => { toggleLoginModal(); setToggleLoginListModal() }} className=" text-left">
              <li className="font-semibold px-4 py-2  hover:bg-gray-100">
                Oturum Açın
              </li>
            </button>
            <button onClick={() => { toggleRegisterModal(); setToggleLoginListModal() }} className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Kaydolun
              </li>
            </button>
          </ul>
          <ul className="flex flex-col pt-2">
            <button className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Evinizi Airbnb'ye Taşıyın</li>
            </button>
            <button className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Bir deneyime ev sahipliği yapın</li>
            </button>
            <button className=" text-left">
              <li className="px-4 py-2  hover:bg-gray-100">
                Yardım
              </li>
            </button>
          </ul>
        </div>}
    </div>
  )
}