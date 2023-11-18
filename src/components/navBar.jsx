import { VscBellDot, VscTriangleDown } from 'react-icons/vsc'
import { NavLink, useHistory, Link, useLocation } from 'react-router-dom'

export default function NavBar ({ searchInp, setSearchInp }) {
  const { pathname } = useLocation()
  const history = useHistory()
  const HandleChangeInput = (event) => {
    event.preventDefault()
    setSearchInp(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    history.push(`/search/${searchInp}`)
  }
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event)
    }
  }
  return (
    <header className='w-full px-6 h-[100px] lg:h-[80px]  text-white py-2 bg-[#0f0f0f] fixed z-50 flex  justify-center items-center  lg:top-0 left-0 top-0'>
      <div className='w-full max-w-[1496px]  gap-y-2 flex flex-col lg:flex-row   justify-between items-center'>
        <div className='flex items-center justify-center gap-16 text-white '>
          <Link to='/'>
            <h1 className='text-3xl font-bold'>FlickSpot</h1>
          </Link>
          <nav className='text-[#656167] hidden sm:flex items-center justify-center gap-4'>
            <NavLink
              activeClassName='text-white  font-bold transition-all duration-300' exact to='/'
            >
              <h1>Inicio</h1>
            </NavLink>
            <NavLink
              activeClassName='text-white  font-bold transition-all duration-300'
              to='/peliculas' className={(pathname.includes('/pelicula')) ? 'text-white  font-bold transition-all duration-300' : ''}
            >
              <h1>Peliculas</h1>
            </NavLink>
            <NavLink activeClassName='text-white  font-bold transition-all duration-300' exact to='/series' className={(pathname.includes('/serie')) ? 'text-white  font-bold transition-all duration-300' : ''}>
              <h1>Series</h1>
            </NavLink>
            <NavLink className={(pathname.includes('/anime')) ? 'text-white  font-bold transition-all duration-300' : ''} activeClassName='text-white font-bold transition-all duration-300' exact to='/anime'>
              <h1>Anime</h1>
            </NavLink>
          </nav>
        </div>

        <div className='flex items-center justify-center gap-8'>

          <form onSubmit={handleSubmit}>
            <div className='relative'>
              <input value={searchInp} onKeyDown={handleKeyDown} onChange={HandleChangeInput} type='text' className='block w-full h-10 pl-4 pr-16 py-3 rounded-3xl bg-[#232026] outline-none shadow-lg shadow-black' placeholder='Buscar...' required />
              <button type='submit' className='absolute grid h-8 px-4 text-sm font-medium text-white transition-colors bg-red-400 right-2 bottom-1 hover:bg-red-500 focus:outline-none rounded-3xl place-content-center'>
                <svg className='w-4 h-4 text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                </svg>
              </button>
            </div>
          </form>

          <div className='flex items-center justify-center gap-4'>
            <VscBellDot fontSize={28} />
            <button onClick={() => console.log('abrir-menu')} className='flex items-center justify-center gap-1 font-bold'>
              <img src='https://marketing4ecommerce.net/wp-content/uploads/2019/09/nueva-portada-enero-16.jpg' className='rounded-[50%] w-[30px] h-[30px] object-cover ' alt='perfil_mark' />
              <VscTriangleDown fontSize={14} />
            </button>

          </div>
        </div>
      </div>

    </header>
  )
}
