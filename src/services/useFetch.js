import { useEffect } from 'react'

function useFetch (URL, STATE, STATELOADER = null) {
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzE1MThmNzdlN2EyNTI0Y2UzOWRlNWEzNmNjNWRlNCIsInN1YiI6IjY0OGZiZDFlMGYwZGE1MDBjNWY1YTFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNAoLe3pjJajQ-q3VZGKy8Jy9Md1OwfavsjJUtPO_ZA'
      }
    }
    const fetchData = async () => {
      try {
        const response = await fetch(URL, options)
        const jsonData = await response.json()
        STATE(jsonData)
        if (STATELOADER !== null) {
          setTimeout(() => {
            STATELOADER(false)
          }, 300)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    null
  )
}

export default useFetch
