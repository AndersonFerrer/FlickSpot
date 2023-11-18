import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProfileCredit from './profile_credit'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'
import '../styles.css'

// import required modules
import { Navigation } from 'swiper/modules'

const SliderCredit = ({ cast }) => {
  console.log(cast)
  return (
    <Swiper
      speed={500}
      spaceBetween={12}
      slidesPerGroup={2}
      slidesPerView='auto' // Espacio entre los posters
      navigation modules={[Navigation]} className='mySwiper'
      breakpoints={{
        768: { // En pantallas más grandes, muestra dos slides
          slidesPerGroup: 4, // Avanza de dos en dos en pantallas más grandes
          speed: 800
        },
        1024: { // En pantallas aún más grandes, muestra tres slides
          slidesPerGroup: 6, // Avanza de tres en tres en pantallas aún más grandes
          speed: 1000
        }
      }}
    >
      {cast?.map((cast, i) => (
        <SwiperSlide className='w-[180px]' key={i}>
          <ProfileCredit profilePath={cast.profile_path} originalName={cast.original_name} character={cast.character} job={cast.job} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderCredit
