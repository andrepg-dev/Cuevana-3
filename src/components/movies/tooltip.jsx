import propTypes from 'prop-types';

export const ToolTip = ({ title, vote_average, release_date, overview, poster_path }) => {
  return (
    <>
      <div
        className={`w-80 lg:block hidden rounded p-4 cursor-default relative backdrop-blur-[200px] transition-all`}
      >
        <div
          className="absolute inset-0 w-full h-full backdrop-blur-3xl"
          style={{
            zIndex: '-1',
            backgroundImage: `url('https://image.tmdb.org/t/p/w45/${poster_path}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(20px) brightness(0.5)',
          }}
        ></div>

        <h1 className="font-semibold text-sm text-white">{title}</h1>

        {/* Rating */}
        <div className="mt-2">
          <span className="text-yellow-500">
            {vote_average}
            <span className="text-[12px]">/10</span>
          </span>
          <span className="text-[12px] ml-2">{release_date}</span>
        </div>

        {/* Text */}
        <p className="text-sm mt-2">{overview}</p>
      </div>
    </>
  );
};

ToolTip.propTypes = {
  title: propTypes.string,
  overview: propTypes.string,
  vote_average: propTypes.number,
  release_date: propTypes.string,
  poster_path: propTypes.string,
};
