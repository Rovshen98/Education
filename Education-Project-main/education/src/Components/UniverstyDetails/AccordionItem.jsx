import React, { useState, useRef, useEffect } from 'react';
import ProgramsItem from '../Programs/ProgramsItem';
import { useSelector } from 'react-redux';
import { selectPrograms } from '../../redux/reducers/programsSlice';

function AccordionItem({ text, activeTab, index, activateTab }) {
    const datas = useSelector(selectPrograms);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();
    const isActive = activeTab === index;

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])


    return (
        <div className="flex flex-col relative overflow-hidden min-w-0 text-white mt-[15px] shadow-[0px_1px_10px_0px_rgb(0_0_0/10%)]">
            <div className="bg-[#f9fafe]">
                <div className='text-[22px] leading-7 text-black'>
                    <button onClick={activateTab} className='inline-block bg-white border-0 outline-none py-[1.2rem] px-[5rem] pl-[1.2rem] leading-8 text-[#20343b] w-full text-left rounded-md'>{text}</button>
                </div>
            </div>
            <div className="block w-full h-0 overflow-hidden transition-all duration-500" ref={refHeight} style={{ height: isActive === true ? `${heightEl}` : "0px" }}>
                <div className="flex-[1_1_auto] bg-[#eef4f9] p-[1.2rem]">
                    {
                        datas.map((w) => {
                            return (
                                <ProgramsItem {...w} />
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default AccordionItem;