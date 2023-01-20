'use client';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillApple, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { auth } from "../../lib/firebase/firebase";
import { loginWithFacebook, loginWithGoogle, registerWithMail } from "../../lib/firebase/register";
import PhoneCodeList from "../../lib/phoneCodeList";
import useModalStore from "../../lib/store/modalStore"
import FloatInput from "../common/floatingLabelInput";
import SelectInput from "../common/select";
import ModalSkeleton from "./ModalSkeleton"

export const RegisterModal = () => {
  const [email, toggleEmail] = useState(true)
  const registerModal = useModalStore().registerModal
  const toggleRegisterModal = useModalStore().toggleRegisterModal

  let phoneCodes = []
  let list = PhoneCodeList()
  const phoneCodeList = () => {
    Object.values(list[0]).map((a, i) => { phoneCodes.push({ label: a.name + ' ' + `(${a.code})`, value: [(a.code), (Object.keys(list[0])[i])] }) })
  }
  const [selectedOption, setSelectedOption] = useState({ code: '+93', countryCode: 'AF' });
  auth.languageCode = selectedOption.countryCode
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption])
  phoneCodeList()

  const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();

  const onSubmit = (data) =>{
    console.log(data);
    registerWithMail({email:data.email, password:data.pass})
  }
  return (
    <ModalSkeleton show={registerModal} outsideClick={toggleRegisterModal} bgClass="bg-white w-[95%] sm:w-[550px] rounded-2xl">
      <div className="flex flex-col">
        <div className=" border-b">
          <div className="px-4 pb-6">
            <div className="flex justify-center relative items-end h-full font-bold">
              <button onClick={toggleRegisterModal} className="absolute left-0">
                <FaTimes />
              </button>
              <h3>Oturum açın</h3>
            </div>
          </div>
        </div>
        <div className="pt-6 px-6">
          <div className="pb-6">
            <h2 className="text-xl font-semibold">Airbnb'ye Hoş Geldiniz</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {email ? <div>
              <div>
                <div class="relative">
                  <input type="text" id="floating_filled" className={'rounded-t-lg' + " block  px-2.5 pb-3 pt-6 w-full text-md text-gray-900 bg-white border appearance-none focus:outline-none focus:border focus:ring-0 focus:border-black peer"} placeholder=" "  {...register("email", { required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
                  <label for="floating_filled" class="absolute text-lg text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
                </div>
              </div>
              <div>
                <div class="relative">
                  <input type="password" id="floating_filled" className={'border-y-0' + " block  px-2.5 pb-3 pt-6 w-full text-md text-gray-900 bg-white border appearance-none focus:outline-none focus:border focus:ring-0 focus:border-black peer"} placeholder=" " {...register("pass", { required: true, minLength:6 })}/>
                  <label for="floating_filled" class="absolute text-lg text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Şifre</label>
                </div>
              </div>
              <div>
                <div class="relative">
                  <input type="password" id="floating_filled" className={'rounded-b-lg' + " block  px-2.5 pb-3 pt-6 w-full text-md text-gray-900 bg-white border appearance-none focus:outline-none focus:border focus:ring-0 focus:border-black peer"} placeholder=" "{...register("passAgain",  { required: true, validate: value => value === getValues('pass')  })} />
                  <label for="floating_filled" class="absolute text-lg text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Şifre Tekrar</label>
                </div>
              </div>
              {errors.email && <span className="text-red-600 text-sm pl-2">Email adresi example@asd.com gibi olmalıdır.<br/></span>}
              {errors.pass && <span className="text-red-600 text-sm pl-2">Şifre en az 6 karakter olmalı.<br /></span>}
              {errors.passAgain && <span className="text-red-600 text-sm pl-2">Şifreler aynı olmalıdır.</span>}
            </div> :
              <div>
                <div className="relative" >
                  <label className="absolute text-sm text-gray-400 p-1 pl-4">Ülke/Bölge</label>
                  <SelectInput options={phoneCodes} onChange={(e) => { setSelectedOption({ code: e.target.value.split(",")[0], countryCode: e.target.value.split(",")[1] }); console.log(selectedOption) }} className={'w-full border pt-6 pb-4 px-2 rounded-t-xl'} />
                </div>
                <div>
                  <FloatInput addClass={'border-t-0 rounded-b-lg'} placeholder={'Telefon Numarası'} defaultValue={selectedOption.code} />
                </div>
                <p className="text-xs">Numaranızı doğrulamak için sizi arayacağız veya bir kısa mesaj göndereceğiz. Standart mesaj ve veri ücretleri uygulanır. <a className="text-semibold underline">Gizlilik Politikası</a> </p>
              </div>}
            <div className="pt-4">
              <button className="w-full p-3 text-white bg-airbnb rounded-xl">Devam Et</button>
            </div>
          </form>

          <p className="text-center py-4 text-xs">veya</p>
          <div className="flex flex-col gap-4">
            <div>
              <button onClick={loginWithFacebook} className="w-full border border-black p-3 rounded-xl hover:bg-gray-100 relative"><p className="absolute text-xl left-4 text-blue-600"><BsFacebook /></p> Facebook ile devam et</button>
            </div>
            <div>
              <button onClick={loginWithGoogle} className="w-full border border-black p-3 rounded-xl hover:bg-gray-100 relative"><p className="absolute text-xl left-4 text-orange-600"><BsGoogle /></p> Google ile devam et</button>
            </div>
            <div>
              <button className="w-full border border-black p-3 rounded-xl hover:bg-gray-100 relative"><p className="absolute text-xl left-4 text-black"><AiFillApple /></p> Apple ile devam et</button>
            </div>
            {email ?
              <div>
                <button onClick={() => { toggleEmail(!email) }} className="w-full border border-black p-3 rounded-xl hover:bg-gray-100 relative"><p className="absolute text-xl left-4 text-black"><AiOutlinePhone /></p> Telefon numarası ile devam et</button>
              </div> :
              <div>
                <button onClick={() => { toggleEmail(!email) }} className="w-full border border-black p-3 rounded-xl hover:bg-gray-100 relative"><p className="absolute text-xl left-4 text-black"><AiOutlineMail /></p> E-posta ile devam et</button>
              </div>}
          </div>
        </div>
      </div>
    </ModalSkeleton>
  )
}