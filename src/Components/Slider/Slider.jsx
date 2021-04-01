import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const SliderComp = ({slides}) => {
    return(
<Slider>
  {slides.map((slide, index) => <div key={index}>
       <div 
        style={{display: 'flex', justifyContent: 'center'}}
        >
          <img src={slide.src} alt={slide.description} />
        </div>
  </div>)}
</Slider>
    )
}


export default SliderComp;