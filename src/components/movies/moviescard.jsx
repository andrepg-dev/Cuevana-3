import propTypes from 'prop-types';
import { ToolTip } from './tooltip';
import { PlayIcon } from '../icons/icons';
import { Link } from 'react-router-dom';

const MoviesCard = ({ title, poster_path, release_date, overview, vote_average, id, onClick }) => {
  return (
    <Link
      to={`/pelicula/${id}`}
      onClick={onClick}
      className="relative max-w-[180px] flex flex-col gap-2 items-center text-white cursor-pointer [&>div>section]:hover:scale-100 [&>span]:hover:text-skyblue [&>div>div]:hover:scale-100 [&>div>img]:hover:brightness-[0.8]"
    >
      <div className="w-full flex items-center justify-center relative min-h-[225.14px]">
        <img
          className="w-full object-cover rounded brightness-90 "
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
          }}
        />

        <div className="absolute h-full w-full items-center justify-center flex scale-0 transition duration-75">
          <PlayIcon />
        </div>

        {/* Year */}
        <span className="absolute bottom-1 font-semibold px-2 scale-75 right-0 text-sm bg-skyblue rounded-full p-1">
          {release_date}
        </span>

        {/* ToolTip */}
        <section className="absolute left-[80%] top-1/2 transform -translate-y-1/2 scale-0 z-20 transition duration-75 ">
          <ToolTip
            overview={overview}
            release_date={release_date}
            title={title}
            vote_average={vote_average}
            poster_path={poster_path}
          />
        </section>
      </div>

      <span className="text-sm">{title}</span>
    </Link>
  );
};

export default MoviesCard;

MoviesCard.propTypes = {
  title: propTypes.string,
  poster_path: propTypes.string,
  vote_average: propTypes.number,
  release_date: propTypes.string,
  overview: propTypes.string,
  id: propTypes.number.isRequired,
};
