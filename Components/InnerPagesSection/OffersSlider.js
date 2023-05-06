import React, { Component } from 'react';
import _ from 'lodash'
import Slider from 'react-slick';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';


var settingsOffersSlider = {
  speed: 600,
  arrows: true,
  infinite: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};


export default class  OffersSlider extends Component{

  
  constructor(props) {
    super(props)  
  }

  dispBlogDate(blogDate) {
    if (blogDate) {
        let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
        let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
        let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
        return (<>{day}{' '}{month}{' '} {year}</>)
    }

}


  render(){
    return (
      <Slider className="offers-slider" {...settingsOffersSlider}>
        {this.props.data?.attributes?.Offers_Slider.map((val) =>
              <div className="slide-inner" key={val.id}>
              <div className="image-wrap">
                  <img priority="false" src={val?.Offer_Image?.data?.attributes?.url
                        ? val?.Offer_Image?.data?.attributes?.url
                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
              </div>
              {/* <div className='offers-content'>
                <h5 className='offer-title'>{val?.Offer_Title_Text}</h5>
                <span className="offers-valid-date">Valid upto: {this.dispBlogDate(val?.Offer_Valid_Upto_Date)}</span>
              </div>     */}
            </div>           
        )}
      </Slider>
  
    );
  }
}