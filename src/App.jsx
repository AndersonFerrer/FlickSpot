import './App.css'
import Home from './screens/home'
import NavBar from './components/navBar'
import './index.css'
import { Route } from 'react-router-dom'
import { useState } from 'react'
import Series from './pages/series/series'
import Movies from './pages/movies/movies'
import Anime from './pages/anime/anime'
import Detail from './screens/detail'
import Search from './screens/search'
import Footer from './components/footer'

function App () {
  const [searchInp, setSearchInp] = useState()

  /* -----------------------MODO OSCURO--------------- */
  /*  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia('(prefers-colors-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  console.log(darkMode)
  useEffect(() => {
    if (darkMode === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [darkMode]) */
  /* -----------------------MODO OSCURO------------- */

  return (
    <>
      <div className='w-full pb-[240px] min-h-[calc(100vh-100px)] relative lg:min-h-[calc(100vh-80px)]  mt-[100px] lg:mt-20 px-[24px] text-white'>

        <Route path='/'>
          <NavBar searchInp={searchInp} setSearchInp={setSearchInp} /> {/* IMPLEMENTAR ESTADOS DEL MODO OSCURO */}
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/series'>
          <Series />
        </Route>
        <Route exact path='/peliculas'>
          <Movies />
        </Route>
        <Route exact path='/anime'>
          <Anime />
        </Route>
        <Route path='/pelicula/:id'>
          <Detail />
        </Route>
        <Route path='/search/:query'>
          <Search setSearchInp={setSearchInp} searchInp={searchInp} />
        </Route>
        <Route path='/'>
          <Footer />
        </Route>
      </div>
    </>
  )
}
export default App
