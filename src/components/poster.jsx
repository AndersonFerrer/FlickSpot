import React from 'react'

export default function Poster (props) {
  return (
    <div className='relative w-[200px] group hover:drop-shadow-xl cursor-pointer h-[300px] object-cover rounded-2xl overflow-hidden'>
      <img className='w-full h-full group-hover:opacity-95' src={`https://image.tmdb.org/t/p/original${props.img}`} alt={props.title} />
      <div className='absolute bottom-[-100%] transition-all group-hover:bottom-0 text-center w-full bg-gradient-to-b from-transparent via-black/60 to-black/90 py-4'>
        <h1 className='font-bold'>{props.title}</h1>
        <h1 className='font-semibold text-yellow-500 '>{`${props.popularity} / 10`}</h1>
      </div>
    </div>
  )
}
