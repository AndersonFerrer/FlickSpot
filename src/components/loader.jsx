import React from 'react'

export default function Loader () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='relative flex w-8 h-8'>
        <span className='absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping' />
        <span className='relative inline-flex w-8 bg-blue-500 rounded-full h-38' />
      </span>
      <h1 className='mt-6'>Cargando</h1>
    </div>
  )
}
