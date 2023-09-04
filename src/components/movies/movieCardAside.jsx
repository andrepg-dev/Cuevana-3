import propTypes from 'prop-types';
import { PlayIcon } from '../icons/icons';
import { Link } from 'react-router-dom';

export const MovieCardAside = ({ title, poster_path, vote_average, release_date, id = 1 }) => {
  return (
    <>
      <Link
        to={`/pelicula/${id}`}
        onClick={()=> window.scrollTo(0, 0)}
        className="flex gap-4 h-[120px] [&>div>h1]:hover:text-skyblue cursor-pointer [&>.img>img]:hover:scale-105 [&>.img>div]:hover:scale-75 relative [&>.icon]:hover:scale-100"
      >
        <div className="img h-full w-22 relative">
          <div className="absolute h-full w-full items-center justify-center flex transition scale-0 duration-75 z-10">
            <PlayIcon />
          </div>

          <img
            className="h-full object-cover min-w-[82px] w-[82px] rounded "
            src={`https://image.tmdb.org/t/p/w154${poster_path}`}
            alt={`Poster image of ${title}`}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-white">{title}</h1>
          <div className="mt-1">
            <span className="text-yellow-400">
              {vote_average}
              <span className="text-[12px]">/10</span>
            </span>
            <span className="text-gray-400 text-[12px] ml-2">{release_date}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

MovieCardAside.propTypes = {
  title: propTypes.string.isRequired,
  poster_path: propTypes.string.isRequired,
  vote_average: propTypes.number.isRequired,
  release_date: propTypes.string.isRequired,
};
