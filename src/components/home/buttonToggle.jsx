import propTypes from 'prop-types';

const ButtonToggle = ({ isSelected, onClick, children, className }) => {
  const buttonClasses = isSelected ? 'text-white border-b-2 border-b-yellow-500' : 'border-b-2 border-transparent';

  return (
    <>
      <button className={`${buttonClasses} ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

ButtonToggle.propTypes = {
  isSelected: propTypes.bool,
  onClick: propTypes.func,
  children: propTypes.node,
  className: propTypes.string,
};

export default ButtonToggle;
