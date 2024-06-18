import React from 'react'
import {img1, img2,img3,img4} from '../image/index'


function Logo({width='100px'}) {
  return (
    <div >
     <img className=' h-14  w-14 rounded-3xl'
     src={img4} alt="Logo" />
    </div>
  )
}

export default Logo
