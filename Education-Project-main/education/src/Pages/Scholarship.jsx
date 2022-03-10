import React, { Component } from 'react';
import Header from "../Components/Basic/Header";
import EFooter from "../Components/Education/EFooter";
import ServicesItem from '../Components/Services/ServicesItem';

class Scholarship extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "Bachelor Programs in English",
                    imgSrc: "/images/Scholarship-Bachelor Programs in English.png",
                    link: "bachelor-programs-english"
                }
            ]
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <Header />
                <main className='block'>
                    <div className="block box-border w-full bg-[#f9fafe] border-t border-solid border-[#eaeaea]">
                        <div className="block">
                            <div className="max-w-[1140px] mx-auto px-[15px]">
                                <div className="block">
                                    <h2 className='text-[25px] leading-8 text-[#20343b] font-normal my-5'>TRUCAS Scholarship Campaigns</h2>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="max-w-[1140px] mx-auto bg-[#f1f3f9] px-[15px] my-[50px] py-[50px]">
                                <div className="px-[15px]">
                                    <div className="grid grid-cols-3 gap-8 mx-[-15px]">
                                        {
                                            data.map((w) => {
                                                return (
                                                    <ServicesItem {...w} />
                                                )
                                            })
                                        }
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

export default Scholarship;