import './App.css'
import Home from './pages/home'
import NavBar from './components/navBar'
import './index.css'
import { Route } from 'react-router-dom'
import Anime from './pages/anime'
import Series from './pages/series'
import Movies from './pages/movies'
import Detail from './screens/detail'
import Search from './screens/search'
import { useState } from 'react'
import Footer from './components/footer'
import ScrollTop from './components/scrollTop'

function App () {
  const [searchInp, setSearchInp] = useState()
  return (
    <>
      <div className='w-full pb-[240px] min-h-[calc(100vh-100px)] relative lg:min-h-[calc(100vh-80px)]  mt-[100px] lg:mt-20 px-[24px] text-white'>
        <ScrollTop />
        <Route path='/'>
          <NavBar searchInp={searchInp} setSearchInp={setSearchInp} />
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
