import React from 'react'
import "./Business__footer.css"
function Business__footer() {
  return (
    <div className='footer'>
        <div className="logos">
                <div className="logos__item"><img src={"/images/residence.png"} alt="" /></div>
                <div className="logos__item"><img src={"/images/residence.png"} alt="" /></div>
                <div className="logos__item"><img src={"/images/residence.png"} alt="" /></div>
                <div className="logos__item"><img src={"/images/residence.png"} alt="" /></div>
                <div className="logos__item"><img src={"/images/residence.png"} alt="" /></div>
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