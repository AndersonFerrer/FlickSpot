import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { CgWebsite } from 'react-icons/cg'
import useFetch from '../services/useFetch'
import Loader from '../components/loader'
import fetchMovieTrailer from '../services/fetchMovieTrailer'
import Credits from '../components/credits'
import '../App.css'
import InfoMovie from '../components/info_movie'
import ScrollTop from '../components/scrollTop'
import GaleryMovie from '../pages/movies/childrens/GaleryMovie'
import { ProvidersMovie } from '../pages/movies/childrens/ProvidersMovie'

function Detail () {
  const { id } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [video, setVideo] = useState(null)
  const [loaderHome, setLoaderHome] = useState(true)

  useFetch(
    `https://api.themoviedb.org/3/movie/${id}?language=es-MX`,
    setMovieDetail,
    setLoaderHome
  )

  fetchMovieTrailer(id, setVideo)

  const URLTrailer = `https://www.youtube.com/watch?v=${video}`
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
    <section className='mx-auto w-full max-w-[1496px] py-[32px]'>
      <ScrollTop />
      <div className='flex flex-wrap justify-between mx-auto w-full max-w-[1496px] pb-[32px] gap-0 lg:gap-6 shrink-0'>
        <figure className='flex  overflow-hidden w-[300px] lg:w-[400px]  flex-col shrink-0'>
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt='poster'
            className='aspect-[2/3]  rounded-3xl'
          />
          {movieDetail.homepage !== '' && (
            <button
              onClick={handleButtonClickWebSite}
              className='flex items-center justify-center gap-2 px-6 py-4 my-8 text-xl font-semibold text-red-400 shadow-lg shadow-black bg-[#1d1b20] rounded-3xl'
            >
              <CgWebsite className='inline ' />
              Sitio Web
            </button>
          )}
        </figure>

        <InfoMovie
          movieDetail={movieDetail}
          video={video}
          URLTrailer={URLTrailer}
        />
        <ProvidersMovie movie_id={id} />

      </div>
      <GaleryMovie movie_id={id} />
      <Credits id={id} />
    </section>
  )
}
export default Detail
