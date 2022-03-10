import React from 'react';
import "..//..//css/main.css";
import { Link } from "react-router-dom";

function ProgramsItem({logo,title,subtitle,city,actions,price}) {
    return (
        <>
            <div>
                <div className="relative programs__shadow hover:shadow-[0_0_20px_10px_rgb(0_0_0/10%)]">
                    <Link to="/universty/altinbas-universty" className="absolute w-full h-full top-0 left-0 z-[1]"></Link>
                    <div className="flex bg-white programs__shadow__two my-5 rounded-[5px] overflow-hidden">
                        <div className="program__left__item">
                            <div className="flex relative">
                                <div className="w-[120px] h-[110px] flex items-center justify-center border-r border-solid border-[#eaeaea]">
                                    <img src={logo} alt={title} />
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <div className="pl-5">
                                        <span>
                                            <Link to="" className='/universty/altinbas-universty text-sm font-normal pr-5 pb-[5px] text-[#656f7b]'>
                                                {subtitle}
                                            </Link>
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-location-dot text-[#2595b3]"></i>
                                            <Link to="/city/istanbul" className='inline-block ml-2 text-sm font-normal pr-5pb-[5px] text-[#656f7b]'>{city}</Link>
                                        </span>
                                        <Link to="/university/altinbas-university?application_faculty=Institute+of+Social+Sciences&application_program=Strategic+Marketing+and+Brand+Management+(Without+Thesis)+-+Turkish">
                                            <h3 className='m-0 mt-[10px] text-xl text-[#656f7b] font-normal'>{title}</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[60px] items-center px-5 w-[95%] border-t border-solid border-[#eaeaea]">
                                {
                                    actions.map((w) => {
                                        return (
                                            <span key={w.id} className='flex items-center gap-2 px-[10px] text-[#656f7b]'>
                                                <i class={w.icon}></i>
                                                {w.text}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="program__right__item bg-[#f9f9fa] border-l border-solid border-[#eaeaea]">
                            <h3 className='relative top-[10px] flex flex-col text-right px-[30px] my-5 text-xl text-[#656f7b] font-normal'>
                                <div className="">
                                    {price}
                                    <span>$</span>
                                </div>
                                <span className='text-xs font-normal uppercase'>
                                    Per Year
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgramsItem;