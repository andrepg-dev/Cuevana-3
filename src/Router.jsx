import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import { Movies } from './components/movies/movies';
import { PageNotFound } from './components/routes/404';
import { GenreMovie } from './components/routes/genre';
import { SearchPage } from './components/routes/search';
import { SelectedMovie } from './components/routes/selectedMovie';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Navigate to="/peliculas/1" />} />
        <Route path="/peliculas/:page" element={<Movies />} />
        <Route path="/pelicula/:id" element={<SelectedMovie />} />
        <Route path="/generos" element={<Navigate to={'/generos/28/page/1'} />} />
        <Route path="/generos/:genreID/page/:page" element={<GenreMovie />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
