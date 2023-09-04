import { FeaturedMovies } from '../movies/featuredmovies';
import { HomeMoviesComponent } from '../movies/homemovies';
import { Series } from '../series/series';
import { ButtonDefault } from '../utils/buttons';
import { HomePageImage } from './homePageImage';
import { useEffect, useState } from 'react';
import { MoviesFetch } from '../utils/fetch';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const newMovies = await MoviesFetch({ page: 1 });
        setMovies(newMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <HomePageImage className={'w-full box-border h-[70vh] px-sitex relative'} />

      <main className="px-sitex bg-primary p-4 text-gray-400">
        <h1 className="text-2xl font-bold text-center">
          Todas las películas de cuevana 8 online Gratis
        </h1>

        <section className="mt-10 flex gap-8">
          <article className="w-[70%]">
            {/* Series y episodios */}
            <Series />
            {/* Movies */}
            <HomeMoviesComponent movies={movies} />
            {/* Button para cargar más peliculas */}
            <footer className="w-full flex justify-center mt-12">
              <ButtonDefault text={'Cargar más películas'} />
            </footer>
          </article>

          <FeaturedMovies className={'max-w-[30%] flex flex-col gap-4'} />
        </section>
      </main>
    </>
  );
}

export default Home;
