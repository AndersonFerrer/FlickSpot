/* eslint-disable space-before-function-paren */
import { useEffect } from 'react'

function fetchSearch(query, SETSTATE, STATE, SETSTATELOADER) {
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
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${STATE || query}&include_adult=false&language=es-MX&page=1`, options)
        const jsonData = await response.json()
        const searchMovies = jsonData.results
        SETSTATE(searchMovies)
      } catch (error) {
        console.log(error)
      } finally {
        SETSTATELOADER(false)
      }
    }
    fetchData()
  }, [query])
  return (
    null
  )
}

export default fetchSearch
