import React from 'react';
import { Link } from 'react-router-dom';

function EventsItem({ imgSrc, title, date, hours, minutes, city }) {
    return (
        <div className="px-[15px]">
            <div className="relative bg-white min-h-[540px] my-[50px] overflow-hidden rounded-[5px] shadow-[0_0px_24px_0_rgb(0_0_0/2%),0px_20px_24px_0_rgb(0_0_0/2%)]">
                <Link to="">
                    <img className='w-full' src={imgSrc} alt={title} />
                </Link>
                <div className="py-[10px] px-[30px]">
                    <p className='bg-[#fce3e5] py-[5px] px-5 text-[#2595b3] rounded-[5px] text-xs font-bold uppercase'>Fairs</p>
                    <h3 className='text-xl font-normal my-5'>
                        <Link to="" className='text-[#20343b] min-h-[55px]'>{title}</Link>
                    </h3>
                    <div className="relative w-full left-0 py-[10px] px-[30px] bottom-0">
                        <div className="flex justify-between py-[15px] px-[5px] border-t border-solid border-[#eaeaea] border-b">
                            <div className='text-[#656f7b] flex items-center gap-2'>
                                <span className='inline-block text-center text-[#acabb0] text-xs'><i class="fa-solid fa-calendar-days text-[]"></i></span>
                                <span className='text-sm font-normal'>{date}</span>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <span className='text-xs text-[#acabb0]'>
                                    <i className="fa-solid fa-clock"></i>
                                </span>
                                <p className="block">
                                    <span className="text-[#656f7b] text-sm font-normal">{hours}</span>
                                    <span className="text-[#656f7b] text-sm font-normal">{minutes}</span>
                                </p>
                            </div>
                        </div>
                        <div className="py-[15px] px-[5px] border-b border-solid border-[#eaeaea]">
                            <div className="flex items-center gap-2">
                                <span className='text-[#acabb0] text-xs'><i class="fa-solid fa-location-dot"></i></span>
                                <span className='text-[#656f7b] text-sm font-normal'>{city}</span>
                            </div>
                        </div>
                        <Link to="" className='flex items-center justify-center relative w-full mt-[15px] font-medium rounded-[5px] py-[18px] px-[30px] uppercase bg-transparent text-[#2595b3]'>
                            <span className='text-sm mr-2'>Learn More</span>
                            <i class="fa-solid fa-angle-right text-sm"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsItem;