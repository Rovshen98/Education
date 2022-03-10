import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AboutEducation() {
    const [data, setData] = useState({
        imgSrc: "oktamam-facebook.jpg",
        title: "Study in Turkey",
        subtitle: "Do you want to study in Turkey? Are you looking for a university to start your university journey with discounted fees and exclusive offers?",
        desc: "OK TAMAM Group, represented by its distinguished team, which holds several certificates in educational consultancy, provides its services to students wishing to study abroad, specifically in Turkey and Europe.",
    })
    return (
        <div className='block w-full box-border'>
            <div className="flex flex-wrap max-w-[1170px] mx-auto px-5 pt-[70px] pb-[50px]">
                <div className="flex w-1/2 relative items-center p-[5px]">
                    <div className="w-full flex flex-col flex-grow pt-[35px] px-[15px]">
                        <div className="text-center mb-[35px]">
                            <Link to="/search/" className='inline-block max-w-full'>
                                <img className='max-w-full h-auto object-cover' src={`/images/${data.imgSrc}`} alt={data.title} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2 relative p-[5px]">
                    <div className="w-full flex flex-col flex-grow pt-[35px] px-[15px]">
                        <div className="box-border text-left">
                            <div className="text-left">
                                <h2 className='relative inline-block pt-[15px] font-normal text-2xl mb-[30px] text-[#000] before:content-[""] before:absolute before:top-0 before:w-1/2 before:border-t-[5px] before:border-solid before:border-[#2595b3]'>Study in Turkey</h2>
                            </div>
                            <h4 className='text-lg text-left text-black font-semibold my-[0.5em]'>{data.subtitle}</h4>
                            <div className="mb-[35px]">
                                <p className='mt-0 mb-5 text-[#3f3f3f] text-base font-normal text-left'>{data.desc}</p>
                                <p className='mb-0 mt-0 text-[#3f3f3f] text-base font-normal text-left'>OK TAMAM Group is the best educational agent for more than 50 <Link to="/best-turkish-universities/" className='text-[#2595b3] hover:underline text-base font-normal'>universities in Turkey</Link>, and for this reason, students who apply to Turkish universities through us get special discounts on tuition fees up to 75%.</p>
                            </div>
                            <div className="inline-block max-w-full ml-[5px] mb-5">
                                <Link to="/study-in-turkey/" className='inline-block relative top-0 cursor-pointer text-center mb-0 rounded-[5px] py-[14px] px-5 bg-[#4cadc9] text-white'>Read More</Link>
                            </div>
                            <div className="inline-block max-w-full ml-[5px] mb-5">
                                <Link to="/apply/" className='inline-block relative top-0 cursor-pointer text-center mb-0 rounded-[5px] py-[14px] px-5 bg-[#6dab3c] text-white'>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutEducation;