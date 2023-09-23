/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import useFetch from '../services/useFetch'
import { FaPlay } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import fetchSerieTrailer from '../services/fetchSerieTrailer'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import '../App.css'

export default function PortadaSerie ({ data }) {
  const [video, setVideo] = useState(null)
  const [serie, setSerie] = useState(null)
  const [runtime, setRuntime] = useState()
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzE1MThmNzdlN2EyNTI0Y2UzOWRlNWEzNmNjNWRlNCIsInN1YiI6IjY0OGZiZDFlMGYwZGE1MDBjNWY1YTFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNAoLe3pjJajQ-q3VZGKy8Jy9Md1OwfavsjJUtPO_ZA'
    }
  }
  useFetch(`https://api.themoviedb.org/3/tv/${data}?language=es-MX`, setSerie)
  fetch(`https://api.themoviedb.org/3/tv/${data}?language=es-MX`, options)
    .then(res => res.json())
    .then(date => {
      const { episode_run_time } = date
      setRuntime(episode_run_time[0])
    })
    .catch(error => {
      console.error(error)
    })
  console.log(serie)
  fetchSerieTrailer(data, setVideo)
  const handleButtonClick = (event) => {
    event.preventDefault()
    // Realiza la redirección a YouTube o cualquier enlace externo aquí
    window.open(URLTrailer, '_blank')
  }
  console.log(video)
  const genreNames = serie?.genres.map(ids => ids.name)
  console.log(genreNames)
  const URLTrailer = `https://www.youtube.com/watch?v=${video}`
  return (

      <div className='overflow-hidden w-full flex relative h-[560px] rounded-2xl  shadow-xl shadow-black'>
        <div className='absolute left-0 z-10 items-start justify-center hidden w-3/5 h-full p-16 pr-24 md:w-4/5 bg-gradient-to-r from-black/60 via-black/50 to-transparent md:flex-col md:flex '>
          <h1 className='text-[36px] lg:text-[48px]  font-bold mb-4'>{serie?.name}</h1>
          <div>
            <div className='flex items-center justify-start gap-2 text-lg font-bold'>
              <h1 className='flex items-center justify-center gap-2 px-3 py-2 bg-red-400 rounded-3xl'><AiFillStar color='yellow' />{serie?.vote_average}</h1>
              <h1>{serie?.first_air_date.slice(0, 4)} -</h1>

              <h1>{`${Math.floor(runtime / 60)}h ${(runtime) % 60}m`}</h1>
              <div className='flex gap-2 text-white' />
            </div>
          </div>
          <h1 className='my-3 text-lg font-bold '>{genreNames?.join(' | ')}</h1>
          <p>{serie?.overview}</p>
          <div>
            {video && <button onClick={handleButtonClick} className='flex items-center justify-center gap-2 px-6 py-4 mt-8 font-light transition-all duration-500 bg-red-400 shadow-lg hover:shadow-black/60 shadow-black hover:bg-red-500 rounded-3xl'>
              Ver Trailer <FaPlay className='inline' />
                      </button>}
          </div>
        </div>
        <img className='absolute right-0 z-0 flex w-full h-full bg-center md:hidden' src={`https://image.tmdb.org/t/p/original${serie?.poster_path}`} alt='portada' />
        <img className='absolute right-0 z-0 hidden object-cover w-full h-full md:flex' src={`https://image.tmdb.org/t/p/original${serie?.backdrop_path}`} alt='portada' />
        <div className='absolute bottom-0 z-20 flex flex-wrap items-center justify-center w-full gap-2 p-4 md:hidden bg-black/20 backdrop-blur-sm'>
          <h1 className='w-1/3 font-semibold text-center text-wrap text-md'>{serie?.name}</h1>
     {
            video && <button onClick={handleButtonClick} className='flex items-center justify-center gap-2 px-6 py-4 font-light transition-colors bg-red-400 hover:bg-red-500 rounded-3xl'>
              Ver Trailer <FaPlay className='inline' />
                     </button>
          }
        </div>
      </div>

  )
}
