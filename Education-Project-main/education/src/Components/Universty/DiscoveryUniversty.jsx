import React from 'react';
import "..//..//css/main.css";

function DiscoveryUniversty() {
    return (
        <div className='px-5 my-5'>
            <div className="bg-white shadow-[0_0px_24px_0_rgb(0_0_0/2%),0px_20px_24px_0_rgb(0_0_0/2%)] relative rounded-[5px] pb-0">
                <div className="flex flex-col">
                    <div className="w-full p-[28px] bg-white filter__form relative rounded-[5px] text-left text-[#2595b3]">
                        <span className='text-2xl font-light'>Discover Universty</span>
                    </div>
                    <form action="" className='filter__form bg-white relative rounded-[5px] pb-[50px]'>
                        <div className="block w-full relative px-[20px] mb-[1em]">
                            <input type="text" name="search_universty" id="search_universty" placeholder='Search By Name' maxLength="128" className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-1 py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' />
                        </div>
                        <div className="block w-full relative px-[25px] mb-[40px] pt-4">
                            <label htmlFor="universty-city" className='text-sm font-medium text-[#20343b] uppercase'>City</label>
                            <select name="uni_city" id="uni_city" className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-4 py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]'>
                                <option value="All" selected="selected">- Any -</option>
                                <option value="28">Adana</option>
                                <option value="5">Ankara</option>
                                <option value="21">Antalya</option>
                                <option value="35">Berlin</option>
                                <option value="20">Bursa</option>
                                <option value="4">Istanbul</option>
                                <option value="7">Izmir</option>
                                <option value="23">Manisa</option>
                            </select>

                        </div>
                        <div className="px-[25px] w-full relative my-[1em] ml-0">
                            <div className="w-full relative block before:content-[''] before:border before:border-solid before:border-[#eaeaea] before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0">
                                <span className='inline-block h-[45px] font-medium text-sm text-[#20343b] uppercase pl-0'>Type</span>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                                    <input type="checkbox" name="e_type_public" id="e_type_public" className='absolute ml-[-1.25rem] mt-[3px]' />
                                    <label htmlFor="e_type" className='font-normal inline mb-0'>Public</label>
                                </div>
                                <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                                    <input type="checkbox" name="e_type_private" id="e_type_private" className='absolute ml-[-1.25rem] mt-[3px]' />
                                    <label htmlFor="e_language" className='font-normal inline mb-0'>Private</label>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row-reverse pl-[10px] justify-end mt-[50px]">
                            <input type="submit" name="submit-universty" id="submit-universty" value="Search" className='bottom-10 z-[9999] inline-block py-5 px-10 bg-[#2595b3] text-white cursor-pointer rounded-[10px]' />
                            <input type="submit" name="reset-universty" id="reset-universty" value="Reset" className='mr-[10px] bottom-10 z-[9999] bg-[#ececec] inline-block p-[10px] cursor-pointer text-[656f7b] rounded-[5px] transition-all hover:text-[#4cadc9] hover:transition-all' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DiscoveryUniversty;