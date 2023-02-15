'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AiFillApple, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { BsFacebook, BsGoogle } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import FloatInput from "../../components/common/floatingLabelInput"
import SelectInput from "../../components/common/select"
import { auth } from "../../lib/firebase/firebase"
import { loginWithFacebook, loginWithGoogle } from "../../lib/firebase/register"
import PhoneCodeList from "../../lib/phoneCodeList"
import useModalStore from "../../lib/store/modalStore"
import useStateStore from "../../lib/store/stateStore"
import useUserStore from "../../lib/store/userStore"
import '../../styles/globals.css'

export default function Page() {
  const setActiveMobilePage = useStateStore(state => state.setActiveMobilePage)
  useEffect(() => {
    setActiveMobilePage('login')
  }, [])

  const router = useRouter()
  const [email, toggleEmail] = useState(true)
  const loginModal = useModalStore().loginModal
  const isAuth = useUserStore().auth

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

  useEffect(() => {
    if (isAuth === true) {
      if(loginModal){
        toggleLoginModal()
      }
    }
  }, [isAuth]);

  return (
    <div>
      <div className="flex flex-col">
        <div className=" border-b">
          <div className="px-4 py-4">
            <div className="flex justify-center relative items-end h-full font-bold">
              <h3>Oturum açın</h3>
            </div>
          </div>
        </div>
        <div className="pt-6 px-6">
          <div className="pb-6">
            <h2 className="text-xl font-semibold">Airbnb'ye Hoş Geldiniz</h2>
          </div>
          <form>
            {email ? <div>
              <FloatInput addClass={'rounded-t-lg'} placeholder={'E-mail'} />
              <FloatInput addClass={'border-t-0 rounded-b-lg'} placeholder={'Şifre'} />
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

          <button onClick={()=>{router.push('register')}} className="w-full p-3 text-white bg-airbnb rounded-xl mt-2">Kayit Ol</button>

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
    </div>
  )
}
