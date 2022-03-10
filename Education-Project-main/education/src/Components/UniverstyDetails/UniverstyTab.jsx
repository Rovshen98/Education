import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UniverstyTab() {
    const [datas, setDatas] = useState([
        {
            id: 1,
            text: "Library",
            icon: 'fa-solid fa-book'
        },
        {
            id: 2,
            text: "Gym",
            icon: 'fa-solid fa-dumbbell'
        },
        {
            id: 3,
            text: "Swimming Pool",
            icon: 'fa-solid fa-square-poll-horizontal'
        },
        {
            id: 4,
            text: "Medical Center",
            icon: 'fa-solid fa-hospital'
        },
        {
            id: 5,
            text: "Dining Hall",
            icon: 'fa-solid fa-utensils'
        },
        {
            id: 6,
            text: "Dorm",
            icon: 'fa-solid fa-house-chimney'
        }, {
            id: 7,
            text: "Cafeteria",
            icon: 'fa-solid fa-mug-saucer'
        },
        {
            id: 8,
            text: "Auditorium",
            icon: 'fa-solid fa-ear-listen'
        },
        {
            id: 9,
            text: "Cargo",
            icon: 'fa-solid fa-truck-pickup'
        },
        {
            id: 10,
            text: "Security",
            icon: 'fa-solid fa-key'
        },

    ])
    return (
        <div className='block w-full'>
            <div className="block">
                <div className="bg-white my-[30px] pt-[10px] pb-[35px] px-[35px] rounded-md shadow-[0_0px_24px_0_rgb(0_0_0/2%)],0px_20px_24px_0_rgb(0_0_0/2%)">
                    <h3 className='text-xl text-[#656f7b] font-normal my-5'>
                        Information About
                        <span className='text-[#2595b3] ml-1'>the Universty</span>
                    </h3>
                    <p className='mb-[15px] text-base text-[#656f7b] font-light'>
                        Başkent University, the first private university to teach health sciences in Turkey, was founded on 13 January 1994 by Professor Dr. Mehmet Haberal. The University center is located in Ankara and also has Medical and Research Centers and Dialysis Centers all around Turkey. It provides high level education based on scientific production in every field of advanced medical practices as an international brand, and which transforms this to a social added value on the road to its rightful place in the line of modern civilization.
                    </p>
                    <p className='mb-[15px] text-base text-[#656f7b] font-light'>
                        The university has developed and grown over the past eight years without governmental support. The construction of the buildings began on campus in 1995 and many other facilities have been added since then. Currently the university is considered as one of Turkey's elite colleges in terms of its scientific approach in education.
                    </p>
                    <p className='mb-[15px] text-base text-[#656f7b] font-light'>
                        Başkent University consists of 11 Faculties, 8 institutes, 1 School of Languages, 7 Vocational Schools provides post graduate education and state conservatory.
                    </p>
                    <p className='mb-[15px] text-base text-[#656f7b] font-light'>
                        <span className='mr-1'>Website:</span>
                        <Link to="" className='text-[#2595b3] font-medium transition-colors duration-500 hover:text-[#5e5e63] hover:transition-colors hover:duration-500'>
                            https://www.baskent.edu.tr
                        </Link>
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="bg-white my-[30px] pt-[10px] pb-[35px] px-[35px] rounded-md shadow-[0_0px_24px_0_rgb(0_0_0/2%)],0px_20px_24px_0_rgb(0_0_0/2%)">
                    <h3 className='text-xl text-[#656f7b] font-normal my-5'>
                        Campus
                        <span className='text-[#2595b3] ml-1'>Facilities</span>
                    </h3>
                    <ul className='grid grid-cols-5'>
                        {
                            datas.map((w) => {
                                return (
                                    <li key={w.id} className='flex items-center h-[50px] gap-2 text-sm'>
                                        <span className='text-[#2595b3] text-xl'>
                                            <i class={w.icon}></i>
                                        </span>
                                        <span className='indent-0 px-1'>{w.text}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="block">
                <div className="bg-white my-[30px] pt-[10px] pb-[35px] px-[35px] rounded-md shadow-[0_0px_24px_0_rgb(0_0_0/2%)],0px_20px_24px_0_rgb(0_0_0/2%)">
                    <h3 className='text-xl text-[#656f7b] font-normal my-5'>
                        Where
                        <span className='text-[#2595b3] ml-1'>in the City?</span>
                    </h3>
                    <div className="block">
                        <div className="w-full h-full">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.610175955069!2d32.72167901569347!3d39.81573519989366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3407d8c118cc7%3A0x384ab208be168a84!2zQXTEsWzEsW0gVW5pdmVyc2l0eQ!5e0!3m2!1sen!2s!4v1646555047304!5m2!1sen!2s" width="639" height="400" frameborder="0" loading='lazy'></iframe>
                        </div>

                    </div>
                    <div className="block w-full">
                        <h3 className='text-xl text-[#656f7b] my-5'>
                            Atılım
                            <span className='text-[#2595b3] ml-1'> University</span>
                        </h3>
                    </div>
                    <span className='text-base font-light text-[#656f7b]'>Kizilcasar Mahallesi, 06830 Incek Golbasi Ankara/TURKIYE</span>
                    <div className="inline-block w-full py-[15px] border-b border-solid border-[#e0e0e0] text-base font-light text-[#656f7b]">
                        <span className='text-lg text-[#2595b3] pr-[10px]'><i class="fa-solid fa-envelope"></i></span>
                        <span>apply@trucas.com.tr</span>
                    </div>
                    <div className="inline-block w-full py-[15px] border-b border-solid border-[#e0e0e0] text-base font-light text-[#656f7b]">
                        <span className='text-lg text-[#2595b3] pr-[10px]'><i class="fa-solid fa-location-arrow"></i></span>
                        <span>https://www.atilim.edu.tr/en</span>
                    </div>
                    <div className="inline-block w-full py-[15px] border-b border-solid border-[#e0e0e0] text-base font-light text-[#656f7b]">
                        <span className='text-lg text-[#2595b3] pr-[10px]'><i class="fa-solid fa-phone"></i></span>
                        <span>+90 530 516 27 05</span>
                    </div>
                    <div className="block w-full">
                        <div className="flex items-center justify-between bg-[#f9fafc] rounded-md px-[30px] my-[15px]">
                            <h3 className='text-base text-[#656f7b] font-normal my-4'>
                                <span className='text-base text-[#c2c6ce] pr-[10px]'><i class="fa-solid fa-location-dot"></i></span>
                                Ankara Esenboga Airport
                            </h3>
                            <ul className='flex m-0 p-0'>
                                <li className='flex items-center p-0 m-0'>
                                    <div className="w-[125px] text-right relative right-[30px]">
                                        <div className="font-normal text-[#656f7b] flex items-center">
                                            <span className='pr-[10px]'><i class="fa-solid fa-taxi"></i></span>
                                            <span> 48.7 km</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="w-[125px] text-right relative pl-[30px] right-[0px] border-l border-solid border-[#acabb0]">
                                        <div className="font-normal text-[#656f7b] flex items-center">
                                            <span className='pr-[10px]'><i class="fa-solid fa-taxi"></i></span>
                                            <span> 48.7 km</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniverstyTab;