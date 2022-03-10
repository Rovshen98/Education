import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AccommodationItem({ text, activeTab, index, activateTab }) {

  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();
  const isActive = activeTab === index;

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, [])

  return (
    <div className="flex flex-col relative overflow-hidden min-w-0 text-white mt-[15px] shadow-[0px_1px_10px_0px_rgb(0_0_0/10%)]">
      <div className="bg-[#f9fafe]">
        <div className='text-[22px] leading-7 text-black'>
          <button onClick={activateTab} className='flex items-center bg-white border-0 outline-none py-[1.2rem] px-[5rem] pl-[1.2rem] leading-8 text-[#20343b] w-full text-left rounded-md'>
            <span>{text}</span>
            <div className="absolute right-[100px] text-sm font-normal text-[#656f7b]">
              <span className='text-[#2595b3]'><i class="fa-solid fa-location-dot"></i></span>
            </div>
          </button>
        </div>
      </div>
      <div className="block w-full h-0 overflow-hidden transition-all duration-500" ref={refHeight} style={{ height: isActive === true ? `${heightEl}` : "0px" }} >
        <div className="flex-[1_1_auto] p-[1.2rem]">
          <div className="relative w-full">
            <p className="text-base text-[#656f7b] mb-[15px] mt-0 font-light">My House Student Dormitories operating in affiliation with Ministry of Education serve students in Kocaeli and İstanbul for 12 years.</p>
            <p className='text-base text-[#656f7b] mb-[15px] mt-0 font-light'>Bahçeşehir University and My House student Dormitories established a solution partnership and dormitories shall serve BAU students in 2015-2016 education year.</p>
            <p className='text-base text-[#656f7b] mb-[15px] mt-0 font-light'>
              <Link to="" className='font-medium text-[#2595b3]'>http://www.evimyurt.com/</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccommodationItem;