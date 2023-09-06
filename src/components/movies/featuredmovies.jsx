import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonToggle from '../home/buttonToggle';
import { DayMoviesFetch, WeekMoviesFetch } from '../utils/fetch';
import { MovieCardAside } from './movieCardAside';

export const FeaturedMovies = ({ className }) => {
  const [isDaySelected, setDayIsSelected] = useState(true);
  const [todayMovies, setTodayMovies] = useState([]);
  const [weekMovies, setWeekMovies] = useState([]);
  const location = useLocation();
  const pathLocationHome = location.pathname === '/';

  const ImageComponent = () => {
    return (
      <>
        <img
          className="w-full object-cover lg:block hidden"
          src="https://cuevana8.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcuevana8-banner.a7f84898.jpg&w=384&q=75"
          alt="cuevana logo image"
        />
      </>
    );
  };

  // Funcion para traer las peliculas del dia
  useEffect(() => {
    const fetchTodayMovies = async () => {
      try {
        const TodayMovies = await DayMoviesFetch({ page: 1 });
        setTodayMovies(TodayMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodayMovies();
  }, []);

  // Función para trraer las peliculas de la semana
  useEffect(() => {
    const fetchWeekMovies = async () => {
      try {
        const WeekMovies = await WeekMoviesFetch({ page: 1 });
        setWeekMovies(WeekMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeekMovies();
  }, []);

  // Funcion para cambiar el estado de los botones
  const handleDayClick = (isDay) => {
    setDayIsSelected(isDay);
  };

  const RenderMoviesCards = () => {
    if (isDaySelected) {
      return (
        <>
          {todayMovies.slice(0, 5).map((movie) => (
            <MovieCardAside
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              title={movie.title}
              vote_average={movie.vote_average}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </>
      );
    } else {
      return (
        <>
          {weekMovies.slice(0, 5).map((movie) => (
            <MovieCardAside
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              title={movie.title}
              vote_average={movie.vote_average}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </>
      );
    }
  };

  return (
    <>
      <aside className={className}>
        {pathLocationHome && <ImageComponent />}

        <h1 className="lg:text-xl font-bold text-2xl">Películas destacadas</h1>

        {/* Botones Día Y semana */}
        <div className="flex [&>button]:w-full [&>button]:p-2 [&>button]:py-3">
          <ButtonToggle isSelected={isDaySelected} onClick={() => handleDayClick(true)}>
            Día
          </ButtonToggle>
          <ButtonToggle isSelected={!isDaySelected} onClick={() => handleDayClick(false)}>
            Semana
          </ButtonToggle>
        </div>
        {/* Peliculas a mostrar por dia o semana */}
        {RenderMoviesCards()}
      </aside>
    </>
  );
};

FeaturedMovies.propTypes = {
  className: propTypes.string,
};
