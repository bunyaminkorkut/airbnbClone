'use client';
import { Image } from '@nextui-org/react';
import React, { Component, useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { BsDot, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export function PhotoCarousel({ image }) {
  const [swap, setSwap] = useState(0)
  const [hover, setHover] = useState(false)

  const previous = () => {
    setSwap(swap - (280))
  }
  const next = () => {
    setSwap(swap + (280))
  }
  return (
    <div className='h-auto absolute relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className={'absolute z-10 flex justify-between w-[80%] mx-[10%] top-[95px] ' + (hover ? 'opacity-90' : 'hidden')}>
        {<button className={'text-gray-300 text-2xl bg-black/70 rounded-full shadow-md shadow-gray-800/60 ' + (swap === 0 ? 'opacity-0 pointer-events-none' : '')} onClick={previous}><BsFillArrowLeftCircleFill /></button>}
        <button className={'text-gray-300 text-2xl bg-black/70 rounded-full shadow-md shadow-gray-800/60 ' + (swap === (840) ? 'opacity-0 pointer-events-none' : '')} onClick={next}><BsFillArrowRightCircleFill /></button>
      </div>
      <div className={'absolute z-10 text-white flex justify-center items-center top-[165px] text-3xl w-full '+ (hover ? '' : 'hidden')}>
        <div className={(swap !== 0 ? 'opacity-80' : 'text-[40px]')}>
          <BsDot />
        </div>
        <div className={(swap !== 280 ? 'opacity-80' : 'text-[40px]')}>
          <BsDot />
        </div>
        <div className={(swap !== 560 ? 'opacity-80' : 'text-[40px]')}>
          <BsDot />
        </div>
        <div className={(swap !== 840 ? 'opacity-80' : 'text-[40px]')}>
          <BsDot />
        </div>
      </div>
      <div style={{transform: `translate(-${swap}px)`}} className={'flex transition duration-300 absolute'+`-translate-x-[${swap}px]`}>
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <img src={image} />
      </div>
    </div>
  );
}

export default PhotoCarousel;