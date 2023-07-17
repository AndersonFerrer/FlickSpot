import React from 'react'

export default function Production ({ movieDetail }) {
  console.log(movieDetail)
  return (
    <div className='flex flex-wrap items-center justify-start w-full gap-4 pt-2 mt-4 cursor-pointer'>
      {movieDetail.production_companies.map((production, i) => (
        <div key={i} className='flex h-[44px] items-center justify-center gap-2 border-red-400 border-2 rounded-lg px-2'>
          {(production.logo_path !== null) && <img src={`https://image.tmdb.org/t/p/original${production.logo_path}`} alt={production.name} className='w-[50px] invert rounded-xl h-[40px] p-[2px] object-contain' />}
          <h1>{production.name}</h1>
        </div>
      ))}
    </div>
  )
}
