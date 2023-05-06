import _ from 'lodash'
import React from 'react';
import Slider from 'react-slick';
const TestimonialSlider = (props) => {


  var settingsTestimonial = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect:true,
    swipe:true,
    draggable: true,
    responsive: [
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
          }
      },
    ]
  };
  
    return (
          <Slider className="testimonial-slider" {...settingsTestimonial}>
              {props.data && props.data.map((val) =>
              {
                if(val?.attributes?.Promot_Homepage == true){
                  return(
                    <div className="testimonial-slide" key={val.id}>
                    <div className="testimonial-slide-inner">
                      <span className="quote-icon">“</span>
                      <div className="testimonial-text">
                        <p>{val?.attributes?.Testimonial_Text}</p>
                      </div>
                      <div className="testimonial-company">
                        <figure>
                    <img priority="false" src={val?.attributes?.Testimonial_Logo?.data?.attributes?.url
                                                 ? val?.attributes?.Testimonial_Logo?.data?.attributes?.url
                                                 : process.env.NEXT_PUBLIC_NO_IMAGE} className="sharada-construction Logo" alt= {val?.attributes?.Title} loading='lazy'/> 
                          <figcaption>
                              {val?.attributes?.Title}
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                  )
                }
              }
             
               
              )}
          </Slider>
      
    );
  }
export default TestimonialSlider;