import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Actions() {
    const [datas, setDatas] = useState([
        {
            id: 1,
            icon: "fa-solid fa-comments",
            title: "SERVICES",
            link: '/services'
        },
        {
            id: 2,
            icon: "fa-solid fa-book",
            title: `Online
                    Free 
                    Consultation`,
            link:"/services/online-free-consultation"
        },
        {
            id: 3,
            icon: "fa-solid fa-calendar-days",
            title: `EVENTS 
                    FAIRS 
            `,
            link:"/events"
        }
    ])
    return (
        <div className='block w-full box-border'>
            <div className="max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-wrap justify-center px-20 mx-[-15px]">
                    {
                        datas.map((data, i) => {
                            return (
                                <div key={data.id} className={`flex h-[200px] w-[25%] items-center justify-center relative text-[#2595b3] px-[15px] border-[2px] border-solid border-[rgba(172,171,176,0.3)] border-b-0 ${i === 0 ? 'rounded-tl-[10px]' : null} ${i === 2 ? "rounded-tr-[10px] border-r-[2px]" : "rounded-tr-[0px] border-r-0"} transition-colors hover:bg-[#2595b3] hover:text-white`}>
                                    <div className="flex items-center text-xl font-normal my-5 gap-4">
                                        <i class={`${data.icon} text-[50px]`}></i>
                                        <span className='whitespace-pre-line'>{data.title}</span>
                                    </div>
                                    <Link to={data.link} className='absolute left-0 top-0 w-full h-full text-sm font-normal transition-all'></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Actions;