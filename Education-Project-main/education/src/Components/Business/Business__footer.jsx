import React, {useState} from 'react'
import "./Business__footer.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Business__footer() {
    const [logos, setlogos] = useState([
        {
            id:200,
            img:"residence.png"
        },
        {
            id:201,
            img:"residence.png"
        },
        {
            id:202,
            img:"residence.png"
        },
        {
            id:203,
            img:"residence.png"
        },
        {
            id:204,
            img:"residence.png"
        },
        {
            id:205,
            img:"residence.png"
        }
    ])

  return (
    <div className='footer'>
        <div className="logos">
        <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
            {logos.map((item)=>{
              return  <SwiperSlide key={item.id}><div  className="logos__item"><img src={`/images/${item.img}`} alt="" /></div></SwiperSlide>  
            })}
                
    </Swiper>      
        </div>
        <div className="footer__wrapper">
            <div className="footer__wrapper__item">
                <h1>Vatandaşlık</h1>
                <ul>
                    <li>Nasıl?</li>
                    <li>Adım-Adım</li>
                    <li>Faydalar</li>
                </ul>
            </div>
            <div className="footer__wrapper__item">
            <h1>Projeler</h1>
                <ul>
                    <li>İstanbul</li>
                    <li>İstanbul Villalar</li>
                    <li>İstanbul Daireler</li>
                    <li>Bodrum</li>
                    <li>Bodrum Villalar</li>
                    <li>Bodrum Daireler</li>
                </ul>
            </div>
            <div className="footer__wrapper__item">
            <h1>Projeler</h1>
                <ul>
                    <li>Daireler</li>
                    <li>Villalar</li>
                    <li>Deniz Manzarası</li>
                    <li>Lüks</li>
                    
                </ul>    
            </div>
            <div className="footer__wrapper__item">
            <h1>Bağlantılar</h1>
                <ul>
                    <li>Türk Vatandaşlığı</li>
                    <li>Makaleler</li>
                    <li>Haberler</li>
                    <li>Sitemap</li>
                    
                </ul>      
            </div>
        </div>
        <div className="footer__end">Copyright © 2021 Trem Global. Tüm Hakları Saklıdır.</div>
    </div>
  )
}

export default Business__footer