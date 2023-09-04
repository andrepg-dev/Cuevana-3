import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FeaturedMovies } from '../movies/featuredmovies';
import { HomeMoviesComponent } from '../movies/homemovies';
import { PaginationButton } from '../utils/buttons';
import { MoviesGenre } from '../utils/fetch';
import { GetGenreSelected } from '../utils/getGenreSelected';
import { useNavigate } from 'react-router-dom';

export const GenreMovie = () => {
  const { genreID, page } = useParams();
  const genreParamID = parseInt(genreID);
  const currentPage = parseInt(page);

  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenreMovies = async () => {
      const response = await MoviesGenre({ genreID: genreParamID, page: currentPage });
      setMovies(response);
    };

    fetchGenreMovies();
  }, [currentPage, genreParamID]);

  // Pagination
  const IncrementPage = () => {
    window.scrollTo(0, 0);
    const nextPage = currentPage + 1;
    navigate(`/generos/${genreID}/page/${nextPage}`);
  };

  const DecrementPage = () => {
    window.scrollTo(0, 0);
    const prevPage = currentPage - 1;
    navigate(`/generos/${genreID}/page/${prevPage}`);
  };

  return (
    <>
      <section className=" flex gap-8 bg-primary pt-36 px-sitex text-gray-400 pb-32">
        <article className="w-[70%]">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Películas de <GetGenreSelected GenreID={genreParamID} />
          </h1>

          {/* Movies */}
          <HomeMoviesComponent movies={movies} />

          <div className="w-full flex justify-center mt-12">
            <PaginationButton
              currentPage={currentPage}
              leftOnClick={DecrementPage}
              rigthOnClick={IncrementPage}
            />
          </div>
        </article>

        <FeaturedMovies className={'max-w-[30%] flex flex-col gap-4'} />
      </section>
    </>
  );
};
