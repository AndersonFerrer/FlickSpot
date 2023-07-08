import React from 'react'

export default function Loader () {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span class='relative flex h-8 w-8'>
        <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75' />
        <span class='relative inline-flex rounded-full h-38 w-8 bg-blue-500' />
      </span>
      <h1 className='mt-6'>Cargando</h1>
    </div>
  )
}
