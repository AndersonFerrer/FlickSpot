import React from 'react'

export default function ProfileCredit ({ profilePath, originalName, job, character }) {
  return (
    <div className='flex flex-col items-start justify-start gap-2'>
      {(profilePath === null) ? <img src='https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' className='w-[100px] h-[100px] rounded-2xl object-cover' alt='foto' /> : <img src={`https://image.tmdb.org/t/p/original${profilePath}`} className='w-[100px] h-[100px] rounded-2xl object-cover' alt='foto' />}
      <div className='flex flex-col items-start justify-start'>
        <h1 className='text-md'>{originalName}</h1>
        {character ? <p className='text-gray-700 text-md text-start'>{character}</p> : <p className='text-gray-700 text-md text-start'>{(job === 'Producer') ? 'Productor' : (job === 'Writer') ? 'Escritor' : 'Director'}</p>}
      </div>
    </div>
  )
}
