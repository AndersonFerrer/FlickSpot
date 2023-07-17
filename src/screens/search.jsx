import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import fetchSearch from '../services/fetchSearch'
import { useState } from 'react'
import Poster from '../components/poster'
import Loader from '../components/loader'

export default function Search ({ searchInp }) {
  const { query } = useParams()
  const [searchMovies, setSearchMovies] = useState()
  const [loaderSearch, setLoaderSearch] = useState(true)
  fetchSearch(query, setSearchMovies, searchInp, setLoaderSearch)
  console.log(searchMovies)
  if (loaderSearch) {
    return (
      <div className='mx-auto h-[calc(100vh-112px)] w-full max-w-[1496px] pb-[32px] flex place-content-center'>
        <Loader />
      </div>

    )
  } else {
    return (

      <section className='mx-auto w-full max-w-[1496px] py-[32px]'>
        <h1 className='text-2xl'>{`Se muestran resultados de busqueda para '${query}'`}</h1>
        <div className='relative z-0 flex flex-wrap items-center justify-center w-full min-h-full gap-4 py-8 text-white'>

          {searchMovies?.map((movies) => (
            <Link key={movies.id} to={{ pathname: `/pelicula/${movies.id}` }}>
              <Poster img={movies.poster_path} title={movies.title} popularity={movies.vote_average} />
            </Link>

          ))}
        </div>
      </section>

    )
  }
}
