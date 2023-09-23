import React from 'react'
import Banner from './banner'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'
import '../styles.css'

// import required modules
import { Navigation } from 'swiper/modules'

export default function NowPlaying ({ data }) {
  return (

    <div className='flex items-center w-full h-auto py-8 mb-12 text-white'>
      <Swiper
        slidesPerGroup={1}
        speed={500}
        slidesPerView='auto'
        spaceBetween={24} // Espacio entre los posters
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
        {data?.results.map((movies) => (

          <SwiperSlide key={movies.id} className='w-[246px] sm:w-[355.6px]'>
            <Banner movies={movies} />
          </SwiperSlide>

        )).slice(2)}
      </Swiper>
    </div>

  )
}
