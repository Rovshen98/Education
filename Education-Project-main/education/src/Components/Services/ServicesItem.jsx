import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ServicesItem({ title, imgSrc, link }) {
    const location = useLocation();
    const path = location.pathname.split("/");
    return (
        <div className="w-full">
            <div className="flex services__item flex-col min-h-[365px] relative justify-center items-center rounded-[10px] pt-[15px] my-[10px] text-center bg-white transition-all duration-500 shadow-[0_0px_24px_0_rgb(0_0_0/2%),0px_20px_24px_0_rggb(0_0_0/2%)] hover:bg-[#e50918] hover:transition-all hover:duration-500">
                <Link to={`/${path[1]}/${link}`} className='absolute w-full h-full top-0 left-0'></Link>
                <div className="flex flex-col py-[10px] px-[50px]">
                    <Link to="" className='services__item__link text-lg text-[#20343b] font-medium uppercase'>{title}</Link>
                    <span className='py-[10px] uppercase text-[#acabb0]'></span>
                </div>
                <Link to="" className='w-full'>
                    <img className='w-full h-auto' src={imgSrc} alt={title} />
                </Link>
                <Link to="" className='relative services__btn w-[inherit] flex items-center top-0 bg-transparent py-[18px] px-[30px] mt-[15px] transition-all duration-500 shadow-none text-sm font-medium text-[#2595b3]'>
                    READ MORE
                    <span className='relative left-[10px] text-[#2595b3] text-sm transition-all'>
                        <i class="fa-solid fa-angle-right"></i>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default ServicesItem;