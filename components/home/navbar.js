import { FaSearch } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { BsList } from "react-icons/bs"
import Link from "next/link"

export const Navbar = () => {
    return (
        <header className='flex justify-between max-w-screen-2xl px-[5%] h-[80px] items-center m-auto'>
            <div>
                <Link href={'/'}>
                    <img className="h-[32px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' width='102' alt="logo picture" />
                </Link>
            </div>
            <div className="flex flex-row justify-center border-2 h-12 items-center text-center text-sm rounded-3xl shadow-sm hover:shadow-md duration-300">
                <button className='w-[140px] rounded-l-3xl h-12 font-semibold'>
                    Herhangi bir yer
                </button>
                <button className='w-[150px] h-12 font-semibold '>
                    <div className="border-x">
                        Herhangi bir hafta
                    </div>
                </button>
                <button className='w-[118px] h-12'>
                    Misafir ekle
                </button>
                <button className='w-[40px] h-12 rounded-r-3xl '>
                    <div className="text-white flex justify-center items-center rounded-[16px] bg-airbnb h-8 w-[32px]">
                        <FaSearch className='m-auto bg-airbnb ' />
                    </div>
                </button>
            </div>
            <div className='flex flex-row justify-center'>
                <button className="hover:bg-[#f3f3f3f3] h-[42px] w-[177px] rounded-[21px] font-semibold text-sm">
                    Evinizi Airnbn'ye taşıyın
                </button>
                <button className="h-[42px] hover:bg-[#f3f3f3f3] w-[40px] rounded-[50%] text-center"><BsGlobe className="m-auto font-semibold" /></button>
                <div className="flex h-42 border-2 text-xl px-3 rounded-3xl shadow-sm items-center hover:shadow-md duration-300">
                <BsList />
                <span className="ml-2 text-2xl bg-[#717171] text-white border-2 border-[#717171] rounded-[50%]"><AiOutlineUser /></span>
                </div>
            </div>
        </header>
    )
}