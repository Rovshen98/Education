import React, { useState } from 'react'
import "./Business_home.css"
import Gallery__card from './Gallery__card'
import Form from './Form'

import { MdTravelExplore, MdOutlineHomeWork, MdSupport, MdOutlineImageSearch } from 'react-icons/md';
import { RiHomeGearFill, RiExchangeDollarLine } from 'react-icons/ri';
import { AiOutlineRight } from "react-icons/ai"
import { BsHeadset } from "react-icons/bs"
import { FaDollarSign } from "react-icons/fa"

import { VscLaw } from "react-icons/vsc"



function Business_home() {
    const [gallery, setgallery] = useState([
        {
            id: 81,
            img: "Ingiltere.png",
            title: "İngiltere",
            text: "5-6 yıl için Pasaport Minimum Yatırım - £2,000,000 174 Ülkeye Vizesiz Seyahat"
        },
        {
            id: 82,
            img: "Turkiye.png",
            title: "Türkiye",
            text: "5-6 yıl için Pasaport Minimum Yatırım - £2,000,000 174 Ülkeye Vizesiz Seyahat"
        },
        {
            id: 83,
            img: "Amerika.png",
            title: "Amerika",
            text: "5-6 yıl için Pasaport Minimum Yatırım - £2,000,000 174 Ülkeye Vizesiz Seyahat"
        },
        {
            id: 84,
            img: "Arap.png",
            title: "Birleşik Arap Emirlikleri",
            text: "5-6 yıl için Pasaport Minimum Yatırım - £2,000,000 174 Ülkeye Vizesiz Seyahat"
        },
        {
            id: 85,
            img: "Kanada.png",
            title: "Kanada",
            text: "5-6 yıl için Pasaport Minimum Yatırım - £2,000,000 174 Ülkeye Vizesiz Seyahat"
        },
        {
            id: 86,
            img: "Kibris.png",
            title: "Kıbrıs",
            text: "5-6 yıl için Pasaport Minimum Yatırım - £2,000,000 174 Ülkeye Vizesiz Seyahat"
        }
    ])

    const [slidervideo, setslidervideo] = useState([
        {
            id: 77,
            img: "city1.png"
        },
        {
            id: 78,
            img: "city2.jpg"
        },
        {
            id: 79,
            img: "city3.jpg"
        }


    ])

    const [sectionthree, setsectionthree] = useState([
        {
            id: 100,
            icon: <MdTravelExplore />,
            title: "Düzenli proje turlarıyla gelişmeleri takip edin",
            text: "Rahatınız için çeşitli ulaşım seçenekleri sunuyoruz. Dilerseniz günlük iş gezileri, dilers... ",
        },
        {
            id: 101,
            icon: <MdOutlineHomeWork />,
            title: "Oturma izninizi güvence altına alalım",
            text: "Uzman ekibimiz oturma izninizi güvence altına almanın stresini azaltır. Bırakın işi hızlı ...",
        },
        {
            id: 102,
            icon: <RiHomeGearFill />,
            title: "Hizmetlerinizin yönetimi için bizden destek alın",
            text: "Mülkleriniz için daha yüksek hizmet standartlarına bağlı kalarak, faturalarınıza ve hizmet...",
        },
    ])
    const [sectionfour, setsectionfour] = useState([
        {
            id: 90,
            icon: <MdSupport />,
            title: "Kusursuz Destek",
            text: "Mülkünüz ve iş yatırımınızın yanı sıra göçmenlik ve hukuk danışmanlığı için de tam destek sağlıyoruz"
        },
        {
            id: 91,
            icon: <BsHeadset />,
            title: "Yatırımınızın Yüksek Getirisi",
            text: "Uzmanlardan oluşan ekibimiz kısa sürede kar etmenize yardımcı olacaktır."
        },
        {
            id: 92,
            icon: <RiExchangeDollarLine />,
            title: "Sınır Tanımayan Yatırım",
            text: "İster gayrimenkul ister iş yatırımı olsun, dünyanın çeşitli ülkelerinde en iyi hizmeti veriyoruz"
        },
        {
            id: 93,
            icon: <MdOutlineImageSearch />,
            title: "Müşteri Hizmetleri 24/7",
            text: "En iyi sonuçlar için size kolaylık sağlayan ücretsiz satış sonrası hizmetleri"
        },
        {
            id: 94,
            icon: <FaDollarSign />,
            title: "En İyi Fiyat Garantisi",
            text: "Tüm yatırım türleri için en iyi fiyatı garanti ediyoruz"
        },
        {
            id: 95,
            icon: <VscLaw />,
            title: "Yasal süreçler",
            text: "Hukuki uzmanlarımız yasal süreçlerde size yardımcı olacaktır"
        },
    ])


    return (
        <div className='business_home'>
            <div className="advertisement">
                <img src={"/images/burak.png"} alt="" />

            </div>

            <div className="business__text">
                <h1>TREMGLOBAL’e HOŞ GELDİNİZ
                    Kolay Çevrimiçi Yatırım</h1>
                <p>Biz sadece bir real estate firmasından daha fazlasıyız. Trem Global, yatırım, göçmenlik ve hukuk danışmanlığı hizmetlerini birleştiren uçtan uca çözümler sunmaktadır.

                    Ekibimiz dünya çapında önde gelen yatırımcılar, aile şirketleri, bankalar, yatırım şirketleri, işletmeler ve özel müşterilere kapsamlı danışmanlık hizmetleri sunmaktadır.</p>
                <ul>
                    <li>Beklentilerinizi bizimle paylaşın</li>
                    <li>Size özel kişiselleştirilmiş çözümler sunalım</li>
                    <li>Hemen bir ücretsiz ilk danışma görüşmesi planlayabilirsiniz</li>


                </ul>
                <a href="">ÜCRETSİZ DANIŞMA REZERVASYON</a>

            </div>

            <div className="section__one">

                <div className="section__one__title">
                    Uluslararası Emlaklar
                </div>

                <div className="gallery">
                    {gallery.map((item) => {
                        return <Gallery__card item={item} key={item.id} />
                    })}
                </div>

            </div>

            <Form />
            <div className="section__two">
                <div className="section__two__title">
                    Proje Videosu
                </div>



                <div className="section__two__slider">
                    <div className="left__video">
                        <video controls>
                            <source src={"/videos/Beylik.mp4"} type="video/mp4" />
                        </video>
                    </div>

                    <div className="slider__right">
                    
                           
                            
                      
                            {
                                slidervideo.map((item) => {
                                    return <div  key={item.id} className="slider__right__item"><img src={`/images/${item.img}`} alt="" /></div>
                                })
                            }



                    </div>
                </div>
            </div>

            <div className="section__three">
                <div className="section__three__title">
                    Hizmetler
                </div>

                <div className="section__three__wrapper">

                    {
                        sectionthree.map((item) => {
                            return <div key={"item.id"} className="section__three__wrapper__item">
                                <div className="item__upper"><div className="icon">{item.icon}</div><h2>{item.title}</h2></div>
                                <p>{item.text}</p>
                                <a href="">Devamını oku <AiOutlineRight color='RGB(37 149 179)' size={"12px"} /></a>
                            </div>
                        })
                    }

                </div>

            </div>

            <div className="section__four">

                <img src={"/images/officestaff.jpg"} alt="" />
                <h1>Şimdi Sınırlar Olmadan Yatırım Yapmanın Tam Zamanı!</h1>
                <div className="section__four__wrapper">
                    {sectionfour.map((item) => {
                        return <div key={item.id} className="section__four__wrapper__item">
                            <div className="left">{item.icon}</div>
                            <div className="right">
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                            </div>

                        </div>
                    })}
                </div>

            </div>

        </div>
    )
}

export default Business_home