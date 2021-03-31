import {useEffect, useState} from 'react';
import Slider from '../../../components/Slider';
import Api from '../../../services/Api';

const Carousel = () => {
  const [carouselImages, setCarouselcarouselImages] = useState([]);
  useEffect(() => {
    Api.banners()
      .then((data) => setCarouselcarouselImages(data))
      .catch();
  }, []);
  return (
    <>
      <Slider carouselImages={carouselImages} />
    </>
  );
};

export default Carousel;
