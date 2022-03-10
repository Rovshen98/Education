import React, { Component, createRef } from 'react';
import Header from "../Components/Basic/Header";
import EFooter from "../Components/Education/EFooter";
import { Link } from 'react-router-dom';
import UniverstyTab from '../Components/UniverstyDetails/UniverstyTab';
import FacultiesTab from '../Components/UniverstyDetails/FacultiesTab';
import AccommodationTab from '../Components/UniverstyDetails/AccommodationTab';
import MainTabs from '../Components/UniverstyDetails/MainTabs';

class UniverstyDetails extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
        this.state = {
            tabData: [
                {
                    id: 1,
                    text: "UNIVERSİTY",
                    icon: "fa-solid fa-house-chimney"
                },
                {
                    id: 2,
                    text: "FACULTIES",
                    icon: "fa-solid fa-book-open-reader"
                },
                {
                    id: 3,
                    text: "REQUIRED DOCUMENTS",
                    icon: "fa-solid fa-list-check"
                },
                {
                    id: 4,
                    text: "ACCOMMODATION",
                    icon: "fa-solid fa-bed"
                }
            ],
            status: "UNIVERSİTY",
        }
    }
    handleClick = (index) => {
        const tab_data = this.state.tabData[index].text;
        this.setState({
            status: tab_data
        })
    }

    showTab = () => {
        switch (this.state.status) {
            case "UNIVERSİTY":
                return <UniverstyTab />
                break

            case "FACULTIES":
                return <FacultiesTab />
                break

            case "ACCOMMODATION":
                return <AccommodationTab />
                break
        }
    }

    render() {
        const { tabData } = this.state;
        return (
            <div>
                <Header />
                <main className='block'>
                    <div className="block w-full box-border bg-[#f9fafe] border-t border-solid border-[#eaeaea]">
                        <div className="max-w-[1140px] mx-auto px-[15px] pt-[35px]">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <img src="/images/74F3D007-B312-43F2-B170-6A3CE9BC99ED_4_5005_c_0.jpeg" className='w-[100px] h-auto' alt="Univerty Details Logo" />
                                </div>
                                <h2 className='text-[25px] text-[#20343b] font-normal'>
                                    Baskent University
                                </h2>
                            </div>
                            <div className="block">
                                <div className="w-1/2 m-auto bg-white rounded-md relative top-7 shadow-[0_0px_24px_0_rgb(0_0_0/2%),0px_20px_24px_0_rgb(0_0_0/2%)] z-[1]">
                                    <ul className='flex items-center uppercase'>
                                        <li className='px-[30px] indent-0 mb-0 flex items-center text-[#656f7b] text-sm'>
                                            <span className='flex items-center text-[#2595b3] text-xs mr-1'><i className="fa-solid fa-house-chimney"></i></span>
                                            <span>Private</span>
                                        </li>
                                        <li className='px-[30px] indent-0 mb-0 flex items-center text-[#656f7b] text-sm pl-0 border-r border-solid border-[#acabb0]'>
                                            <span className='flex items-center relative right-[5px] text-[#2595b3] text-xs'><i className="fa-solid fa-location-dot"></i></span>
                                            <Link to="/city/ankara" className='text-sm'>Ankara</Link>
                                        </li>
                                        <div className="inline-flex w-full h-full bg-transparent relative text-base text-left font-medium text-[#656f7b]">
                                            <div className="flex w-full items-center justify-center p-[15px] cursor-pointer text-[13px] font-medium">
                                                <span className='mr-1'>Share</span>
                                                <span className='text-[#2595b3] text-xs'><i className="fa-solid fa-share-nodes"></i></span>
                                            </div>
                                        </div>

                                    </ul>
                                </div>
                                <div className="mb-5 relative">
                                    <div className="block w-full">
                                        <Link to="" className=''>
                                            <img src="/images/baskent_1.jpg" className='w-full h-auto' alt="Baskent Image" />
                                        </Link>
                                    </div>
                                    <div className="flex items-center pr-5 absolute z-[2] bottom-[70px] bg-[rgba(255,255,255,0.5)] m-[30px] rounded-md text-white">
                                        <span className='w-[60px] h-[60px] flex items-center justify-center'>
                                            <i class="fa-solid fa-circle-play text-2xl"></i>
                                        </span>
                                        <div className='absolute w-full h-full top-0 left-0 text-white cursor-pointer'></div>
                                        <span className='text-white text-sm font-normal uppercase'>Video</span>
                                    </div>
                                    <div className="flex items-center py-5 pl-[55px] pr-5 absolute z-[2] bottom-0 bg-[rgba(255,255,255,0.5)] m-[30px] rounded-md text-white">
                                        <span className='absolute left-0 pb-[5px] before:mx-2'>
                                            <i className="fa-solid fa-camera text-2xl"></i>
                                        </span>
                                        <div className='absolute w-full h-full top-0 left-0 text-white cursor-pointer'></div>
                                        <span className='text-white text-sm font-normal uppercase'>+2 Photos</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[66.6%_34%]">
                                    <div className="w-full px-[15px] relative mb-3">
                                        <div className="block w-full">
                                            <ul className='flex flex-wrap justify-between bg-[#f9fafe] border-b border-solid border-[#acabb0] pl-0 mb-0'>
                                                {
                                                    tabData.map((item, index) => {
                                                        return (
                                                            <MainTabs onClick={() => this.handleClick(index)} key={item.id} {...item} />
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="block w-full">
                                                {this.showTab()}
                                            </div>
                                        </div>
                                    </div>
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

export default UniverstyDetails;