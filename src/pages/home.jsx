import { useState, useRef } from 'react'
import useFetch from '../services/useFetch'
import PortadaMovie from '../components/portada_movie'
import PortadaSerie from '../components/portada_serie'
import Loader from '../components/loader'
import TopMovies from '../components/top_movies'
import NowPlaying from '../components/now_playing'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'
import '../styles.css'

// import required modules
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'

export default function Home () {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  const [movies, setMovies] = useState(null)
  const [series, setSeries] = useState(null)
  const [animes, setAnimes] = useState(null)
  const [loaderHome, setLoaderHome] = useState(true)
  useFetch('https://api.themoviedb.org/3/tv/popular?language=es-MX&page=1', setSeries)
  useFetch('https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1', setMovies, setLoaderHome)
  console.log(series)
  if (loaderHome) {
    return (
      <div className='mx-auto h-[calc(100vh-112px)] w-full max-w-[1496px] pb-[32px] flex place-content-center'>
        <Loader />
      </div>

    )
  } else {
    return (

      <section className='mx-auto w-full max-w-[1496px] py-[32px]'>
        <Swiper
          effect='coverflow'
          grabCursor
          centeredSlides
          slidesPerView='auto'
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          pagination
          speed={1200}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          autoplay={{ delay: 8000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          className='bg-transparent mySwiper rounded-2xl'
        >
          <SwiperSlide><PortadaMovie data={movies?.results[0]} /></SwiperSlide>
          <SwiperSlide><PortadaMovie data={movies?.results[1]} /></SwiperSlide>
          <SwiperSlide><PortadaSerie data={series?.results[0].id} /></SwiperSlide>
          <div className='autoplay-progress' slot='container-end'>
            <svg viewBox='0 0 48 48' ref={progressCircle}>
              <circle cx='24' cy='24' r='20' />
            </svg>
            <span ref={progressContent} />
          </div>
        </Swiper>
        <h1 className='mt-6 text-2xl font-bold text-white'>Viendo ahora</h1>
        <NowPlaying data={movies} />
        <h1 className='mt-6 text-2xl font-bold text-white'>Las 10 películas mas populares en Perú</h1>
        <TopMovies data={movies} />

      </section>

    )
  }
}
