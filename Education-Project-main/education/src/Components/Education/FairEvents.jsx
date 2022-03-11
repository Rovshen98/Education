import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "..//..//css/main.css"

// import required modules
import { Navigation } from "swiper";

function FairEvents() {
    return (
        <div className='block w-full box-border'>
            <div className="relative max-w-[1140px] mx-auto px-[15px]">
                <div className="block">
                    <div className="flex items-center justify-between mb-[25px]">
                        <h3 className='text-3xl font-light text-[#656f7b] my-[30px]'>Fairs <span className='text-3xl font-light text-[#2595b3]'>& Events</span></h3>
                        <Link to="" className="mr-[20%] text-[#20343b] text-sm relative font-medium after:content-[''] after:w-20 after:h-[2px] after:bg-[#acabb0] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:transition-all transition-all ease-out hover:text-[#2595b3] hover:after:transition-all hover:after:duration-500 hover:after:w-32 hover:after:bg-[#2595b3]">All Events</Link>
                    </div>
                    <div className="block main__ed__swiper box-border">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(37,148,179,.8)]"></div>
                                <div className="relative h-full flex-shrink-0">
                                    <div className="absolute right-[3%] text-center w-[70px] h-[100px] bg-white rounded-b-[5px]">
                                        <span className='absolute block bg-white font-medium w-full text-center'>
                                            <i class="uil uil-usd-circle text-[40px] text-[#2595b3] relative left-[2px] top-[10px]"></i>
                                            <span className='block uppercase font-medium text-sm'>Free Entry</span>
                                        </span>
                                    </div>
                                    <div className="flex h-full items-center flex-nowrap mx-[-15px]">
                                        <div className="flex flex-col relative left-20 max-w-full">
                                            <Link to="" className='fair__events__link relative w-full flex items-center justify-center overflow-hidden rounded-[10px]'>
                                                <img src="/images/baku-en_0.png" className='w-full h-auto scale-[1] transition-all duration-500' alt="Event 1" />
                                            </Link>
                                            <div className="relative top-[15px] left-[30px]">
                                                <span className='text-white'>
                                                    <i class="fa-solid fa-location-dot inline-block w-[1em] text-center relative right-[10px]"></i>
                                                    Baku,
                                                </span>
                                                <span className='font-light text-white'>Hilton Hotel </span>
                                            </div>
                                        </div>
                                        <div className="flex h-[270px] pl-[100px]">
                                            <div className="p-[10px] h-[105px] rounded-[5px] bg-[rgba(255,255,255,.3)]">
                                                <span className='block text-center w-[60px] text-[23px] text-white border-b border-solid border-[rgba(255,255,255,0.2)]'>03</span>
                                                <div className="">
                                                    <span className='pt-2 text-base text-white block text-center'>Apr</span>
                                                    <span className='text-base block text-center text-white'>2022</span>
                                                </div>
                                            </div>
                                            <div className="pl-[50px] pr-[10%]">
                                                <h2 className='text-[25px] font-normal text-white mt-0 mb-5'>
                                                    <Link to="/events/turkish-universities-fair-baku-azerbaijan" className="text-white font-medium">Turkish Universities Fair in Baku - Azerbaijan</Link>
                                                </h2>
                                                <p className='text-[15px] leading-5 text-white font-thin my-[15px]'>Turkish Universities Fair in Baku - Azerbaijan</p>
                                                <div className="text-white">
                                                    <i class="fa-solid fa-clock mr-[10px]"></i>
                                                    <span className='text-white text-sm font-normal'>11:00 -</span>
                                                    <span className='text-white text-sm font-normal'> 18:00 </span>
                                                </div>
                                                <Link to="" className="bg-white my-[15px] mx-0 text-[#2595b3] flex items-center w-[fit-content] relative py-[18px] px-[30px] rounded-[5px] transition-all">
                                                    LEARN MORE
                                                    <i class="fa-solid fa-chevron-right text-[14px] relative left-[10px] transition-all text-[#2595b3]"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FairEvents;