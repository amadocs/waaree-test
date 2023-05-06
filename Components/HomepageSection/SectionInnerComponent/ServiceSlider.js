import _ from 'lodash'
import React from 'react';
import Slider from 'react-slick';
import Link from "next/link";

const ServiceSlider = (props) => {
  var settingsService = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
      }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
      }
      },
    ]
  };

  return (
      <Slider className="service-slider" {...settingsService}>
              {props.serviceSlider && props.serviceSlider.map((val) =>
               <div className="service-slide" key={val.id}>
                 <div className="service-slide-inner">
                   <div className="service-top">
                     <h4 className="service-title">{val?.attributes?.Title}</h4>
                     <div className="service-image">
                     <Link href="/services/[slug]" as={`/services/${val?.attributes?.slug}`} prefetch={false} >
                         <img priority="false" src={val?.attributes?.Service_Image?.data?.attributes?.url}
                         alt="Solar Panel Service" loading='lazy' />
                       </Link>  
                     </div>
                   </div>
                   <div className="service-bottom-content">
                     <div className="service-text">
                       <p>{val?.attributes?.Short_Description}</p>
                     </div>
                     <div className="read-more-link">
                     <Link href="/services/[slug]" as={`/services/${val?.attributes?.slug}`} prefetch={false} >
                     <a className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
                                </Link>                 
                     </div>
                   </div>
                 </div>
               </div>
           
              )}
      </Slider>
      
  );
  }
export default ServiceSlider;