/* eslint-disable react/jsx-closing-tag-location */
import '../App.css'
import useFetch from '../services/useFetch'
import { useState } from 'react'
import SliderCredit from './SliderCredit'

export default function Credits ({ id }) {
  const [cast, setCast] = useState()
  useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`, setCast)
  if (!cast) {
    return null
  }
  const directors = cast?.crew.map((crew) => crew).filter((crew) => crew.job === 'Director')
  const producers = cast?.crew.map((crew) => crew).filter((crew) => crew.job === 'Producer')
  const writers = cast?.crew.map((crew) => crew).filter((crew) => crew.job === 'Writer')
  const actors = cast?.cast.slice(0, 10).map((cast) => cast).filter((cast) => cast.character !== 'Additional Voices (voice)' && 'Additional Voice (voice)')
  const teamProducer = [...directors, ...producers, ...writers]
  console.log(directors)
  console.log(teamProducer)
  return (
    <div className='w-full overflow-hidden bg-contain'>

      <h1 className='mb-6 text-2xl font-bold '>Actores</h1>
      <SliderCredit cast={actors} />
      <h1 className='mt-8 mb-6 text-2xl font-bold'>Equipo de Producción</h1>
      <SliderCredit cast={teamProducer} />

    </div>
  )
}
