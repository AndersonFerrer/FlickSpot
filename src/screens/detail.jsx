import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { FaPlay } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import useFetch from '../services/useFetch'
import Loader from '../components/loader'
import fetchMovieTrailer from '../services/fetchMovieTrailer'
import Credits from '../components/credits'
import '../App.css'

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
  const handleButtonClickTrailer = (e) => {
    e.preventDefault()
    // Realiza la redirección a YouTube o cualquier enlace externo aquí
    window.open(URLTrailer, '_blank')
  }
  const handleButtonClickWebSite = (e) => {
    e.preventDefault()
    // Realiza la redirección a YouTube o cualquier enlace externo aquí
    window.open(movieDetail.homepage, '_blank')
  }

  if (loaderHome) {
    return (
      <div className='mx-auto h-[calc(100vh-112px)] w-full max-w-[1496px] pb-[32px] flex place-content-center'>
        <Loader />
      </div>

    )
  }

  return (
    <div className='mx-auto w-full shrink-0 flex justify-between  max-w-[1496px] py-[32px]'>

      <figure className='flex w-[400px]  flex-col shrink-0'>
        <img src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} alt='poster' className='h-[600px] w-full   rounded-3xl' />
        <button onClick={handleButtonClickWebSite} className='flex items-center justify-center gap-2 px-6 py-4 my-8 text-xl font-semibold text-red-400 shadow-lg shadow-black bg-[#1d1b20] rounded-3xl'><CgWebsite className='inline ' />Sitio Web</button>
      </figure>

      <div className='w-[700px] h-[600px]'>
        <h1 className='text-[36px] text-wrap font-bold'>{movieDetail.title}</h1>
        {(video) &&
          <button onClick={handleButtonClickTrailer} className='hover:shadow-lg hover:shadow-black flex items-center justify-center gap-2 px-6 py-4 my-8 font-light bg-red-400 rounded-3xl'>
            Ver Trailer <FaPlay className='inline' />
          </button>}
        {(movieDetail.overview !== '') &&
          <h1 className='mb-6 font-semibold'>SINOPSIS</h1>}
        {(movieDetail.overview !== '') &&
          <p className='w-[4/5]  whitespace-normal text-gray-600'>{movieDetail.overview}</p>}
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
      <Credits id={id} />

    </div>
  )
}
export default Detail
