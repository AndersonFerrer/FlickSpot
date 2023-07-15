import React from 'react'

export default function ProfileCredit ({ profilePath, originalName, job }) {
  return (
    <div className='flex flex-row-reverse items-center justify-center gap-2'>
      {(profilePath === null) && <img src='https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg' className='w-[45px] h-[45px] rounded-full object-cover' alt='foto' />}
      {(profilePath !== null) && <img src={`https://image.tmdb.org/t/p/original${profilePath}`} className='w-[45px] h-[45px] rounded-full object-cover' alt='foto' />}
      <div className='flex flex-col items-end justify-center'>
        <h1 className='text-sm'>{originalName}</h1>
        <p className='text-sm text-end text-gray-700'>{job}</p>
      </div>
    </div>
  )
}
