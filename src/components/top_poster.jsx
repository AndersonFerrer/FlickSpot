import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export default function TopPoster ({ movies, number }) {
  return (
    <Link key={`Poster-${movies.id}`} to={{ pathname: `/pelicula/${movies.id}` }}>
      <div className={(number !== 10) ? 'flex items-center h-[204px] w-[322px] sm:h-[240px]  cursor-pointer rounded-xl group hover:drop-shadow-xl ' : 'flex items-center h-[204px] w-[403px] sm:h-[240px]  cursor-pointer rounded-xl group hover:drop-shadow-xl '}>
        <img className='h-[calc(100%-60px)] relative left-6 z-0 opacity-80' src={`../../numbersTop/${number}.png`} alt='1' />
        {movies && movies.backdrop_path && (
          <img
            className='z-10 h-full rounded-xl'
            src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
            alt={movies.title}
          />
        )}
      </div>
    </Link>
  )
}
