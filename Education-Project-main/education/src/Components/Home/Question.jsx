import React from 'react';
import { Link } from 'react-router-dom';

function Question() {
    return (
        <div className='block w-full box-border'>
            <div className="max-w-[1170px] mx-auto px-[30px] pb-[50px]">
                <div className="relative flex rounded-[10px] bg-[#f5f5f5]">
                    <div className="p-[2.5px] w-2/3">
                        <div className="w-full px-[15px] pt-[35px] box-border">
                            <h3 className='text-[rgb(51,51,51)] text-center text-xl font-semibold my-[0.5em]'>Are you looking for different destinations to start your study?</h3>
                        </div>
                    </div>
                    <div className="p-[2.5px] w-1/3">
                        <div className="w-full px-[15px] box-border pt-[35px]">
                            <div className="block max-w-full mb-5 text-center">
                                <Link to="" className='block w-full relative cursor-pointer border-[2px] border-solid border-[#4cadc9] text-base text-center transition-colors text-[#4cadc9] px-6 py-[17px] hover:bg-[#4cadc9] hover:text-white'>
                                    <i class="fa-solid fa-paper-plane inline-block static top-1/2 left-[25px] text-xl h-4 mr-[0.5em]"></i>
                                    OK TAMAM Abroad
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;