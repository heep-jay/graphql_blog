import React from 'react';
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className='bg-black text-center mt-20 p-12 relative rounded-lg  bg-opacity-20 mb-8'>
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized 
          src={author.photo.url} 
          alt={author.name}
          height="100px"
          width="100px"
          className='align-middle rounded-full'
        />
      </div>
      <h3 className=' text-white text-center my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
      
    </div>
  )
}

export default Author