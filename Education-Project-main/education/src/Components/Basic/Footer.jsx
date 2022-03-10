import React from 'react';
import { Link } from 'react-router-dom';
import "..//..//css/main.css";

function Footer() {
    return (
        <div className='block w-full'>
            <footer className='relative py-[18px] px-[30px] bg-[#282a2b]'>
                <div className="max-w-[1170px] mx-auto px-0">
                    <div className="w-full block text-center">
                        <div className="w-full block text-center">
                            <span className='text-[13px] text-[#8c8989] font-normal'>Copyright 2022 OK TAMAM Group. All Rights Reserved</span>
                        </div>
                        <div className="block w-full mt-5 text-center">
                            <div className="mt-[10px]">
                                <Link to="" className='inline-block relative cursor-pointer mb-[10px] mx-[10px] text-base text-[#777070] footer__scl_link'>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <span className='absolute top-[-24px] left-1/2 -translate-x-1/2 invisible opacity-0 pt-[2px] pb-[5px] px-[8px] bg-[rgba(0,0,0,0.65)] text-[#fff] text-xs rounded-[4px] inline-block transition-all'>Facebook</span>
                                </Link>
                                <Link to="" className='inline-block relative cursor-pointer mb-[10px] mx-[10px] text-base text-[#777070] footer__scl_link'>
                                    <i class="fa-brands fa-instagram"></i>
                                    <span className='absolute top-[-24px] left-1/2 -translate-x-1/2 invisible opacity-0 pt-[2px] pb-[5px] px-[8px] bg-[rgba(0,0,0,0.65)] text-[#fff] text-xs rounded-[4px] inline-block transition-all'>Instagram</span>
                                </Link>
                                <Link to="" className='inline-block relative cursor-pointer mb-[10px] mx-[10px] text-base text-[#777070] footer__scl_link'>
                                    <i class="fa-brands fa-youtube"></i>
                                    <span className='absolute top-[-24px] left-1/2 -translate-x-1/2 invisible opacity-0 pt-[2px] pb-[5px] px-[8px] bg-[rgba(0,0,0,0.65)] text-[#fff] text-xs rounded-[4px] inline-block transition-all'>YouTube</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;