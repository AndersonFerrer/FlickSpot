<div className='relative z-0 flex flex-wrap items-center justify-center w-full min-h-screen gap-4 py-8 text-white'>

  {data?.results.map((movies) => (
    <Link key={movies.id} to={{ pathname: `/pelicula/${movies.id}` }}>
      <Poster img={movies.poster_path} title={movies.title} popularity={movies.vote_average} />
    </Link>

  )).slice(1)}
</div>
