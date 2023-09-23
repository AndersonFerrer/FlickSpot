import React, { useState } from 'react'

export default function SwitchDarkMode ({ setDarkMode, darkMode }) {
  const [valueCheck, setValueCheck] = useState(() => {
    if (darkMode === 'dark') {
      return true
    } else {
      return false
    }
  })
  console.log(valueCheck)
  const handleChecked = () => {
    if (valueCheck === true) {
      setDarkMode('light')
      setValueCheck(false)
    } else {
      setDarkMode('dark')
      setValueCheck(true)
    }
  }
  return (
    <>
      <button onClick={handleChecked} className='px-4 py-2 font-bold'>Dark Theme</button>
    </>
  )
}
