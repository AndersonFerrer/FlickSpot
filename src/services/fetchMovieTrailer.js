import { useEffect } from 'react'

function fetchMovieTrailer (id, setSTATE) {
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
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-ES`, options)
        const jsonData = await response.json()
        const trailers = jsonData.results.filter((video) => video.type === 'Trailer')
        setSTATE(trailers[0].key)
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

export default fetchMovieTrailer
