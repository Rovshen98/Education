import React, { useState } from 'react'
import "./Business__detail__home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineLocationCity, MdLocationPin } from "react-icons/md"
import { FaKey, FaPlane, FaUmbrellaBeach, FaHospitalAlt, FaSchool, FaShoppingBag, FaTree } from "react-icons/fa"
import { RiPinDistanceFill } from "react-icons/ri"
import { BsCreditCard2Front } from "react-icons/bs"
import { TiTick } from "react-icons/ti"

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
    const [slider, setslider] = useState([
        {
            id: 220,
            img1: "beylikduzu.png",
            img2: "beylikduzu2.png",
            img3: "beylikduzu3.png",
            img4: "beylikduzu4.png"
        },
        {
            id: 221,
            img1: "beylikduzu.png",
            img2: "beylikduzu2.png",
            img3: "beylikduzu3.png",
            img4: "beylikduzu4.png"
        },
        {
            id: 222,
            img1: "beylikduzu.png",
            img2: "beylikduzu2.png",
            img3: "beylikduzu3.png",
            img4: "beylikduzu4.png"
        }
    ])

    return (
        <div className='business__detail__home'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {slider.map((item) => {
                    return <SwiperSlide key={item.id}>
                        <div className="view">
                            <div className="left"><img src={`/images/${item.img1}`} alt="" /></div>
                            <div className="right">
                                <div className="right__item"><img src={`/images/${item.img2}`} alt="" /></div>
                                <div className="right__item"><img src={`/images/${item.img3}`} alt="" /></div>
                                <div className="right__item"><img src={`/images/${item.img1}`} alt="" /></div>
                                <div className="right__item"><img src={`/images/${item.img4}`} alt="" /></div>
                            </div>
                        </div>


                    </SwiperSlide>
                })}

            </Swiper>

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
                <div className="section__two__main">
                    <h1>Proje Odaları</h1>
                    <div className="section__detail__two__wrapper">
                        <table>
                            <tr>
                                <td>Odalar</td>
                                <td>Min Ücret</td>
                                <td>En yüksek fiyat</td>
                                <td>Min</td>
                                <td>Maks</td>
                                <td>Banyolar</td>
                                <td>Kat planları</td>
                            </tr>
                            <tr>
                                <td>1+0 </td>
                                <td>$140,000 </td>
                                <td>$166,000 </td>
                                <td>26 M2</td>
                                <td>34 M2</td>
                                <td>1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1+1  </td>
                                <td>$202,000 </td>
                                <td>$236,000 </td>
                                <td>35,00 M2</td>
                                <td>51,00 M2</td>
                                <td>1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2+1</td>
                                <td>$252,000</td>
                                <td>$279,000</td>
                                <td>64,00 M2</td>
                                <td>82,00 M2</td>
                                <td>2</td>
                                <td></td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>


            <div className="section__detail__three">
                <div className="section__detail__three__title">
                    Yakındakı konumlar
                </div>
                <div className="wrapper__all">
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
            </div>

            <div className="section__tick">
                <h1>Özellikler</h1>
                <div className="wrapper__main">
                
                    <div className="section__tick__main">
                        <h1>Genel Özellikler</h1>
                        <ul>
                            <li><TiTick />Asansör</li>
                            <li><TiTick />Bahçe ve Çocuk Oyun Alanı</li>
                            <li><TiTick />Kapalı otopark</li>
                        </ul>
                        <h1>Teknik özellikler</h1>
                        <ul>
                            <li><TiTick />Kablolu TV</li>
                            <li><TiTick />Uydu TV Alıcısı</li>
                            <li><TiTick />Merkezi Sıcak Su</li>
                            <li><TiTick />Jeneratör</li>
                            <li><TiTick />Doğal gaz</li>
                            <li><TiTick />24 Saat Teknik Servis</li>
                            <li><TiTick />Su Tankı</li>
                            <li><TiTick />Su Artırıcı</li>
                        </ul>
                    </div>
                    <div className="section__tick__main">
                        <h1>Güvenlik Özellikleri</h1>
                        <ul>
                            <li><TiTick />Güvenlik</li>
                            <li><TiTick />Konut Güvenliği</li>
                            <li><TiTick />Çelik Kapı</li>
                            <li><TiTick />Otomatik Yangın Söndürme Sistemi</li>
                            <li><TiTick />Yangın ve Duman Dedektörü</li>
                            <li><TiTick />Güvenlik kameraları</li>
                            <li><TiTick />Kapalı Devre Video Sistemi</li>
                            <li><TiTick />24 Saat Güvenlik</li>
                            <li><TiTick />Görüntülü İnterkom Sistemi</li>
                        </ul>
                        <h1>En İyi Özellikler</h1>
                        <ul>
                            <li><TiTick />Şehir Merkezi</li>
                            <li><TiTick />Yüksek Yatırım Değeri</li>
                            <li><TiTick />Havaalanı'na Yakın</li>
                            <li><TiTick />Aile için Uygun</li>
                        </ul>
                    </div>
                    <div className="section__tick__main">
                        <h1>Spor Tesisleri</h1>
                        <ul>
                            <li><TiTick />Sosyal Tesisler</li>
                            <li><TiTick />Kapalı yüzme havuzu</li>
                            <li><TiTick />Sauna</li>
                        </ul>
                        <h1>Proje Manzarası</h1>
                        <ul>
                            <li><TiTick />Şehir Merkezi</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="section__detail__four">
                {sectionfour.map((item) => {
                    return <div className="section__detail__four__item">
                        <img src={`images/${item.img}`} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        <div className="section__detail__four__item__price"><div className="wrapper"><BsCreditCard2Front /> <p>{item.credit}</p> </div><div className="percentage">{item.percentage}%</div></div>
                        <h2>{item.subtitle}</h2>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Business__detail__home