import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export const ButtonDefault = ({ text }) => {
  return (
    <>
      <Link
        to="peliculas"
        className="p-2 text-white rounded-full bg-skyblue px-8 hover:brightness-90"
      >
        {text}
      </Link>
    </>
  );
};

export const PaginationButton = ({ currentPage, totalPage = 500, leftOnClick, rigthOnClick }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPage;

  const LeftButton = () => {
    return (
      <>
        <button
          onClick={leftOnClick}
          className="flex items-center justify-center bg-[#1E2747] rounded-full w-12 h-12 hover:bg-skyblue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-big-left-line-filled"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h5a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-5 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
            <path
              d="M4.415 12l6.585 -6.586v3.586l.007 .117a1 1 0 0 0 .993 .883l5 -.001v4l-5 .001a1 1 0 0 0 -1 1v3.586l-6.585 -6.586z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
            <path
              d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </>
    );
  };

  const RightButton = () => {
    return (
      <>
        <button
          onClick={rigthOnClick}
          className="flex items-center justify-center bg-[#1E2747] rounded-full w-12 h-12 hover:bg-skyblue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-big-right-lines-filled"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
            <path
              d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
            <path
              d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </>
    );
  };

  return (
    <section className="flex gap-2 flex-nowrap">
      {/* Button next page */}
      {isFirstPage ? null : LeftButton()}

      <div className="p-2 flex items-center bg-[#1E2747] rounded-full font-semibold select-none">
        <div className="flex item-center gap-4 text-white">
          {/* Page number */}
          <span className="w-8 h-8 flex items-center justify-center bg-skyblue rounded-full">
            {currentPage}
          </span>
          <span className="flex items-center text-sm">de</span>
          <span className="flex items-center w-8">{totalPage}</span>
        </div>
      </div>

      {/* Button next page */}
      {isLastPage ? null : RightButton()}
    </section>
  );
};

ButtonDefault.propTypes = {
  text: propTypes.string.isRequired,
};

PaginationButton.propTypes = {
  currentPage: propTypes.number.isRequired,
  totalPage: propTypes.number,
  leftOnClick: propTypes.func,
  rigthOnClick: propTypes.func,
};
