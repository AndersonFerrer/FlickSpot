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

function App () {
  const [searchInp, setSearchInp] = useState()
  return (
    <>
      <div className='w-full min-h-full bg-[#0f0f0f] mt-[80px] px-[24px] text-white'>

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
        <Route path='/detalle/:id'>
          <Detail />
        </Route>
        <Route path='/search/:query'>
          <Search setSearchInp={setSearchInp} searchInp={searchInp} />
        </Route>

      </div>
    </>
  )
}
export default App
