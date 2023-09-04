import { useLocation } from 'react-router-dom';
import { HeaderMoviesOptions } from './homemoviesheader';
import { MoviesCard } from './moviesCard';

export const HomeMoviesComponent = ({ movies }) => {
  const location = useLocation();

  let showHeaderMoviesOptions = true;
  if (location.pathname !== '/') {
    showHeaderMoviesOptions = false;
  }

  return (
    <>
      {/* Peliculas */}
      <div className="mt-10">
        {showHeaderMoviesOptions ? <HeaderMoviesOptions /> : null}

        {/* Movies  */}
        <div
          className="grid gap-4 mt-8"
          style={{ gridTemplateColumns: 'repeat( auto-fill, minmax(160px, 1fr) )' }}
        >
          {movies.map((movie) => {
            return (
              <MoviesCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                overview={movie.overview}
                genre_ids={movie.genre_ids}
                id={movie.id}
                key={movie.id}
                onClick={() => {
                  window.scroll({ top: 0 });
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
