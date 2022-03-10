import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
import "..//..//css/main.css";

function Modal({ closeModal }) {
    const [modData, setModData] = useState([
        {
            id: 1,
            icon: "fa-solid fa-house-chimney",
            title: "Universities",
            href: "/universty"
        },
        {
            id: 2,
            icon: "fa-solid fa-book-open",
            title: "Programs",
            href: "/programs"
        },
        {
            id: 3,
            icon: "fa-solid fa-calendar-days",
            title: "Fairs-Events",
            href: "/events"
        },
        {
            id: 4,
            icon: "fa-solid fa-power-off",
            title: "Services",
            href: "/services"
        },
        {
            id: 5,
            icon: "fa-solid fa-graduation-cap",
            title: "Scholarship",
            href: "/scholarship"
        },
        {
            id: 6,
            icon: "fa-solid fa-phone",
            title: "Contact",
            href: "/contact"
        }
    ])
    const [modNavData, setModNavData] = useState([
        {
            id: 1,
            title: "ABOUT US",
            link: "/about-us"
        },
        {
            id: 2,
            title: "PRIVACY POLICY",
            link: "/privacy-policy"
        },
        {
            id: 3,
            title: "COOKIE POLICY",
            link: "/cookie-policy"
        },
        {
            id: 4,
            title: "USER AGREEMENT",
            link: "/user-agreement"
        }
    ])
    return (
        <AnimatePresence>
            <motion.div className='block w-full h-full fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.9)] pb-[100px] will-change-[opacity]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: "auto" }}
            >
                <div className="absolute right-3 top-3 cursor-pointer" onClick={closeModal()}>
                    <span className='w-10 h-10 relative overflow-hidden inline-flex justify-center items-center p-0 bg-[#f2f2f2] text-[#4cadc9] rounded-[5px]'>
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </span>
                </div>
                <div className="text-center mt-[100px]">
                    <div className="max-w-[1140px] px-[15px] mx-auto">
                        <div className="flex flex-wrap mx-[-15px]">
                            {
                                modData.map((item) => {
                                    return (
                                        <div key={item.id} className="w-1/3 relative px-[15px]">
                                            <div className="modal__item h-[250px] bg-white rounded-[10px] mb-[30px] flex items-end justify-center relative transition-colors hover:bg-[#2595b3]">
                                                <div className="block text-xl text-[#656f7b] font-normal">
                                                    <span className='flex w-[150px] h-[150px] justify-center items-center text-[#2595b3] transition-all'><i class={`${item.icon} text-[90px]`}></i></span>
                                                    <h3 className='text-xl text-[#656f7b] font-normal transition-all my-5'>{item.title}</h3>
                                                </div>
                                                <Link to={item.href} className='absolute left-0 top-0 w-full h-full'></Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="text-left">
                            <nav className='block'>
                                <ul className='flex justify-between list-none'>
                                    {
                                        modNavData.map((w) => {
                                            return (
                                                <li key={w.id} className='py-[5px]'>
                                                    <Link to={w.link} className='text-white font-normal transition-all hover:text-[#4cadc9]'>{w.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal;