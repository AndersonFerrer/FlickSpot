import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { CgWebsite } from 'react-icons/cg'
import useFetch from '../services/useFetch'
import Loader from '../components/loader'
import fetchMovieTrailer from '../services/fetchMovieTrailer'
import Credits from '../components/credits'
import '../App.css'
import InfoMovie from '../components/info_movie'

function Detail () {
  const { id } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [video, setVideo] = useState(null)
  const [loaderHome, setLoaderHome] = useState(true)
  useFetch(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, setMovieDetail, setLoaderHome)
  fetchMovieTrailer(id, setVideo)
  console.log(movieDetail)
  console.log(video)
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
    <section className='mx-auto w-full shrink-0 flex flex-wrap gap-4  justify-between  max-w-[1496px] py-[32px]'>

      <figure className='flex rounded-3xl overflow-hidden w-[300px] lg:w-[400px]  flex-col shrink-0'>
        <img src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} alt='poster' className='aspect-[2/3]  ' />
        {(movieDetail.homepage !== '') && <button onClick={handleButtonClickWebSite} className='flex items-center justify-center gap-2 px-6 py-4 my-8 text-xl font-semibold text-red-400 shadow-lg shadow-black bg-[#1d1b20] rounded-3xl'><CgWebsite className='inline ' />Sitio Web</button>}
      </figure>

      <InfoMovie movieDetail={movieDetail} video={video} URLTrailer={URLTrailer} />
      <Credits id={id} />

    </section>
  )
}
export default Detail
