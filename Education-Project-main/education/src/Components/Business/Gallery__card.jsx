import React from 'react'
import "./Gallery__card.css"
function Gallery__card ({item}) {
  return (
    <div className='gallery__card'>
    <img src={`/images/${item.img}`} alt="" />
    <h1>{item.title}</h1>
    <p>{item.text}</p>

</div>
  )
}

export default Gallery__card 