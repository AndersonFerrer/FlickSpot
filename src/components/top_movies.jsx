import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import TopPoster from './top_poster'
import useFetch from '../services/useFetch'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'
import '../styles.css'

// import required modules
import { Navigation } from 'swiper/modules'

export default function TopMovies ({ data }) {
  const [rated, setRated] = useState(null)
  useFetch('https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1&region=PE', setRated)
  return (
    <>
      <div className='flex items-center w-full h-auto py-8 mb-12 text-white'>
        <Swiper
          slidesPerGroup={1}
          slidesPerView='auto'
          spaceBetween={24} // Espacio entre los posters
          navigation modules={[Navigation]} className='mySwiper'
          breakpoints={{
            768: { // En pantallas más grandes, muestra dos slides
              slidesPerGroup: 2, // Avanza de dos en dos en pantallas más grandes
              speed: 500
            },
            1024: { // En pantallas aún más grandes, muestra tres slides
              slidesPerGroup: 3, // Avanza de tres en tres en pantallas aún más grandes
              speed: 800
            }
          }}
        >
          {rated?.results.slice(0, 10).map((movies, i) => (

            <SwiperSlide key={movies.id} className={(i + 1 === 10) ? 'h-[204px] w-[403px] sm:h-[240px]' : 'h-[204px] w-[322px] sm:h-[240px]'}>
              <TopPoster number={i + 1} movies={movies} />
            </SwiperSlide>

          ))}

        </Swiper>
      </div>
    </>
  )
}
