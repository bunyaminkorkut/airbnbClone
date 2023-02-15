import { Navbar } from "../../components/home/navbar"
import { LoginModal, RegisterModal } from "../../components/modals/loginModal"
import Slider from "../../components/home/slider"
import { FilterModal } from "../../components/modals/filterModal"
export default function RootLayout({ children }) {
  return (
    <>
      <LoginModal />
      <FilterModal />
      <div className="fixed z-20 bg-white w-[100vw]">
        <Navbar />
        <Slider />
      </div>
      {children}
    </>

  )
}
