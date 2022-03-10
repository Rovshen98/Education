import React, { Component } from 'react';
import Header from '../Components/Basic/Header';
import ServicesItem from '../Components/Services/ServicesItem';
import EFooter from '../Components/Education/EFooter';
import { connect } from 'react-redux';

class Services extends Component {
    render() {
        const { datas } = this.props;
        return (
            <>
                <Header />
                <main className='block'>
                    <div className='block box-border w-full'>
                        <div className="block">
                            <div className="max-w-[1140px] mx-auto px-[15px]">
                                <p className='text-base text-[#656f7b] font-light'>
                                    <span className='text-[#2595b3]'>
                                        <strong>Trucas</strong>
                                    </span>
                                    endeavors to implement professional and secured services by instantly responding to the needs of our students with an inventive and proactive approach. Our values are transparency, accessibility, trustworthiness...
                                </p>
                            </div>

                        </div>
                        <div className="block w-full">
                            <div className="max-w-[1140px] mx-auto px-[15px] bg-[#f1f3f9] my-[50px] py-[50px]">
                                <div className="px-[15px]">
                                    <div className="grid grid-cols-3 mx-[-15px] gap-8">
                                        {
                                            datas.map((data) => {
                                                return (
                                                    <ServicesItem key={data.id} {...data} />
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
            </>
        )
    }
}

function mapStateToProps(state) {
    const datas = state.services.servicesData;
    return {
        datas
    }
}

export default connect(mapStateToProps)(Services);