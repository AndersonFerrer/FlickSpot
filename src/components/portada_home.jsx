import React, { useState } from 'react'
import useFetch from '../services/useFetch'
import { FaTicketAlt, FaPlay } from 'react-icons/fa'
import fetchMovieTrailer from '../services/fetchMovieTrailer'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Flag from 'react-world-flags'
import '../App.css'

export default function PortadaHome ({ data }) {
  const [generes, setGeneres] = useState(null)
  const [video, setVideo] = useState(null)
  useFetch('https://api.themoviedb.org/3/genre/movie/list?language=es-MX', setGeneres)
  const arrayGeneros = generes?.genres
  console.log(data)
  fetchMovieTrailer(data.id, setVideo)
  const handleButtonClick = (event) => {
    event.preventDefault()
    console.log(video)
    // Realiza la redirección a YouTube o cualquier enlace externo aquí
    window.open(URLTrailer, '_blank')
  }
  console.log(video)
  const URLTrailer = `https://www.youtube.com/watch?v=${video}`
  const languageCode = data.original_language.toUpperCase()
  console.log(languageCode)
  let flagIcon
  if (languageCode === 'EN') {
    flagIcon = 'us'
  } else if (languageCode === 'ES') {
    flagIcon = 'es'
  }
  return (

    <Link to={{ pathname: `/pelicula/${data.id}` }}>
      <div className='overflow-hidden w-full flex relative h-[450px] rounded-2xl '>
        <div className='absolute left-0 z-10 flex-col items-start justify-center hidden w-4/5 h-full p-16 sm:flex bg-gradient-to-r from-black via-black to-transparent'>
          <h1 className='text-[36px] lg:text-[48px]  font-bold mb-4'>{data.title}</h1>
          <div>
            <div className='flex items-center justify-start gap-2'>
              <FaTicketAlt className='grid fill-yellow-400 place-content-center' />
              <h1>{data?.vote_average}</h1>
              <div className='flex gap-1 ml-4 place-content-center'>
                <Flag code={flagIcon} height='42' />
                <h1>{data.original_language.toUpperCase()}</h1>
              </div>

            </div>

            {/* AQUI MAPEO EL ARRAY DE LOS IDS DE LA PELICULA, PARA ENCONTRAR EL OBJETO QUE COINCIDE CON LA PROPIEDAD ID Y SI ES ASI ACCEDE A ESA OBJETO PERO BAJA A LA PROPIEDAD NAME */}
            <div className='flex gap-2 text-gray-700'>
              {data?.genre_ids.map((ids, i) => (
                <h1 key={i}>
                  {arrayGeneros?.find((objeto) => objeto.id === ids).name}
                </h1>
              ))}
            </div>

          </div>
          <div>
            <button onClick={handleButtonClick} className='flex items-center justify-center gap-2 px-6 py-4 mt-8 font-light transition-colors bg-red-400 hover:bg-red-500 rounded-3xl'>
              Ver Trailer <FaPlay className='inline' />
            </button>
          </div>

        </div>

        <img className='absolute right-0 z-0 flex w-full h-full sm:hidden' src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt='portada' />
        <img className='absolute right-0 z-0 hidden w-full h-full sm:flex' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt='portada' />
        <div className='absolute bottom-0 z-20 flex flex-wrap items-center justify-center w-full gap-2 p-4 sm:hidden bg-white/20 backdrop-blur-sm'>
          <h1 className='w-1/3 font-semibold text-wrap text-md'>{data?.title}</h1>
          <button onClick={handleButtonClick} className='flex items-center justify-center gap-2 px-6 py-4 font-light transition-colors bg-red-400 hover:bg-red-500 rounded-3xl'>
            Ver Trailer <FaPlay className='inline' />
          </button>
        </div>

      </div>
    </Link>

  )
}
