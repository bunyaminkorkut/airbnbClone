import { Footer } from "../../components/home/footer";
import { LoginModal } from "../../components/modals/loginModal";

export default function Layout({ children }) {
  return (
    <>
      <LoginModal />
      <div className="fixed z-20 bg-white w-[100vw]">
      </div>
      {children}
      <Footer />
    </>

  )
}
