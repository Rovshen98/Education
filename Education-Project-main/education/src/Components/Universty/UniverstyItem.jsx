import React from 'react';
import { Link } from 'react-router-dom';

function UniverstyItem({ logo, title, city, status, programsCount, actions }) {
    return (
        <div>
            <div className="relative hover:shadow-[0_0_20px_10px_rgb(0_0_0/10%)]">
                <Link to="/universty/baskent-universty" className='absolute w-full h-full top-0 left-0 z-[1]'></Link>
                <div className="bg-white shadow-[0px_5px_0px_0px_rgb(0_0_0/10%)] my-5 rounded-md overflow-hidden">
                    <div className="flex relative">
                        <div className="w-[120px] h-[110px] flex items-center justify-center border-b border-r border-solid border-[#eaeaea]">
                            <img src={logo} alt={title} />
                        </div>
                        <div className="flex w-full items-center justify-between border-b border-solid border-[#eaeaea]">
                            <div className="pl-5">
                                <h3 className='text-xl text-[#656f7b] font-normal'>
                                    <Link to="" className='text-[#20343b] font-medium'>{title}</Link>
                                </h3>
                                <div className="flex items-baseline">
                                    <span className='text-[#2595b3] pr-2'><i class="fa-solid fa-location-dot text-xs"></i></span>
                                    <Link to="/ankara" className='text-[13px] font-normal text-[#656f7b] uppercase'>{city}</Link>
                                </div>
                            </div>
                            <div className="block relative right-[50px]">
                                <div className="flex flex-col items-center justify-center">
                                    <span className='text-base text-[#4cadc9]'><i class="fa-solid fa-house-chimney"></i></span>
                                    <span className='text-base text-[#656f7b] font-light'>{status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60px]">
                        <div className="flex items-center h-[60px] px-5 justify-between">
                            <div className="flex items-center overflow-hidden flex-nowrap flex-[0_0_75%]">
                                {
                                    actions.map((item) => {
                                        return (
                                            <div className="block" key={item.id}>
                                                <p className='bg-[#f1f4f7] shadow-[0_0px_24px_0_rgb(0_0_0/2%),0px_20px_24px_0_rgb(0_0_0/2%)] text-[#656f7b] p-[10px] m-[10px] ml-0 rounded-md text-xs font-medium capitalize whitespace-nowrap'>{item.text}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex items-center flex-[0_0_25%] justify-end overflow-x-hidden flex-nowrap">
                                <div className="bg-[rgba(229,9,24,0.1)] shadow-[0_0px_24px_0_rgb(0_0_0/2%),0px_20px_24px_0_rgb(0_0_0/2%)] text-[#2595b3] p-[10px] m-[10px] mr-0 rounded-md text-xs font-medium capitalize whitespace-nowrap"><span>Total Programs: {programsCount}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniverstyItem;