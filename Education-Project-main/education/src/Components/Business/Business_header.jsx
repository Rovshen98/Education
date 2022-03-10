import React from 'react'
import {Link} from "react-router-dom"
import "./Business_header.css"
function Business_header() {
    return (
        <div className=' business_header w-full flex justify-end h-[60px] px-5'>

            <ul  className='w-max h-full flex justify-center items-center gap-10 color-[#333]'>
               <li className='h-full flex justify-center items-center'>Kurumsal</li>
               <li className='h-full flex justify-center items-center'><Link to="/business-detail" >Çevrimiçi Yatırım</Link></li>
               <li className='h-full flex justify-center items-center'>Gayrimenkul</li>
               <li className='h-full flex justify-center items-center'>Vatandaşlık</li>
               <li className='h-full flex justify-center items-center'>Kılavuzlar</li>
               <li className='h-full flex justify-center items-center'>Makaleler</li>

            </ul>
        </div>
    )
}

export default Business_header