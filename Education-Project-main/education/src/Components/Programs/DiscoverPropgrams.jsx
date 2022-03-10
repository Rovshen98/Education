import React from 'react';
import { useState } from 'react';
import "..//..//css/main.css";

function DiscoverPropgrams() {
    const [edlangData, setEdLangData] = useState([
        {
            id: 1,
            text: "English"
        },
        {
            id: 2,
            text: "30% English"
        },
        {
            id: 3,
            text: "Turkish"
        },
        {
            id: 4,
            text: "French"
        },
        {
            id: 5,
            text: "German"
        },
        {
            id: 6,
            text: "Russian"
        },
        {
            id: 7,
            text: "Arabic"
        },
        {
            id: 8,
            text: "Chinese"
        }
    ])
    return (
        <div className='px-5 my-5'>
            <div className="w-full p-[28px] bg-white filter__form relative rounded-[5px] text-center text-[#2595b3]">
                <span className='text-2xl font-light'>Discover Programs</span>
            </div>
            <form action="" className='filter__form bg-white relative rounded-[5px] pb-[50px]'>
                <div className="block w-full relative px-[25px] mb-[1em] pt-4 before:content-[''] before:border before:border-solid before:border-[#eaeaea] before:w-full before:h-[1px] before:absolute before:top-0 before:left-0">
                    <label htmlFor="program-search" className='text-sm font-medium text-[#20343b] uppercase'>Search</label>
                    <input type="text" name="search" id="search" placeholder='Search' className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-4 py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' />
                </div>

                <div className="block w-full relative px-[25px] mb-[40px] pt-4 before:content-[''] before:border before:border-solid before:border-[#eaeaea] before:w-full before:h-[1px] before:absolute before:top-0 before:left-0">
                    <label htmlFor="program-search" className='text-sm font-medium text-[#20343b] uppercase'>Universities</label>
                    <select name="universty" id="universty" className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-4 py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]'>
                        <option value="All" selected>- Any -</option>
                        <option value="20">Acibadem University</option>
                        <option value="16597">Altinbas University</option>
                        <option value="3044">American University of Malta</option>
                        <option value="16241">Ankara Medipol University</option>
                        <option value="16312">Antalya Science University</option>
                    </select>

                </div>

                <div className="px-[25px] w-full relative my-[1em] ml-0">
                    <div className="w-full relative block before:content-[''] before:border before:border-solid before:border-[#eaeaea] before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0">
                        <span className='inline-block h-[45px] font-medium text-sm text-[#20343b] uppercase pl-0'>Education Language</span>
                    </div>
                    <div className="flex flex-wrap w-full">
                        {
                            edlangData.map((item) => {
                                return (
                                    <div key={item.id} className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                                        <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                                        <label htmlFor="e_language" className='font-normal inline mb-0'>{item.text}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="px-[25px] w-full relative my-[1em] ml-0">
                    <div className="w-full relative block before:content-[''] before:border before:border-solid before:border-[#eaeaea] before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0">
                        <span className='inline-block h-[45px] font-medium text-sm text-[#20343b] uppercase pl-0'>Degree</span>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                            <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                            <label htmlFor="e_language" className='font-normal inline mb-0'>Associate Degree</label>
                        </div>
                        <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                            <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                            <label htmlFor="e_language" className='font-normal inline mb-0'>Bachelor</label>
                        </div>
                        <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                            <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                            <label htmlFor="e_language" className='font-normal inline mb-0'>Master</label>
                        </div>
                        <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                            <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                            <label htmlFor="e_language" className='font-normal inline mb-0'>PhD</label>
                        </div>
                    </div>
                </div>

                <div className="px-[25px] w-full relative my-[1em] ml-0 mb-[3rem]">
                    <div className="w-full relative block before:content-[''] before:border before:border-solid before:border-[#eaeaea] before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0">
                        <span className='inline-block h-[45px] font-medium text-sm text-[#20343b] uppercase pl-0'>Type</span>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                            <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                            <label htmlFor="e_language" className='font-normal inline mb-0'>Public</label>
                        </div>
                        <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                            <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                            <label htmlFor="e_language" className='font-normal inline mb-0'>Private</label>
                        </div>
                    </div>
                </div>

                <div className="relative border border-solid border-[#c0c0c0] ml-[2px] mr-[0.5em] my-[1em] px-[0.625em] pt-[0.35em] pb-[0.75em]">
                    <div className='relative -top-[18px] z-10'>
                        <span className='text-sm font-medium uppercase pl-[25px] bg-white text-[#20343b] text-center'>Price Range</span>
                    </div>
                    <div className="flex">
                        <div className="relative my-[1em] pl-[25px] mr-0">
                            <label htmlFor="price-field-value-min" className='inline-block text-sm font-medium text-[#20343b] uppercase mt-3'>Min</label>
                            <div className="flex gap-6">
                                <div className="block w-[30%]">
                                    <input type="text" name="field-value-min" id="field-value-min" placeholder='Min' className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-4 py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' />
                                </div>
                                <div className="block w-[30%]">
                                    <input type="text" name="field-value-min" id="field-value-max" placeholder='Max' value="50000" className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-4 py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row-reverse pl-[10px] justify-end mt-[50px]">
                    <input type="submit" name="submit-programs" id="submit-programs" value="Search" className='relative bottom-10 z-[9999] inline-block py-5 px-10 bg-[#2595b3] text-white cursor-pointer rounded-[10px]' />
                    <input type="submit" name="reset-programs" id="reset-programs" value="Reset" className='relative mr-[10px] bottom-10 z-[9999] bg-[#ececec] inline-block p-[10px] cursor-pointer text-[656f7b] rounded-[5px] transition-all hover:text-[#4cadc9] hover:transition-all' />
                </div>
            </form>
        </div>
    )
}

export default DiscoverPropgrams;