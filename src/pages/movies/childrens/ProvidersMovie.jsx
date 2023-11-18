/* eslint-disable dot-notation */
/* eslint-disable camelcase */
import { useState } from 'react'
import useFetch from '../../../services/useFetch'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export const ProvidersMovie = () => {
  const { id } = useParams()
  const [providers, setProviders] = useState([])
  useFetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, setProviders)
  const providersPath = providers?.results?.US
  const paths = providersPath?.buy?.map(path => path) || []
  console.log(providers)
  console.log(paths)
  return (
    <div className='flex w-[300px] items-end flex-col gap-6 '>
      <h1 className='text-lg font-bold'>Plataformas</h1>
      <div className='flex flex-col gap-4 '>
        {paths?.map((path, i) => (
          <div className='flex items-center justify-end gap-2' key={i}>
            <h1 className='text-sm text-gray-700'>{path.provider_name}</h1>
            <img src={`https://image.tmdb.org/t/p/original${path.logo_path}`} alt='Provider' className='rounded-lg bg-transparent w-[50px] h-[50px]' />
          </div>

        ))}
      </div>
    </div>
  )
}
