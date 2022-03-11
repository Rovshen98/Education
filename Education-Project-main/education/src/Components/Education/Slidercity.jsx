import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slidercity.css"


import { GiTowerFlag } from "react-icons/gi"
import { BiChevronRight } from "react-icons/bi"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";

function Slidercity() {
    const [slidercity, setslidercity] = useState([
        {
            id: 1,
            img: "ankara.jpg",
            img2: "eskisehir.jpg",
            img3: "izmir.jpg",
            name: "Ankara",
            name2: "Eskişehir",
            name3: "İzmir",
            number: 3,
            number2: 2,
            number3: 2,
        },
        {
            id: 2,
            img: "ankara.jpg",
            img2: "eskisehir.jpg",
            img3: "izmir.jpg",
            name: "Ankara",
            name2: "Eskişehir",
            name3: "İzmir",
            number: 3,
            number2: 2,
            number3: 2,
        },
        {
            id: 3,
            img: "ankara.jpg",
            img2: "eskisehir.jpg",
            img3: "izmir.jpg",
            name: "Ankara",
            name2: "Eskişehir",
            name3: "İzmir",
            number: 3,
            number2: 2,
            number3: 2,
        },
        {
            id: 4,
            img: "ankara.jpg",
            img2: "eskisehir.jpg",
            img3: "izmir.jpg",
            name: "Ankara",
            name2: "Eskişehir",
            name3: "İzmir",
            number: 3,
            number2: 2,
            number3: 2,
        }
    ])
    return (
        <div className="slidercity">
        <div className='slidercity__section'>
            <h1>Discover <span> Destinations</span></h1>
            <Swiper
               
                spaceBetween={10}
                slidesPerView={false}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
                loop= {true}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                      
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      
                      slidesPerView: 1.5,
                    },
                    1000: {
                        width:980,
                        slidesPerView: 1.8,
                      },
                      1250: {
                       width:1200,
                        slidesPerView: 2.2,
                      },
                      1400: {
                        width:1400,
                        slidesPerView: 2.4,
                      },
                  }}
            >

                {
                    slidercity.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='wrapper__all'>
                                <div className="slidercity__section__big">
                                    <img src={`/images/${item.img3}`} alt="" />
                                    <div className="main__wrapper">
                                        <div className="main__wrapper__item">{item.name3}</div>
                                        <div className="main__wrapper__number"><GiTowerFlag /><p>{item.number3} Universities</p></div>
                                        <div className="main__wrapper__discover">DISCOVER CITY <BiChevronRight /></div>
                                    </div>
                                </div>
                                <div className="slidercity__section__small">
                                    <div className='slidercity__section__small__main'>
                                        <img src={`/images/${item.img}`} alt="" />
                                        <div className="main__wrapper">
                                            <div className="main__wrapper__item">{item.name2}</div>
                                            <div className="main__wrapper__number"><GiTowerFlag /><p>{item.number2} Universities</p></div>
                                            <div className="main__wrapper__discover">DISCOVER CITY <BiChevronRight /></div>
                                        </div>
                                    </div>
                                    <div className='slidercity__section__small__main'>
                                        <img src={`/images/${item.img2}`} alt="" />
                                        <div className="main__wrapper">
                                            <div className="main__wrapper__item">{item.name2}</div>
                                            <div className="main__wrapper__number"><GiTowerFlag /><p>{item.number2} Universities</p></div>
                                            <div className="main__wrapper__discover">DISCOVER CITY <BiChevronRight /></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }



            </Swiper>

        </div>
        </div>
    )
}

export default Slidercity