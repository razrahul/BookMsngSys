import React from 'react'

function Container({children,className=""}) {
  // return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  return <div className={`container mx-auto px-4 ${className}`}>{children}</div>;
}

export default Container