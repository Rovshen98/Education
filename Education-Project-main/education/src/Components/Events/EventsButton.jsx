import React from 'react';
import { Link } from 'react-router-dom';

function EventsButton({ text, link }) {
    return (
        <div className="w-full px-[15px]">
            <div className="px-[15px]">
                <p className='text-base text-[#656f7b] font-light'>
                    <Link to={link} className='w-[200px] bg-[#2595b3] rounded-[5px] py-3 px-[22px] text-white inline-block font-medium'>{text}</Link>
                </p>
            </div>
        </div>
    )
}

export default EventsButton;