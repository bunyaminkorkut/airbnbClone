'use client'
import { useRouter } from "next/navigation"
import { AiOutlineUser } from "react-icons/ai"
import { BsHeart, BsSearch } from "react-icons/bs"
import useStateStore from "../../lib/store/stateStore"

export const MobileFooter = () => {

  const activeMobilePage = useStateStore().activeMobilePage
  const setActiveMobilePage = useStateStore(state => state.setActiveMobilePage)
  const router = useRouter();


  return (
    <div className="flex justify-center gap-12 items-center h-full ">
      <div onClick={()=>{setActiveMobilePage('explore');router.push('/') }} className={"flex flex-col justify-between items-center text-2xl "+ (activeMobilePage === 'explore'? 'text-airbnb': 'text-[#b9b9b9]')}>
            <BsSearch />
            <p className={"text-sm " + (activeMobilePage === 'explore'? 'text-black': 'text-[#b9b9b9]')}>Keşfedin</p>
      </div>
      <div onClick={()=>{setActiveMobilePage('favourites'); router.push('/favourites') }} className={"flex flex-col justify-between items-center text-2xl "+ (activeMobilePage === 'favourites'? 'text-airbnb': 'text-[#b9b9b9]')}>
            <BsHeart />
            <p className={"text-sm  " + (activeMobilePage === 'fav'? 'text-black': 'text-[#b9b9b9]')}>Favoriler</p>
      </div>
      <div onClick={()=>{setActiveMobilePage('login'); router.push('/login')}} className={"flex flex-col justify-between items-center text-2xl "+ (activeMobilePage === 'login'? 'text-airbnb': 'text-[#b9b9b9]')}>
            <AiOutlineUser />
            <p className={"text-sm " + (activeMobilePage === 'login'? 'text-black': 'text-[#b9b9b9]')}>Giriş yap</p>
      </div>
    </div>
  )
}