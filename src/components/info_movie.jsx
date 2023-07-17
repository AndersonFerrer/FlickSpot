import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Production from './production'

export default function InfoMovie ({ URLTrailer, movieDetail, video }) {
  const handleButtonClickTrailer = (e) => {
    e.preventDefault()
    // Realiza la redirección a YouTube o cualquier enlace externo aquí
    window.open(URLTrailer, '_blank')
  }
  return (
    <div className='w-[480px] xl:w-[700px]'>
      <h1 className='text-[36px] text-wrap font-bold'>{movieDetail.title}</h1>
      {(video) &&
        <button onClick={handleButtonClickTrailer} className='flex items-center justify-center gap-2 px-6 py-4 my-8 font-light bg-red-400 hover:shadow-lg hover:shadow-white/10 rounded-3xl'>
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
              if (language.name !== '') return language.english_name
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
      <div>
        <Production movieDetail={movieDetail} />
      </div>
    </div>
  )
}
