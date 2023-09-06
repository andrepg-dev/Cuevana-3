import { PaginationButton } from '../utils/buttons';
import { FeaturedMovies } from './featuredmovies';
import { HomeMoviesComponent } from './homemovies';
import { useEffect, useState } from 'react';
import { MoviesFetch } from '../utils/fetch';
import { useParams, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const { page } = useParams();
  const currentPage = parseInt(page);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MoviesFetch({ page: currentPage });
      setMovies(response);
    };

    fetchMovies();
  }, [currentPage]);

  const IncrementPage = () => {
    // Subir el scroll al top cuando se cambia de página
    window.scrollTo(0, 0);
    const nextPage = currentPage + 1;
    navigate(`/peliculas/${nextPage}`);
  };

  const DecrementPage = () => {
    // Subir el scroll al top cuando se cambia de página
    window.scrollTo(0, 0);
    const prevPage = currentPage - 1;
    navigate(`/peliculas/${prevPage}`);
  };

  return (
    <>
      <section className=" flex gap-8 bg-primary pt-36 lg:px-sitex px-20 text-gray-400">
        <article className="w-[100%] lg:w-[70%]">
          <h1 className="h2 font-bold text-4xl text-white">Últimas películas publicadas</h1>

          {/* Movies */}
          <HomeMoviesComponent movies={movies} />

          <footer>
            <div className="flex justify-center mt-8">
              <PaginationButton
                currentPage={currentPage}
                leftOnClick={DecrementPage}
                rigthOnClick={IncrementPage}
              />
            </div>
          </footer>
        </article>

        <FeaturedMovies className={'lg:max-w-[30%] lg:flex hidden flex-col gap-4 '} />
      </section>
    </>
  );
};
