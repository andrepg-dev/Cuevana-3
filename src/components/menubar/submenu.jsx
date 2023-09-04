import { Link } from 'react-router-dom';

export const FlexSubMenu = ({ submenuOptions }) => {
  return (
    <>
      <div className="w-full">
        {submenuOptions.slice(0, 7).map((option, index) => (
          <Link
            to={option.route}
            key={index}
            className="px-4 py-3 hover:bg-[rgba(0,0,0,.3)] rounded block hover:text-skyblue"
          >
            {option.text}
          </Link>
        ))}
      </div>
      <div className="w-full">
        {submenuOptions.slice(7, 14).map((option, index) => (
          <Link
            to={option.route}
            key={index}
            className="px-4 py-3 hover:bg-[rgba(0,0,0,.3)] rounded block hover:text-skyblue"
          >
            {option.text}
          </Link>
        ))}
      </div>
      <div className="w-full">
        {submenuOptions.slice(14, 19).map((option, index) => (
          <Link
            to={option.route}
            key={index}
            className="px-4 py-3 hover:bg-[rgba(0,0,0,.3)] rounded block hover:text-skyblue"
          >
            {option.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export const OptionsComponent = ({ submenuOptions }) => {
  return (
    <>
      {submenuOptions.map((option, index) => (
        <Link
          to={option.route}
          key={index}
          className="px-4 py-3 hover:bg-[rgba(0,0,0,.3)] rounded block hover:text-skyblue"
        >
          {option.text}
        </Link>
      ))}
    </>
  );
};
