import { FaSearch } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import '../globals.css'
export default function Layout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-white text-black">
        {children}
        </body>
    </html>
  )
}
