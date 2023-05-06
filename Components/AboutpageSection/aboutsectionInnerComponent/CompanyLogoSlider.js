import _ from 'lodash'
import React from 'react';
import Slider from 'react-slick';

const CompanyLogoSlider = (props) => {

  var settingsCompanyLogo = {
    speed: 600,
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 6,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    ]
  };
  return (
    <Slider className="company-logo-slider" {...settingsCompanyLogo}>
      {props.companylogo.map((val) =>
        <div className="logo-slide" key={val.id}>
          <div className="image-wrap">
            <img priority="false" src={val?.attributes?.Image?.data?.attributes?.url
            ? val?.attributes?.Image?.data?.attributes?.url
            : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Company logo slider" loading='lazy'  />
         </div>
        </div>
      )}
    </Slider>
  );
}

export default CompanyLogoSlider;