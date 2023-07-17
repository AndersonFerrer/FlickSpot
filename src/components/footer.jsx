import { Typography } from '@material-tailwind/react'

export default function Footer () {
  return (
    <footer className='w-full max-w-[1496px] mx-auto bg-transparent py-8 text-white'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center md:justify-between'>
        <h1 className='text-3xl font-bold'>FlickSpot</h1>
        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-semibold transition-colors hover:text-red-300 focus:text-red-300'
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-semibold transition-colors hover:text-red-300 focus:text-red-300'
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-semibold transition-colors hover:text-red-300 focus:text-red-300'
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='white'
              className='font-semibold transition-colors hover:text-red-300 focus:text-red-300'
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className='my-8 border-white-50' />
      <Typography color='white' className='text-center font-normal'>
        &copy; 2023 FlickSpot
      </Typography>
    </footer>
  )
}
