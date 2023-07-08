import { useState } from 'react'
import Poster from '../components/poster'
import useFetch from '../services/useFetch'
import PortadaHome from '../components/portada_home'
import Loader from '../components/loader'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Home () {
  const [data, setData] = useState(null)
  const [loaderHome, setLoaderHome] = useState(true)
  console.log(data)

  useFetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', setData, setLoaderHome)
  if (loaderHome) {
    return (
      <div className='mx-auto h-[calc(100vh-112px)] w-full max-w-[1496px] pb-[32px] flex place-content-center'>
        <Loader />
      </div>

    )
  } else {
    return (

      <div className='mx-auto w-full max-w-[1496px] py-[32px]'>
        {
        data && <PortadaHome data={data?.results[0]} />
      }
        <div className='relative z-0 flex flex-wrap items-center justify-center w-full min-h-screen gap-4 py-8 text-white'>

          {data?.results.map((movies) => (
            <Link key={movies.id} to={{ pathname: `/detalle/${movies.id}` }}>
              <Poster img={movies.poster_path} title={movies.title} popularity={movies.vote_average} />
            </Link>

          ))}
        </div>
      </div>

    )
  }
}
