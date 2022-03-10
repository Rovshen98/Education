import React from 'react';

function MainTabs({ icon, text,onClick }) {
    return (
        <li className='p-0 indent-0'>
            <div onClick={onClick} className='flex items-center cursor-pointer p-[5px] text-sm font-medium text-[#2595b3] border-b border-solid border-[#2595b3]'>
                <span className='inline-flex items-center w-10 h-10 text-xl'><i class={icon}></i></span>
                {text}
            </div>
        </li>
    )
}

export default MainTabs;