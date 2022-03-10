import React, { Component } from 'react';
import Header from "../Components/Basic/Header";
import EFooter from "../Components/Education/EFooter";
import { Link } from 'react-router-dom';

class ScholarshipDetails extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className='block'>
                    <div className="block w-full box-border bg-[#f9fafe] border-t border-solid border-[#eaeaea]">
                        <div className="max-w-[1140px] mx-auto px-[15px]">
                            <div className="flex flex-col-reverse">
                                <h2 className='text-[25px] leading-8 text-[#20343b] font-normal order-1 my-5'>
                                    <span>Bachelor Programs in English</span>
                                </h2>
                                <div className="block">
                                    <p className='text-base text-[#656f7b] font-light my-4'>
                                        Hurry to apply now and get a
                                        <span className='text-[#2595b3] ml-1'>
                                            <strong>%35 Scholarship</strong>
                                        </span>
                                        <span className='ml-1 mr-1'>at Maltepe University with TRUCAS for the following</span>
                                        <strong>Bachelor Degree Programs in English.</strong>
                                    </p>
                                    <p className='text-base text-[#656f7b] font-light my-4'>
                                        <strong>Deadline to apply:</strong>
                                        <span className='ml-1'>2 June 2022</span>
                                    </p>
                                    <p className='text-base text-[#656f7b] font-light my-4'>
                                        <strong>Evaluation Duration</strong>
                                        <span className='ml-1'>: 4 month</span>
                                    </p>
                                    <p className='text-base text-[#656f7b] font-light my-4'>
                                        <strong>Tuition Fee Per Year:</strong>
                                        <span className='ml-1'>after %35 scholarship it will be $3250</span>
                                    </p>
                                    <p className='text-base text-[#656f7b] font-light my-4'>
                                        <strong>TRUCAS Application Fee:</strong>
                                        <span className='ml-1'>$50</span>
                                    </p>
                                    <p className='text-base text-[#656f7b] font-light my-4'>
                                        <strong>Academic year:</strong>
                                        <span className='ml-1'>2022-2023</span>
                                    </p>
                                    <p className='text-base text-[#656f7b] font-light my-4'>
                                        <strong>Contact us:</strong>
                                        <strong>
                                            <Link to="info@trucas.com.tr" className='text-[#2595b3] font-medium ml-1'>
                                                <span>info@trucas.com.tr</span>
                                            </Link>
                                        </strong>
                                        <span className='ml-2 mr-2'>or</span>
                                        <strong>
                                            <Link to="https://api.whatsapp.com/send/?phone=0905305162705&text&app_absent=0" className='text-[#2595b3] font-medium'>
                                                <span>Whatsapp</span>
                                            </Link>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <EFooter />
            </div>
        )
    }
}


export default ScholarshipDetails;