'use client'
import { useEffect } from "react"
import useModalStore from "../../lib/store/modalStore"
import useStateStore from "../../lib/store/stateStore"
import '../../styles/globals.css'

export default function Page() {
  const toggleLoginModal = useModalStore().toggleLoginModal
  const toggleRegisterModal = useModalStore().toggleRegisterModal
  const setActiveMobilePage = useStateStore(state => state.setActiveMobilePage)
  useEffect(() => {
    setActiveMobilePage('favourites')
  }, [])


  return (
    <div>
      <div className="px-8 pt-12 flex flex-col gap-8">
        <h1 className="text-[2.5rem] font-semibold ">Favoriler</h1>
        <div className="flex font-semibold gap-4 flex-col">
            <h3 className="text-xl">Favori listelerinizi görmek için oturum açın</h3>
            <p className="text-[#a8a8a8]">Oturum açtıktan sonra favori listeleri oluşturabilir, görüntüleyebilir veya düzenleyebilirsiniz.</p>
          <div className="flex gap-4">
            <button onClick={toggleLoginModal} className="px-8 py-4 bg-airbnb text-white rounded-xl">Giriş Yap</button>
            <button onClick={toggleRegisterModal} className="px-8 py-4 bg-airbnb text-white rounded-xl">Kayıt Ol</button>
          </div>
        </div>
      </div>
    </div>
  )
}
