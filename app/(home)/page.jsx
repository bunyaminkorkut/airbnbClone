import { Footer } from "../../components/home/footer"
import { Slider } from "../../components/home/slider"
import { RegisterModal } from "../../components/modals/registerModal"
import { PhotoList} from "../../components/photos"
import '../../styles/globals.css'
export default function Home() {
  return (
      <div className="relative">
        <RegisterModal />
        <PhotoList />
        <Footer />
      </div>
  )
}
