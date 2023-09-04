import { API_URLs } from './moviesURLs';

const FetchData = async (URL) => {
  try {
    const response = await fetch(URL);
    const res1 = await response.json();
    return res1.results;
  } catch (error) {
    console.error(error);
  }
};

export const SeriesFetch = async ({ page = 1 }) => FetchData(API_URLs.series(page));

export const MoviesFetch = async ({ page = 1 }) => FetchData(API_URLs.movies.trending.week(page));

export const DayMoviesFetch = async ({ page = 1 }) => FetchData(API_URLs.movies.trending.day(page));

export const WeekMoviesFetch = async ({ page = 1 }) =>
  FetchData(API_URLs.movies.trending.week(page));

export const MoviesListGenre = async () => {
  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=es-ES`;

  const response = await fetch(URL);
  const res1 = await response.json();
  return res1;
};

export const MoviesGenre = async ({ genreID, page = 1 }) =>
  FetchData(API_URLs.movies.byGenre(genreID, page));

export const SearchMovie = async ({ movieName, page = 1 }) =>
  FetchData(API_URLs.movies.search(movieName, page));

export const FindMovieById = async ({ movieID }) => {
  const URL = API_URLs.movies.byId(movieID);

  const response = await fetch(URL);
  const res1 = await response.json();
  return res1;
};

export const MovieRecomendationsById = async ({ movieID, page }) => {
  const response = await fetch(API_URLs.movies.recomendations(movieID, page));
  const res1 = await response.json();

  return res1;

};
