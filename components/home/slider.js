'use client';
import { useModal } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineDribbble, AiOutlineHeatMap, AiOutlineHome } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight, BsFillExclamationTriangleFill, BsFillTreeFill, BsSnow3, BsSuitSpadeFill, BsTriangle, BsTsunami } from "react-icons/bs";
import { FaFilter, FaMountain, FaSwimmingPool } from "react-icons/fa";
import useModalStore from "../../lib/store/modalStore";

export function Slider() {
  const SliderComps = [
    {
      icon: <BsTriangle />,
      name: 'Üçgen Evler',
    },
    {
      icon: <FaSwimmingPool />,
      name: 'Muhteşem Havuzlar',
    },
    {
      icon: <AiOutlineDribbble />,
      name: 'Spor',
    },
    {
      icon: <AiOutlineHeatMap />,
      name: 'Sıradışı',
    },
    {
      icon: <FaMountain />,
      name: 'Dağ Evleri',
    },
    {
      icon: <AiOutlineHome />,
      name: 'Villalar',
    },
    {
      icon: <AiFillHeart />,
      name: 'Balayı',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsTriangle />,
      name: 'Üçgen Evler',
    },
    {
      icon: <FaSwimmingPool />,
      name: 'Muhteşem Havuzlar',
    },
    {
      icon: <AiOutlineDribbble />,
      name: 'Spor',
    },
    {
      icon: <AiOutlineHeatMap />,
      name: 'Sıradışı',
    },
    {
      icon: <FaMountain />,
      name: 'Dağ Evleri',
    },
    {
      icon: <AiOutlineHome />,
      name: 'Villalar',
    },
    {
      icon: <AiFillHeart />,
      name: 'Balayı',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
    {
      icon: <BsFillTreeFill />,
      name: 'Ağaç Evler',
    },
    {
      icon: <BsSnow3 />,
      name: 'Kış',
    },
    {
      icon: <BsSuitSpadeFill />,
      name: 'Eğlence',
    },
    {
      icon: <BsTsunami />,
      name: 'Sahil',
    },
  ]
  const [active, setActive] = useState(0)
  const [scrollY, setScrollY] = useState(0);
  const toggleFilterModal = useModalStore().toggleFilterModal

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div style={{ padding: (scrollY < 100 ? `${15 - (scrollY / 10)}px 0` : '5px 0') }} className={"hidden md:flex md:px-[6%] px-4 xl:px-[5%] " + (scrollY !== 0 ? 'border-b' : '')}>
      <div className="flex gap-2 md:w-[88%] xl:w-[90%] mx-auto" >
        <div className="flex whitespace-nowrap overflow-auto left-0 scrollbar-hide relative">
          {/* <div className={"flex fixed justify-center bg-white shadow-[10px_0px_20px_10px_rgba(255,255,255,1)] items-center h-[60px] z-20 "+(scrollY !==0?'hidden':'')}>
          <button className="p-1 font-semibold hover:shadow-md border-2 bg-white rounded-full">
            <BsChevronLeft />
            <p>{scrollY}</p>
          </button>
        </div> */}
          {
            SliderComps.map((item, i) => {
              return (
                <div
                  onClick={() => setActive(i)}
                  className={"flex flex-col active:scale-90 justify-center items-center hover:opacity-100 mx-4 duration-75 cursor-pointer hover:border-b-2 border-black " + (active === i ? 'opacity-100 border-b-2' : ' opacity-50 ')}>
                  <div className="text-2xl">
                    {item.icon}
                  </div>
                  <div className="text-[12px] text-center">
                    <p className="py-2">{item.name}</p>
                  </div>
                </div>
              )
            })
          }
          {/* <div className="flex self-end fixed justify-center shadow-[-10px_0px_20px_10px_rgba(255,255,255,1)] xl:right-[calc(5vw+88px)]  md:right-[calc(6vw+88px)] fixed h-[60px] items-center bg-white z-20">
          <button className="p-1 font-semibold hover:shadow-md border-2 bg-white rounded-full">
            <BsChevronRight />
          </button>
        </div> */}
        </div>
        <div className="flex justify-center pl-1 items-center">
          <button onClick={toggleFilterModal} className="flex text-xs p-4 rounded-xl border gap-1">
            <FaFilter />
            <p>
              Filtrele
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;