const base_url = 'https://api.themoviedb.org/3';
const api_key = import.meta.env.VITE_API_KEY;
const language = 'es-ES';

export const API_URLs = {
  series: (page = 1) =>
    `${base_url}/tv/popular?api_key=${api_key}&language=${language}&page=${page}`,
  movies: {
    trending: {
      week: (page = 1) =>
        `${base_url}/trending/movie/week?api_key=${api_key}&language=${language}&page=${page}`,
      day: (page = 1) =>
        `${base_url}/trending/movie/day?api_key=${api_key}&language=${language}&page=${page}`,
    },
    genreList: () => `${base_url}/genre/movie/list?api_key=${api_key}&language=${language}`,
    byGenre: (genreID, page = 1) =>
      `${base_url}/discover/movie?api_key=${api_key}&with_genres=${genreID}&language=${language}&page=${page}`,
    search: (movieName, page = 1) =>
      `${base_url}/search/movie?api_key=${api_key}&language=${language}&query=${movieName}&page=${page}`,
    byId: (movieID) => `${base_url}/movie/${movieID}?api_key=${api_key}&language=${language}`,
    recomendations: (movieID, page = 1) =>
      `${base_url}/movie/${movieID}/recommendations?language=${language}&page=${page}&api_key=${api_key}`,
  },
};
