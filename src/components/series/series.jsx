import { useEffect, useState } from 'react';
import { SerieCard } from '../series/serieCard';
import { SeriesFetch } from '../utils/fetch';

export const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const series = await SeriesFetch({ page: 1 });
        setSeries(series);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Episodios</h1>
        <a
          href=""
          className="px-4 hover:brightness-90 mt-1 bg-skyblue p-2 text-white rounded-full font-bold text-[10px] uppercase flex items-center cursor-pointer"
        >
          Ver más episodios
        </a>
      </header>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat( auto-fill, minmax(160px, 1fr) )' }}
      >
        {series
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 8)
          .map((serie) => (
            <SerieCard
              name={serie.name}
              poster_path={serie.poster_path}
              vote_average={serie.vote_average}
              key={serie.id}
            />
          ))}
      </div>
    </>
  );
};
