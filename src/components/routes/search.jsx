import { useEffect, useState } from 'react';
import { FeaturedMovies } from '../movies/featuredmovies';
import { HomeMoviesComponent } from '../movies/homemovies';
import { SearchMovie } from '../utils/fetch';
import { useSearchParams } from 'react-router-dom';

export const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [params] = useSearchParams();
  const query = params.get('q');

  useEffect(() => {
    const getMovies = async () => {
      const response = await SearchMovie({ movieName: query, page: 1 });
      setMovies(response);
    };

    getMovies();
  }, [query]);

  return (
    <>
      <section className=" flex gap-8 bg-primary pt-36 px-sitex text-white pb-40 h-full">
        <article className="w-[70%]">
          <h1 className="h2 font-bold text-4xl tracking-tight">Resultados de {query}</h1>

          {/* Movies */}
          <HomeMoviesComponent movies={movies} />
        </article>

        <FeaturedMovies className={'max-w-[30%] flex flex-col gap-4'} />
      </section>
    </>
  );
};
