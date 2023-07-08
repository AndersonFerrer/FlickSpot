import { BiSearchAlt } from 'react-icons/bi'
import { VscBellDot, VscTriangleDown } from 'react-icons/vsc'
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function NavBar ({ searchInp, setSearchInp }) {
  const history = useHistory()
  console.log(searchInp)
  const HandleChangeInput = (event) => {
    event.preventDefault()
    setSearchInp(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes hacer algo con el valor del input
    history.push(`/search/${searchInp}`)
  }
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event)
    }
  }
  return (
    <div className='w-full text-white bg-[#0f0f0f] shadow-lg shadow-[#0f0f0f] fixed z-50 flex  justify-center items-center h-[80px] top-0 left-0'>
      <div className='w-full max-w-[1496px] flex justify-between items-center'>
        <div className='flex items-center justify-center gap-16'>
          <h1 className='text-3xl font-bold'>FlickSpot</h1>
          <div className='text-[#656167] flex items-center justify-center gap-4'>
            <NavLink
              activeClassName='text-white font-bold' exact to='/'
            >
              <h1>Inicio</h1>
            </NavLink>
            <NavLink
              activeClassName='text-white font-bold transition-all duration-300'
              to='/peliculas'
            >
              <h1>Peliculas</h1>
            </NavLink>
            <NavLink activeClassName='text-white font-bold transition-all duration-300' exact to='/series'>
              <h1>Series</h1>
            </NavLink>
            <NavLink activeClassName='text-white font-bold transition-all duration-300' exact to='/anime'>
              <h1>Anime</h1>
            </NavLink>
          </div>
        </div>

        <div className='flex items-center justify-center gap-8'>
          <div className=' group px-2 pl-4 rounded-3xl box-border flex bg-[#232026] justify-center items-center'>
            <BiSearchAlt className='' />
            <form onSubmit={handleSubmit}>
              <input value={searchInp} onChange={HandleChangeInput} className='p-2 bg-transparent outline-none group-valid:bg-white' type='text' placeholder='Buscar...' onKeyDown={handleKeyDown} />
            </form>

          </div>
          <div className='flex items-center justify-center gap-4'>
            <VscBellDot fontSize={28} />
            <button onClick={() => console.log('abrir-menu')} className='flex items-center justify-center gap-1 font-bold'>
              <img src='https://marketing4ecommerce.net/wp-content/uploads/2019/09/nueva-portada-enero-16.jpg' className='rounded-[50%] w-[30px] h-[30px] object-cover ' alt='perfil_mark' />
              <VscTriangleDown fontSize={14} />
            </button>

          </div>
        </div>
      </div>

    </div>
  )
}
