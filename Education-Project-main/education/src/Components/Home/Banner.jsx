import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='block w-full bg-[#2595b3] box-border'>
            <div className="max-w-[1170px] flex mx-auto items-center pt-[90px] pb-[100px]">
                <div className="pt-[35px] px-5 box-border">
                    <h3 className=' text-[28px] font-bold text-[#fff0a4] mb-[10px] leading-[2] text-center'>Because you deserve the best...</h3>
                    <div className="text-center">
                        <h1 className='text-[55px] font-bold text-white leading-[2]'>OK TAMAM GROUP</h1>
                        <p className='mb-5'></p>
                        <p className='text-center text-[14pt] text-white mt-0 mb-5 leading-[2]'>
                            We are a global business group founded in 1992 with the aim of providing multiple services in the Middle East and European countries regarding Educational Services, Business Consultation, Real Estate Investment, Tourism and more.
                        </p>

                    </div>
                    <div className="block max-w-full mt-10 mb-[21px] text-center">
                        <Link to="/search/" className="inline-block relative bg-[#ebebeb] text-[#666] text-left rounded-[5px] text-base py-[18px] pl-[60px] pr-[25px] mb-0 cursor-pointer transition-all hover:text-[#5e5e5e] hover:bg-[#dcdcdc]">
                            <i class="fa-solid fa-magnifying-glass block absolute top-1/2 left-[25px] -translate-y-1/2 h-4 text-xl leading-4"></i>
                            Find your Study Program
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;