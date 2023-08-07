import { useState } from 'react'
import Poster from '../components/poster'
import useFetch from '../services/useFetch'
import PortadaHome from '../components/portada_home'
import Loader from '../components/loader'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/banner'
import TopPoster from '../components/top_poster'

export default function Home () {
  const [data, setData] = useState(null)
  const [rated, setRated] = useState(null)
  const [loaderHome, setLoaderHome] = useState(true)
  console.log(data)

  useFetch('https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1', setData, setLoaderHome)
  useFetch('https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1&region=PE', setRated)
  if (loaderHome) {
    return (
      <div className='mx-auto h-[calc(100vh-112px)] w-full max-w-[1496px] pb-[32px] flex place-content-center'>
        <Loader />
      </div>

    )
  } else {
    return (

      <section className='mx-auto w-full max-w-[1496px] py-[32px]'>
        {
        data && <PortadaHome data={data?.results[0]} />
      }
        <h1 className='text-2xl font-bold mt-6'>Viendo ahora</h1>
        <div className='mb-12 h-auto  z-0 flex overflow-x-scroll snap-start justify-start items-center gap-6 w-full py-8 text-white'>
          {data?.results.map((movies) => (
            <Link className='w-[246px] sm:w-[355.6px]' key={movies.id} to={{ pathname: `/pelicula/${movies.id}` }}>
              <Banner movies={movies} />
            </Link>
          )).slice(1)}
        </div>
        <h1 className='text-2xl font-bold mt-6'>Las 10 películas mas populares en Perú</h1>
        <div className='mb-12 h-auto  z-0 flex overflow-x-scroll snap-start justify-start items-center gap-6 w-full py-8 text-white'>
          {rated?.results.map((movies, i) => (
            <Link className='w-[246px] sm:w-[355.6px]' key={movies.id} to={{ pathname: `/pelicula/${movies.id}` }}>
              <TopPoster i={i + 1} movies={movies} />
            </Link>
          ))}
        </div>
      </section>

    )
  }
}
