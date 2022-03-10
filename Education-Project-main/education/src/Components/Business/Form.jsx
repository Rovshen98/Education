import React from 'react'
import "./Form.css"
function Form() {
  return (
    <div className='form__wrapper'>
        <div className="form">
        <h1>Sizi arayabiliriz SİZİN İÇİN EN İYİ YATIRIMI SEÇMENİZE YARDIMCI OLACAĞIZ</h1>
        <span>Hızlı cevap</span>   
        <form action="">
            <div className="form__left">
                <input required placeholder={"Ad Soyad"} type="text"/>
                <input required placeholder={"40 120 45 52"} type="number"/>
                <input required placeholder={"E-posta Adresi"} type="email"/>
            </div>
            <div className="form__right">
                    <textarea required placeholder={'İlgilenilen projeler / Mesaj'} name="" id=""></textarea> 
                    <button type='submit'>Gönder</button>   
            </div>
            
        </form> 
            
        </div>
        
    </div>
  )
}

export default Form