import { FaSearch } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { BsList } from "react-icons/bs"
import "../styles/globals.css"
import { Navbar } from "../components/home/navbar"
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-white text-black">
          <Navbar />
          {children}
        </body>
    </html>
  )
}
