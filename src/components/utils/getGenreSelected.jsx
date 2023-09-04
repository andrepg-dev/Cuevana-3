import { useEffect, useState } from 'react';
import { MoviesListGenre } from './fetch';

export const GetGenreSelected = ({ GenreID }) => {
  const [genreList, setGenreList] = useState([]);
  const [genreSelected, setGenreSelected] = useState('');

  useState(() => {
    const fetchGenreList = async () => {
      try {
        const response = await MoviesListGenre();
        setGenreList(response.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenreList();
  }, []);

  useEffect(() => {
    const selectedGenre = genreList.find((genre) => genre.id === GenreID);
    if (selectedGenre) {
      setGenreSelected(selectedGenre.name);
    } else {
      setGenreSelected('Género no encontrado');
    }
  }, [genreList, GenreID]);

  return <>{genreSelected}</>;
};
