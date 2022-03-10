import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='block w-full box-border'>
      <div className="max-w-[1170px] mx-auto flex items-center pt-[90px] pb-[80px]">
        <div className="pt-[35px] px-5 w-full box-border">
          <div className="flex items-center justify-center mb-6">
            <p className='block text-[#4cadc9] mr-5'>
              <i class="fa-solid fa-location-dot text-[80px] ml-5"></i>
            </p>
            <p className='text-[#222] text-3xl font-medium'>
              Find Your Future University
              <br />
              in Turkey!
            </p>
          </div>
          <div className="flex relative">
            <div className='absolute right-0 top-[15px] cursor-pointer'>
              <span className='flex flex-row-reverse gap-1 items-center p-[18px] mr-4 bg-white rounded-[10px] text-[#4cadc9] text-base uppercase font-medium transition-all hover:bg-[#4cadc9] hover:text-white'>
                <i class="fa-solid fa-magnifying-glass"></i>
                Search
              </span>
            </div>
            <input type="text" className='w-full h-[85px] rounded-[10px] bg-[#f2f2f2] pl-[30px] outline-none border-0 text-[656f7b] text-xl font-light' name="search" id="search" placeholder='University name, Programs, Blogs etc.' />
          </div>
          <div className="flex items-center justify-center p-[10px] flex-col">
            <p className='text-xl font-normal text-[#656f7b] text-center my-5'>Apply Turkey's best universities now</p>
            <Link to="/programs" className='inline-block text-2xl py-[15px] px-[50px] text-white font-normal text-center bg-[#4cadc9] rounded-[5px] transition-all hover:text-[#f7f7f7] hover:bg-[#39A0BD]'>Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;