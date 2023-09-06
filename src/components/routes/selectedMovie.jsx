import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  DownloadIcon,
  FacebookIcon,
  MexicoFlag,
  PlayIconFilled,
  SpainFlag,
  TwitterIcon,
  UnitedStates,
} from '../icons/icons';
import { FeaturedMovies } from '../movies/featuredmovies';
import { SelectedMoviesLanguage } from '../movies/selectedMoviesLanguage';
import { FindMovieById, MovieRecomendationsById } from '../utils/fetch';
import { HomeMoviesComponent } from '../movies/homemovies';

const IconsWidth = 'w-4 h-4';

const OPTIONS = [
  { language: 'Español Latino', svgIcon: <MexicoFlag className={IconsWidth} /> },
  { language: 'Español', svgIcon: <SpainFlag className={IconsWidth} /> },
  { language: 'Subtitulado', svgIcon: <UnitedStates className={IconsWidth} /> },
  {
    language: 'Descargar',
    svgIcon: <DownloadIcon className={IconsWidth} />,
    ArrowDownIconBol: false,
  },
];

export const SelectedMovie = () => {
  const { id } = useParams();
  const [movie, setMovieSelected] = useState({});
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    const findMovieById = async () => {
      const response = await FindMovieById({ movieID: id });
      setMovieSelected(response);
    };

    findMovieById();
  }, [id]);

  useEffect(() => {
    const movieRecomendationsById = () => {
      const response = MovieRecomendationsById({ movieID: id, page: 1 });
      response.then((res) => {
        setRecomendations(res.results);
      });
    };

    movieRecomendationsById();
  }, [id]);

  const minutes = movie.runtime % 60;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const date = movie.release_date;

  return (
    <>
      <div
        className=" h-full w-full absolute"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
          boxShadow: '0px 0px 500px 200px #080f28 inset, 0px 15px 100px 1px #080F28 inset',
          backgroundSize: 'cover',
        }}
      ></div>
      
      <article
        className="relative flex gap-8 pt-32 px-20 lg:px-sitex min-h-screen h-full text-white z-10"
        // add bottom shadow
      >
        {/* Container */}
        <div className="w-full relative">
          {/* Video details */}
          <header className="flex gap-8">
            {/* image poster */}
            <div className="w-[200px] h-[300px]">
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={`Poster image from ${movie.title}`}
                className="w-full h-full object-cover rounded min-w-[200px]"
              />
            </div>

            {/* Movies Details */}
            <section className="flex flex-col gap-6 w-full">
              <header className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                <span className="text-gray-400">{movie.original_title}</span>
              </header>

              <section className="w-full  flex justify-between h-10 ">
                <div className="flex gap-6">
                  {/* Porcent bar */}
                  <span className="w-10 h-full border-2 text-sm text-yellow-400 border-yellow-400 rounded-full flex items-center justify-center">
                    {Math.round(movie.vote_average * 10)}%
                  </span>

                  <div className="h-full w-[1px] bg-gray-600"></div>

                  <div className="text-sm text-gray-400 flex h-full items-center">
                    <span>
                      {Math.floor(movie.runtime / 60)}h {formattedMinutes} min
                    </span>
                    <span className="ml-2">{date}</span>
                  </div>

                  <span className="flex items-center text-gray-400 text-sm"></span>
                </div>
                {/* Shared */}
                <div className="flex items-center gap-1 text-sm">
                  <span className="mr-3">Compartir</span>

                  <span className="flex items-center justify-center w-10 h-full rounded-full bg-[#2049bb] cursor-pointer hover:brightness-75">
                    <FacebookIcon className={'w-3'} />
                  </span>

                  <span className="flex items-center justify-center w-10 h-full rounded-full bg-white cursor-pointer hover:brightness-75">
                    <TwitterIcon className={'w-4 fill-[#2049bb]'} />
                  </span>
                </div>
              </section>

              {/* Overview */}
              <p className="text-gray-300 max-h-[120px] overflow-auto">{movie.overview}</p>

              {/* genre */}
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <div className="flex gap-2">
                  <span>Género:</span>
                  <span className="text-white">
                    {movie.genres?.map((genre, index) => {
                      return (
                        <span key={genre.id}>
                          <Link className="hover:text-skyblue" to={`/generos/${genre.id}/page/1`}>
                            {genre.name}
                          </Link>

                          {index !== movie.genres.length - 1 && ', '}
                        </span>
                      );
                    })}
                  </span>
                </div>

                <div className="flex gap-2 ">
                  <span>Compañias:</span>
                  <span className="text-white">
                    {movie.production_companies?.map((companies, index) => {
                      const { name, id } = companies;
                      return (
                        <React.Fragment key={id}>
                          <a
                            href={`https://es.wikipedia.org/wiki/${name}`}
                            className="hover:text-skyblue"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {name}
                          </a>
                          {index !== movie.production_companies.length - 1 && ', '}
                        </React.Fragment>
                      );
                    })}
                  </span>
                </div>
              </div>
            </section>
          </header>

          {/* Video */}
          <section className="w-full h-[100vh] bg-[#222e5b] mt-12 flex flex-col">
            <header className="lg:flex-row lg:h-20 flex flex-col gap-2 p-3 lg:items-center">
              {OPTIONS.map((option, index) => {
                const { language, svgIcon, ArrowDownIconBol = true } = option;
                return (
                  <SelectedMoviesLanguage
                    key={index}
                    language={language}
                    svgIcon={svgIcon}
                    ArrowDownIconBol={ArrowDownIconBol}
                  />
                );
              })}
            </header>

            {/* Video */}
            <div className="w-full h-full bg-black flex items-center justify-center">
              <PlayIconFilled width={120} className={'cursor-pointer hover:brightness-75'} />
            </div>
          </section>

          <section className="flex lg:flex-row flex-col gap-8 bg-primary pt-20 text-gray-400 ">
            <article className="lg:w-[70%] w-full">
              <h1 className="h2 font-bold text-4xl text-white">Películas recomendadas</h1>
              {/* Movies */}
              <HomeMoviesComponent movies={recomendations} />
            </article>

            <FeaturedMovies className={'max-full lg:max-w-[30%] flex flex-col gap-4'} />
          </section>
        </div>
      </article>
    </>
  );
};
