import React, { useState } from 'react'
import "./Business__detail__home.css"
import { MdOutlineLocationCity, MdLocationPin } from "react-icons/md"
import { FaKey, FaPlane, FaUmbrellaBeach, FaHospitalAlt, FaSchool, FaShoppingBag, FaTree } from "react-icons/fa"
import { RiPinDistanceFill } from "react-icons/ri"
import {BsCreditCard2Front} from "react-icons/bs"
function Business__detail__home() {
    const [box1, setbox1] = useState([
        {
            id: 30,
            icon: <MdLocationPin />,
            title: "City:",
            text: "Beylikdüzü, Istanbul"
        },
        {
            id: 31,
            icon: <MdOutlineLocationCity />,
            title: "Project Type",
            text: "Residences"
        },
        {
            id: 32,
            icon: <FaKey />,
            title: "Ready By:",
            text: "2023"
        },
        {
            id: 33,
            icon: <FaPlane />,
            title: "Distance to Airport:",
            text: "KM"
        },
        {
            id: 34,
            icon: <FaUmbrellaBeach />,
            title: "Distance to Beach:",
            text: "4 KM"
        },
        {
            id: 35,
            icon: <RiPinDistanceFill />,
            title: "Distance to Center:",
            text: "38 KM"
        }
    ])

    const [sectionfour, sectionfourset] = useState([
        {
            id: 50,
            img: "kartal.jpg",
            title: "Grandlife Kartal",
            text: "Kartal, Istanbul",
            credit: "Nakit + Taksit",
            percentage: 13,
            subtitle: "$128,000"
        },
        {
            id: 51,
            img: "kartal2.jpg",
            title: "Dynasty Bahçelievler",
            text: "Bahçelievler, Istanbul",
            credit: "Nakit",
            percentage: 12,
            subtitle: "$162,000"
        },
        {
            id: 52,
            img: "kartal3.jpg",
            title: "Belle Vie Mimaroba",
            text: "Büyükçekmece, Istanbul",
            credit: "Nakit + Taksit",
            percentage: 13,
            subtitle: "$128,000"
        },
    ])

    return (
        <div className='business__detail__home'>
            <div className="view">
                <div className="left"><img src={"/images/beylikduzu.png"} alt="" /></div>
                <div className="right">
                    <div className="right__item"><img src={"/images/beylikduzu2.png"} alt="" /></div>
                    <div className="right__item"><img src={"/images/beylikduzu3.png"} alt="" /></div>
                    <div className="right__item"><img src={"/images/beylikduzu4.png"} alt="" /></div>
                    <div className="right__item"><img src={"/images/beylikduzu.png"} alt="" /></div>
                </div>
            </div>

            <div className="section__detail__one">
                <h1>TOR BEYLIKDÜZÜ</h1>
                <p> Beylikdüzü, Istanbul</p>
                <div className="section__detail__one__box1">
                    <h1>Overview</h1>
                    <div className="box1__wrapper">
                        {box1.map((item) => {
                            return <div key={item.id} className="box1__wrapper__item">
                                <div className="left">{item.icon}</div>
                                <div className="right"><h1>{item.title}</h1><p>{item.text}</p></div>
                            </div>
                        })}
                    </div>
                </div>

                <div className="fixed__box">
                    <div className="fixed__box__item">
                        <div className="title">Fiyat Aralığı</div>
                        <p className='active'>$149,000 - $644,000</p>
                    </div>
                    <div className="fixed__box__item">
                        <div className="title">Emlak Alanı </div>
                        <p>66 - 240 m2 </p>
                    </div>
                    <div className="fixed__box__item">
                        <div className="title">Proje Türü </div>
                        <p>Residences</p>
                    </div>
                    <div className="fixed__box__item">
                        <div className="title">Proje tamamlanma durumu </div>
                        <p>45%</p>
                    </div>
                </div>


            </div>

            <div className="section__detail__two">
                <div className="section__detail__two__title">
                    Proje Videosu
                </div>

                <video controls>
                    <source src={'/videos/Beylik.mp4'} />
                </video>
            </div>

            <div className="section__detail__three">
                <div className="section__detail__three__title">
                    Yakındakı konumlar
                </div>

                <div className="section__detail__three__wrapper">
                    <div className="section__detail__three__wrapper__item">
                        <FaHospitalAlt />
                        <p>Hastaneler</p>
                    </div>
                    <div className="section__detail__three__wrapper__item">
                        <FaSchool />
                        <p>Okullar</p>
                    </div>
                    <div className="section__detail__three__wrapper__item">
                        <FaShoppingBag />
                        <p>Alış-veriş Merkezleri</p>
                    </div>
                    <div className="section__detail__three__wrapper__item">
                        <FaTree />
                        <p>Parklar</p>
                    </div>
                </div>
            </div>

            <div className="section__detail__four">
                {sectionfour.map((item) => {
                    return <div className="section__detail__four__item">
                        <img src={`images/${item.img}`} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        <div className="section__detail__four__item__price"><div className="wrapper"><BsCreditCard2Front/> <p>{item.credit}</p> </div><div className="percentage">{item.percentage}%</div></div>
                        <h2>{item.subtitle}</h2>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Business__detail__home