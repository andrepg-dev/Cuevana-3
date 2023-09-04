import propTypes from 'prop-types';
import { PlayIcon } from '../icons/icons';

export const SerieCard = ({ name, poster_path, vote_average }) => {
  return (
    <>
      <div className="max-w-44 relative flex flex-col gap-2 items-center text-white cursor-pointer">
        <div className="w-full max-h-28 flex items-center justify-center relative [&>div]:hover:scale-100 [&>img]:hover:brightness-[0.3]">
          <img
            className="w-full max-h-28 object-cover rounded brightness-90 object-top"
            src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
            alt={`${name} poster`}
          />

          <div className="absolute h-full w-full items-center justify-center flex scale-0 transition duration-75 ease-in-out ">
            <PlayIcon />
          </div>
        </div>

        <span className="text-sm">{name}</span>

        {/* Popularity */}
        <span className="absolute top-1 font-semibold px-2 scale-75 right-0 text-sm bg-skyblue rounded-full p-1">{vote_average} / 10</span>
      </div>
    </>
  );
};

SerieCard.propTypes = {
  name: propTypes.string.isRequired,
  poster_path: propTypes.string.isRequired,
  vote_average: propTypes.number.isRequired,
};
