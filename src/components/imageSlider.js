
import React,{useState} from 'react';
import { SliderData } from './SliderData';

const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
const length = slides.length
  return (
      <>
      {SliderData.map((slide, index) => {
          return <img src={slide.image} alt='fashion image'/
          >;
      })}
      </>
  );
  
}

export default ImageSlider