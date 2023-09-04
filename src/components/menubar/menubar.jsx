import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchForm } from '../forms/forms';
import { MoviesListGenre } from '../utils/fetch';
import { ListItems } from './listItems';

export const MenuBarComponent = ({ className }) => {
  const location = useLocation();
  let MenuBarClass;
  const [genres, setGenres] = useState([]);

  if (location.pathname !== '/') {
    MenuBarClass = 'bg-[#141A32]';
  }
  if (location.pathname.includes('/pelicula/')) {
    MenuBarClass = 'bg-transparent';
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await MoviesListGenre();
      setGenres(response.genres);
    };
    fetchData();
  }, []);

  return (
    <>
      <menu
        className={`flex text-white w-full py-[1.2rem] justify-between items-center absolute z-40 px-sitex ${className} ${MenuBarClass}`}
      >
        <div className="flex gap-12">
          <img
            src="	https://cuevana8.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcuevana8.24457267.png&w=256&q=75"
            alt="Home image"
            className="w-52 object-cover"
          />

          <div className="relative">
            <ul className="flex h-full items-center gap-8 text-sm">
              <ListItems text={'Inicio'} route="" showIcon={false} />
              <ListItems
                text={'Películas'}
                route="peliculas"
                submenuOptions={[
                  { text: 'Útimas publicadas', route: 'peliculas' },
                  { text: 'Estrenos', route: 'estrenos' },
                  { text: 'Tendencias semana', route: 'tendencias-semana' },
                  { text: 'Tendencias día', route: 'tendencias-dia' },
                ]}
              />
              <ListItems
                text={'Géneros'}
                route="generos/28/page/1"
                submenuOptions={genres.map((genre) => {
                  return { text: genre.name, route: `generos/${genre.id}/page/1` };
                })}
              />
              <ListItems
                text={'Series'}
                route="series"
                submenuOptions={[
                  { text: 'Series', route: 'series' },
                  { text: 'Estrenos', route: 'estrenos' },
                  { text: 'Episodios', route: 'episodios' },
                  { text: 'Tendecias día', route: 'series/tendencias-dia' },
                  { text: 'Tendencias semana', route: 'series/tendencias-semana' },
                ]}
              />
            </ul>
          </div>
        </div>

        <SearchForm placeholder={'Buscador...'} />
      </menu>
    </>
  );
};

MenuBarComponent.propTypes = {
  className: propTypes.string,
};
