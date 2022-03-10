import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Article() {
    const [artDatas, setArtDatas] = useState([
        {
            id: 1,
            imgSrc: "/images/Business-Management.jpg",
            text: "Lorem ipsum dolor sit amet consectetur eveniet nihil, ipsum inventore iure est quo molestias voluptatem. Quisquam minus reprehenderit minima laudantium...",
            link: "",
        },
        {
            id: 2,
            imgSrc: "/images/Business-Management.jpg",
            text: "Lorem ipsum dolor sit amet consectetur eveniet nihil, ipsum inventore iure est quo molestias voluptatem. Quisquam minus reprehenderit minima laudantium...",
            link: "",
        },
        {
            id: 3,
            imgSrc: "/images/Business-Management.jpg",
            text: "Lorem ipsum dolor sit amet consectetur eveniet nihil, ipsum inventore iure est quo molestias voluptatem. Quisquam minus reprehenderit minima laudantium...",
            link: "",
        }
    ])
    return (
        <div className='block w-full box-border mb-8'>
            <div className="max-w-[1140px] mx-auto px-[15px]">
                <div className="grid grid-cols-3 mx-[-15px] gap-3">
                    {
                        artDatas.map((item) => {
                            return (
                                <div className="flex flex-col justify-center items-center w-full">
                                    <div className="relative w-full h-80 my-[15px]">
                                        <Link to="" className='absolute inline-block w-full h-full top-0 left-0'>
                                            <img className='w-full h-full object-cover block rounded-xl' src={item.imgSrc} alt="Technology" />
                                            {/* <div className="absolute w-full h-full top-0 left-0 rounded-xl bg-[rgba(37,148,179,.7)]"></div> */}
                                        </Link>
                                    </div>
                                    <div className="block">
                                        <p className='text-left text-[#000] text-base font-medium my-2'>{item.text}</p>
                                        <div className="w-full block">
                                            <Link to={item.link} className='inline-block text-base font-semibold py-[8px] text-white px-3 bg-[#2595b3] rounded-md'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Article;