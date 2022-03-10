import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

class FacultiesTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            acData: [
                {
                    id: 1,
                    text: "Faculty of Medicine",
                },
                {
                    id: 2,
                    text: "Faculty of Arts and Sciences",
                },
                {
                    id: 3,
                    text: "Faculty of Fine Arts, Design and Architecture",
                }
            ],
            activeTab: -1
        }
    }

    activateTab = (index) => {
        this.setState(prev => ({
            activeTab: prev.activeTab === index ? -1 : index
        }));
    }

    render() {
        const { activeTab } = this.state;
        const { acData } = this.state;
        return (
            <div className="block">
                <div className="block w-full box-border mb-[50px]">
                    <div className="block w-full">
                        <form action="">
                            <div className="flex items-center bg-white my-[30px] pt-[10px] pb-[35px] px-[35px] rounded-md shadow-[0_0px_24px_0_rgb(0_0_0/2%)],0px_20px_24px_0_rgb(0_0_0/2%)">
                                <div className="my-[1em] mr-[0.5em] flex-[1]">
                                    <label htmlFor="edit_lang" className='font-normal text-[13px] text-[#656f7b] pb-[15px] uppercase'>Language</label>
                                    <select name="edu_lang" id="edu_lang" className='block w-[80%] h-[50px] bg-transparent outline-none border-0 border-b border-solid border-[#acabb0] py-[0.375rem] px-[0.75rem] text-base font-normal text-[#656f7b]'>
                                        <option value="All" selected="selected">- Any -</option>
                                        <option value="English">English</option>
                                        <option value="30% English">30% English</option>
                                        <option value="Turkish">Turkish</option>
                                        <option value="French">French</option>
                                        <option value="German">German</option>
                                        <option value="Russian">Russian</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Chinese">Chinese</option>
                                    </select>
                                </div>
                                <div className="my-[1em] mr-[0.5em] flex-[1]">
                                    <label htmlFor="edit_lang" className='font-normal text-[13px] text-[#656f7b] pb-[15px] uppercase'>Degree</label>
                                    <select name="edu_lang" id="edu_lang" className='block w-[80%] h-[50px] bg-transparent outline-none border-0 border-b border-solid border-[#acabb0] py-[0.375rem] px-[0.75rem] text-base font-normal text-[#656f7b]'>
                                        <option value="All" selected="selected">- Any -</option>
                                        <option value="Associate Degree">Associate Degree</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Master">Master</option>
                                        <option value="Phd">PhD</option>
                                    </select>
                                </div>
                                <div className="w-[150px] my-[1em]">
                                    <input type="submit" id='submit_faculties' className='w-full p-[15px] mt-[15px] bg-[#2595b3] rounded-md cursor-pointer text-white relative shadow-[5px_5px_20px_5px_rgb(38_0_0/20%)]' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="block w-full">
                        {
                            acData.map((item, index) => {
                                return (
                                    <AccordionItem key={item.id} activeTab={activeTab} index={index} {...item} activateTab={() => this.activateTab(index)} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FacultiesTab;