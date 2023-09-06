import { Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '../icons/icons';
import { DayMoviesFetch } from '../utils/fetch';
import './carousel.css';
import { MovieContentHomePage } from './content';

export default function SliderComponent({ className }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await DayMoviesFetch({ page: 1 });
      setMovies(response);
    };
    getMovies();
  }, []);

  return (
    <Carousel
      indicators={false}
      className="carousel-control"
      leftControl={<ArrowLeft className={'opacity-10 hover:opacity-100'} />}
      rightControl={<ArrowRight className={'opacity-10 hover:opacity-100'} />}
      theme={'dark'}
      slideInterval={8000}
    >
      {movies.slice(0, 5).map((movie) => (
        <div className="h-full w-full" key={movie.id}>
          <div
            className={`w-full h-full px-20 lg:px-sitex relative ${className}`}
            style={{
              boxShadow:
                '0px -10px 10px 0px #080F28 inset, 0px -220px 500px 10px #080F28 inset, 0px 30px 80px 0px #080F28 inset',
            }}
          >
            <img
              className="w-full h-full absolute top-0 left-0 object-cover select-none pointer-events-none -z-10"
              srcSet={`
              https://image.tmdb.org/t/p/w300${movie.backdrop_path} 300w,
              https://image.tmdb.org/t/p/w780${movie.backdrop_path} 780w,
              https://image.tmdb.org/t/p/original${movie.backdrop_path} 1280w
            `}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Home page image"
            />

            <div className="lg:pt-32 pt-36">
              <MovieContentHomePage
                overview={movie.overview}
                release_date={movie.release_date}
                type={'Película'}
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
              />
            </div>

            <div className="mt-8">
              <Link
                to={`pelicula/${movie.id}`}
                className="bg-skyblue hover:brightness-90 py-3 px-8 rounded-full text-white"
              >
                Ver Película
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
