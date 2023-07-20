import '../App.css'
import useFetch from '../services/useFetch'
import { useState } from 'react'
import ProfileCredit from './profile_credit'

export default function Credits ({ id }) {
  const [cast, setCast] = useState()
  useFetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`, setCast)
  console.log(cast)
  const directors = cast?.crew.map((crew) => crew).filter((crew) => crew.job === 'Director')
  const producers = cast?.crew.map((crew) => crew).filter((crew) => crew.job === 'Producer')
  const writers = cast?.crew.map((crew) => crew).filter((crew) => crew.job === 'Writer')
  const actors = cast?.cast.slice(0, 10).map((cast) => cast).filter((cast) => cast.character !== 'Additional Voices (voice)' && 'Additional Voice (voice)')
  console.log(directors)
  console.log(producers)
  console.log(writers)
  console.log(actors)
  return (
    <div className='w-[300px] h-[600px] overflow-hidden  flex flex-col gap-4 bg-contain items-start xl:items-end'>
      <h1 className='font-bold'>Actores</h1>
      {actors?.map((actors, i) => (
        <ProfileCredit profilePath={actors.profile_path} originalName={actors.original_name} job={actors.character} key={i} />
      ))}
      <h1 className='mt- 4font-bold'>Directores</h1>
      {directors?.map((directors, i) => (
        <ProfileCredit profilePath={directors.profile_path} originalName={directors.original_name} job={directors.job} key={i} />
      ))}
      <h1 className='mt-4 font-bold'>Productores</h1>
      {producers?.map((producers, i) => (
        <ProfileCredit profilePath={producers.profile_path} originalName={producers.original_name} job={producers.job} key={i} />
      ))}
      {(writers?.length > 0) && <h1 className='mt-4 font-bold'>Escritores</h1>}
      {writers?.map((writers, i) => (
        <ProfileCredit profilePath={writers.profile_path} originalName={writers.original_name} job={writers.job} key={i} />
      ))}
    </div>
  )
}
