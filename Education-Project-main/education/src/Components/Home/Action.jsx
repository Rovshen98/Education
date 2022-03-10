import React from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectAction } from '../../redux/reducers/actionSlice';
import { Link } from 'react-router-dom';
function Action() {
    const datas = useSelector(selectAction);

    const bgChanged = useCallback((elem) => {
        switch (elem) {
            case 0:
                return "#dedede"
                break;
            case 1:
                return "#2595b3"
                break;
            case 2:
                return "#026c88"
                break;
            default:
                return null
        }
    }, [])

    return (
        <div className='block w-full bg-[#324049] box-border'>
            <div className="grid grid-cols-3 py-[100px] px-5">
                {
                    datas.map((data, i) => {
                        bgChanged(i)
                        return (
                            <div className="flex items-stretch">
                                <div className="w-full flex flex-col py-[30px] px-[50px] box-border" style={{ backgroundColor: `${bgChanged(i)}` }}>
                                    <div className="block text-left">
                                        <div className="text-left text-sm mb-[35px]">
                                            <span className={`relative w-[4em] h-[4em] inline-block ${i === 0 ? "text-[#282828]" : "text-[#fff]"} box-content border-2 border-solid border-transparent max-w-full`}>
                                                <i className={`${data.icon} inline-block w-[inherit] h-[inherit] text-[2.85em] text-center`}></i>
                                            </span>
                                        </div>
                                        <h3 className={`text-[32px] font-semibold text-left ${i === 0 ? "text-[rgb(39,39,39)]" : "text-[#fff]"} my-[0.5em]`}>{data.title}</h3>
                                        <div className="mb-[35px] box-border">
                                            <p className={`my-0 ${i === 0 ? "text-[#3f3f3f]" : "text-[#fff]"} ${i === 2 ? "mb-5" : "mb-0"} text-base font-normal text-left`}>{data.description}</p>
                                            {data.question ? <p className='text-[#fff] text-base font-normal text-left'>{data.question}</p> : null}
                                        </div>
                                        {
                                            data.question ? <div className='inline-block max-w-full mb-[20px]'>
                                                <Link to="/apply" className='inline-block cursor-pointer mb-0 relative text-left rounded-[5px] pr-5 py-[14px] text-sm bg-white text-[#666] pl-12'>
                                                    <i class="fa-solid fa-pen-to-square block absolute h-[14px] top-1/2 left-5 -translate-y-1/2 text-[1rem]"></i>
                                                    Apply Now
                                                </Link>
                                            </div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Action;
