import React from 'react';
import Header from '../Components/Basic/Header';
import EFooter from '../Components/Education/EFooter';
import { Link } from 'react-router-dom';

function ServicesDetails() {
    return (
        <>
            <Header />
            <main className='block w-full'>
                <div className='block w-full box-border bg-[#f9fafe] border-t border-solid border-[#eaeaea]'>
                    <div className="max-w-[1140px] mx-auto px-[15px]">
                        <div className="flex flex-col-reverse">
                            <h2 className='order-1 my-5 text-[25px] leading-8 text-[#20343b] font-normal'>
                                EQUIVALENCE CERTIFICATE
                            </h2>
                            <div className="block">
                                <p className='my-4 text-base text-[#656f7b] font-light'>
                                    <span className='text-[8px] mr-1'>
                                        <i class="fa-solid fa-angles-left"></i>
                                    </span>
                                    <span>
                                        It is the document of the process that determines which class / field / department / branch of education is equivalent to the education seen by examining the diploma obtained from educational institutions abroad »
                                    </span>
                                </p>
                                <p className='my-4 text-base text-[#656f7b] font-light'>
                                    <span>
                                        With the power of attorney issued by the competent authorities that you will give to
                                        <strong>Trucas</strong>
                                        , procedures are carried out for the document specified within the framework of the methods, procedures, and principles determined by the Higher Education Council.
                                    </span>
                                </p>
                                <p className='my-4 text-base text-[#656f7b] font-light'>
                                    <span className='mr-2'>For more information, you can send an e-mail to</span>
                                    <Link to="" className='text-[#2595b3] font-medium transition-colors duration-500 hover:text-[#5e5e63] hover:transition-colors hover:duration-500'>info@trucas.com.tr</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <EFooter />
        </>
    )
}

export default ServicesDetails;