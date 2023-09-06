import propTypes from 'prop-types';
import SliderComponent from './sliderComponent';

export const HomePageImage = () => {
  return (
    <>
      <section className="w-full box-border lg:h-[75vh] h-[80vh] object-cover relative ">
        <SliderComponent />
      </section>
    </>
  );
};

HomePageImage.propTypes = {
  className: propTypes.string,
};
