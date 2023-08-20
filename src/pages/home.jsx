import { useState } from 'react'
import useFetch from '../services/useFetch'
import PortadaHome from '../components/portada_home'
import Loader from '../components/loader'
import Banner from '../components/banner'
import TopPoster from '../components/top_poster'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

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
        data && <PortadaHome data={data?.results[1]} />
      }
        <h1 className='mt-6 text-2xl font-bold'>Viendo ahora</h1>
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

            )).slice(1)}
          </Swiper>
        </div>
        <h1 className='mt-6 text-2xl font-bold'>Las 10 películas mas populares en Perú</h1>
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

      </section>

    )
  }
}
