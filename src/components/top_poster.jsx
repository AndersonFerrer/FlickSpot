import React from 'react'

export default function TopPoster ({ movies, i }) {
  return (
    <div className='relative flex justify-end rounded-xl w-[246px] sm:w-[355.6px] group hover:drop-shadow-xl cursor-pointer overflow-hidden'>
      <img src={`../../public/numbersTop/${i}.png`} alt='1' />
      <img className='aspect-[2/3] h-[164px] sm:h-[200px]' src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt={movies.title} />
    </div>
  )
}
