import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { FaPlay } from 'react-icons/fa'
import useFetch from '../services/useFetch'
import Loader from '../components/loader'
import fetchMovieTrailer from '../services/fetchMovieTrailer'

function Detail () {
  const { id } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [video, setVideo] = useState(null)
  const [loaderHome, setLoaderHome] = useState(true)
  useFetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, setMovieDetail, setLoaderHome)
  fetchMovieTrailer(id, setVideo)
  console.log(movieDetail)
  console.log(video)
  const URLTrailer = `https://www.youtube.com/watch?v=${video}`
  const handleButtonClick = (event) => {
    event.preventDefault()
    // Realiza la redirección a YouTube o cualquier enlace externo aquí
    window.open(URLTrailer, '_blank')
  }
  if (loaderHome) {
    return (
      <div className='mx-auto h-[calc(100vh-112px)] w-full max-w-[1496px] pb-[32px] flex place-content-center'>
        <Loader />
      </div>

    )
  }

  return (
    <div className='mx-auto w-full flex gap-16 max-w-[1496px] py-[32px]'>

      <img src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} alt='poster' className='h-[600px] rounded-3xl' />
      <div className='w-full h-[600px]'>
        <h1 className='text-[36px] font-bold'>{movieDetail.title}</h1>
        {(video) &&
          <button onClick={handleButtonClick} className='flex items-center justify-center gap-2 px-6 py-4 my-8 font-light bg-red-400 rounded-3xl'>
            Ver Trailer <FaPlay className='inline' />
          </button>}
        {(movieDetail.overview !== '') &&
          <h1 className='mb-6 font-semibold'>SINOPSIS</h1>}
        {(movieDetail.overview !== '') &&
          <p className='w-3/5 text-gray-600'>{movieDetail.overview}</p>}
        <table className='mt-6'>
          <tbody>
            <tr>
              <td className='pb-2 pr-6 text-gray-700'>Calificación</td>
              <td className='pb-2 pr-6'>{movieDetail.vote_average.toFixed(1)}</td>
            </tr>
            <tr>
              <td className='pb-2 pr-6 text-gray-700'>Lanzamiento</td>
              <td className='pb-2 pr-6'>{movieDetail.release_date}</td>
            </tr>
            <tr>
              <td className='pb-2 pr-6 text-gray-700'>Géneros</td>
              <td className='pb-2 pr-6'>{movieDetail.genres.map((generos) => generos.name).join(', ')}</td>
            </tr>
            <tr>
              <td className='pb-2 pr-6 text-gray-700'>Países</td>
              <td className='pb-2 pr-6'>{movieDetail.production_countries.map((productionCountrie) => productionCountrie.name).join(', ')}</td>
            </tr>
            <tr>
              <td className='pb-2 pr-6 text-gray-700'>Lenguajes</td>
              <td className='pb-2 pr-6'>{movieDetail.spoken_languages.map((language) => {
                if (language.name !== '') return language.name
                else return null
              }).filter(valor => valor !== null).join(', ')}
              </td>
            </tr>
            <tr>
              <td className='pb-2 pr-6 text-gray-700'>Duración</td>
              <td className='pb-2 pr-6'>{`${Math.floor(movieDetail.runtime / 60)}h ${(movieDetail.runtime) % 60}m`}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}
export default Detail
