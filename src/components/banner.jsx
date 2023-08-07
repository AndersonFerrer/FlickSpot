import React from 'react'

export default function Banner ({ movies }) {
  console.log(movies)
  return (
    <div className='relative rounded-xl w-[246px] sm:w-[355.6px] group hover:drop-shadow-xl cursor-pointer overflow-hidden'>
      <img className='h-[164px] w-full sm:h-[200px] object-cover  group-hover:opacity-95' src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} alt={movies.title} />
      <div className='absolute bottom-[0] h-[48px] grid place-content-center w-full text-white bg-black/30 backdrop-blur-sm p-2'>
        <h1 className='truncate ... font-bold'>{movies.title}</h1>
      </div>
    </div>
  )
}
