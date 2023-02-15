import { Footer } from "../../components/home/footer";
import { LoginModal } from "../../components/modals/loginModal";
import { RegisterModal } from "../../components/modals/registerModal";

export default function Layout({ children }) {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <div className="fixed z-20 bg-white w-[100vw]">
      </div>
      {children}
      <Footer />
    </>

  )
}
