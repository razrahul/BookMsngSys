import React from 'react'
import { bc_img1, bc_img2}  from '../image/index'
import SearchBook from './SeachBook'

function HeroSec() {
  return (
    <div className="relative h-[30rem] bg-cover bg-center bg-no-repeat" 
    //  style={{ backgroundImage: `url('https://images.pexels.com/photos/25542627/pexels-photo-25542627/free-photo-of-woman-in-white-dress-sitting-in-window-and-reading-book.jpeg?auto=compress&cs=tinysrgb&w=600')` }}>
    style={{ backgroundImage: `url(${bc_img1})` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
     
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
     <div className=''>
      <SearchBook />
     </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Good Website to Book etc</h1>
      <p className="max-w-2xl text-lg md:text-xl">
        Discover a vast collection of books, from the latest bestsellers to timeless classics. Enjoy easy browsing, seamless booking, and fast delivery at your fingertips.
      </p>
    </div>
    </div>
  )
}

export default HeroSec
