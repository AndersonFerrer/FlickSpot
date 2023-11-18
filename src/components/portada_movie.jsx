/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import useFetch from '../services/useFetch'
import { FaPlay } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import fetchMovieTrailer from '../services/fetchMovieTrailer'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { options } from '../services/options'
import '../App.css'

export default function PortadaMovie ({ data }) {
  const [generes, setGeneres] = useState(null)
  const [video, setVideo] = useState(null)
  const [runtime, setRuntime] = useState()

  useFetch('https://api.themoviedb.org/3/genre/movie/list?language=es-MX', setGeneres)

  fetch(`https://api.themoviedb.org/3/movie/${data?.id}?language=es-MX`, options)
    .then(res => res.json())
    .then(date => {
      const { runtime } = date
      setRuntime(runtime)
    })
    .catch(error => {
      console.error(error)
    })

  const arrayGeneros = generes?.genres
  fetchMovieTrailer(data.id, setVideo)

  const handleButtonClick = (event) => {
    event.preventDefault()
    window.open(URLTrailer, '_blank')
  }

  const genreNames = data?.genre_ids.map(ids => arrayGeneros?.find(objeto => objeto.id === ids).name)
  const combinedGenres = genreNames.join(' | ')
  const URLTrailer = `https://www.youtube.com/watch?v=${video}`

  return (

    <Link className='bg-transparent' to={{ pathname: `/pelicula/${data.id}` }}>
      <div className='overflow-hidden w-full flex relative h-[560px] rounded-2xl  shadow-xl shadow-black'>
        <div className='absolute left-0 z-10 items-start justify-center hidden w-3/5 h-full p-16 pr-24 md:w-4/5 bg-gradient-to-r from-black/60 via-black/50 to-transparent md:flex-col md:flex '>
          <h1 className='text-[36px] lg:text-[48px]  font-bold mb-4'>{data.title}</h1>
          <div>
            <div className='flex items-center justify-start gap-2 text-lg font-bold'>
              <h1 className='flex items-center justify-center gap-2 px-3 py-2 bg-red-400 rounded-3xl'><AiFillStar color='yellow' />{data?.vote_average}</h1>
              <h1>{data?.release_date.slice(0, 4)} -</h1>
              <h1>{`${Math.floor(runtime / 60)}h ${(runtime) % 60}m`}</h1>
              <div className='flex gap-2 text-white' />
            </div>
          </div>
          <h1 className='my-3 text-lg font-bold '>{combinedGenres}</h1>
          <p className='w-[75ch]'>{data?.overview}</p>
          <div>
            {video && <button onClick={handleButtonClick} className='flex items-center justify-center gap-2 px-6 py-4 mt-8 font-light transition-all duration-500 bg-red-400 shadow-lg hover:shadow-black/60 shadow-black hover:bg-red-500 rounded-3xl'>
              Ver Trailer <FaPlay className='inline' />
                      </button>}
          </div>
        </div>
        <img className='absolute right-0 z-0 flex w-full h-full bg-center md:hidden' src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt='portada' />
        <img className='absolute right-0 z-0 hidden object-cover w-full h-full md:flex' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt='portada' />
      </div>
    </Link>

  )
}
