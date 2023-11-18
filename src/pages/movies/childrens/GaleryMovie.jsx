/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable camelcase */
import useFetch from '../../../services/useFetch'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

// import required modules
import { Navigation } from 'swiper/modules'

const GaleryMovie = ({ movie_id }) => {
  const [videos, setVideos] = useState([])
  useFetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=es-MX`, setVideos)
  const keysYT = videos?.results?.map(video => video.key) || []
  console.log(keysYT)
  return (
    <>{
      keysYT.length > 1 ? <>
        <h1 className='mb-6 text-2xl font-bold xl:mt-0'>Galería de Vídeos</h1>
        <div className='flex mb-8'>
          <Swiper
            speed={500}
            spaceBetween={32}
            slidesPerGroup={1}
            slidesPerView='auto' // Espacio entre los posters
            navigation modules={[Navigation]} className='mySwiper'
            breakpoints={{
              768: { // En pantallas más grandes, muestra dos slides
                slidesPerGroup: 2, // Avanza de dos en dos en pantallas más grandes
                speed: 800
              },
              1024: { // En pantallas aún más grandes, muestra tres slides
                slidesPerGroup: 3, // Avanza de tres en tres en pantallas aún más grandes
                speed: 1000
              }
            }}
          >
            {keysYT?.map((url, i) => (
              <SwiperSlide className='w-[315px]' key={i}>
                <iframe className='aspect-video w-[315px]' src={`https://www.youtube.com/embed/${url}`} title='YouTube video player' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </> : null
    }
    </>

  )
}

export default GaleryMovie
