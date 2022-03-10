import React from 'react';
import { useSelector } from 'react-redux';
import { selectAchievements } from '../../redux/reducers/achievementsSlice';

function Achievements() {
    const datas = useSelector(selectAchievements);
    return (
        <div className='block w-full box-border'>
            <div className="max-w-[1170px] mx-auto relative flex flex-wrap">
                {
                    datas.map((data, i) => {
                        return (
                            <div className="relative w-1/4 px-0">
                                <div className="w-full px-[15px] box-border mb-[30px]">
                                    <div className="text-center mb-[35px]">
                                        <div className="inline-block max-w-full">
                                            <img className='max-w-full h-auto object-cover' src={data.imgSrc} alt={`Image ${i}`} />
                                        </div>
                                    </div>
                                    <div className="relative mb-0 text-left">
                                        <p className='mb-0 mt-0 text-[#3f3f3f] text-base font-normal'>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="relative w-full px-0">
                    <div className="w-full px-[15px] mt-[70px] box-border">
                        <h2 className='text-4xl text-center font-semibold text-black my-[0.5em]'>We are Proud to be a Member of</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements;