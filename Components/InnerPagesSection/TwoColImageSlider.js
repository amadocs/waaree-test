import React from 'react';
import _ from 'lodash'
import Slider from 'react-slick';

export default function TwoColImageSlider(props){
  var settingsImageSlider = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
          <Slider className="image-slider" {...settingsImageSlider}>
                {props.data?.attributes?.Life_At_Waaree_Image_Slider?.data.map((val) =>
                  <div className="slide-inner" key={val.id}>
                      <img priority="false" src={val?.attributes?.url} alt="Life at waaree Image" loading='lazy' />
                  </div>
                )}
          </Slider>
      
    );
  }
