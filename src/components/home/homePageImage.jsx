import propTypes from 'prop-types';
import SliderComponent from './sliderComponent';

export const HomePageImage = () => {
  return (
    <>
      <section className="w-full box-border h-[75vh] object-cover relative ">
        <SliderComponent />
      </section>
    </>
  );
};

HomePageImage.propTypes = {
  className: propTypes.string,
};
