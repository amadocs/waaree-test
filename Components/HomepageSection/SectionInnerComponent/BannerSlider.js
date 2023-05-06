import _ from 'lodash'
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

import { useState} from 'react';

const BannerSlider = (props) => {



  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);


            var settingsMain = {
              pauseOnHover: false,
              infinite: true,
                    speed:1200,
                    arrows:false,
                    dots:true,
              swipe:false,
              autoplay: true,
              autoplaySpeed: 5000,
              asNavFor: '.banner-slider-nav',
            };
        
            
            var settingsThumbs = {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots:false, 
              speed:1200,
              arrows:false,
              asNavFor: '.banner-slider',
              focusOnSelect: true,
              swipe:false,
            }
            
            setTimeout(()=>{
              setNav1(slider1);
              setNav2(slider2);
            },1200)

    return (


      <div className="banner-slider-wrap">
          <Slider className="banner-slider" {...settingsMain} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
              {props.data && props.data.map((val) =>
            <div className="banner-slide" key={val.id} >
               <div className="banner-slide-wrap">
                <div className="fp-bg banner-bg animated" style={{backgroundImage:`url(${val?.attributes?.Banner.data ? val.attributes.Banner.data[0].attributes.url  : process.env.NEXT_PUBLIC_NO_IMAGE })`}} data-animation-in="zoomInImage" loading='lazy'>
                </div>
                  <div className="slide-inner">
                     <h1 className="h2 section-title reveal-fade animated" 
                        data-animation-in={val.attributes.TitleBtnAnimation}>
                            <span>{val.attributes.Title}</span>{val.attributes.Sub_Title}
                        </h1>
                        <div className="btn-wrap reveal-fade animated" data-animation-in={val.attributes.TitleBtnAnimation} data-delay-in="0.2">
                            <Link href={val?.attributes?.Banner_link} prefetch={false}><a  className="btn btn-primary">Learn More<i className="fa fa-chevron-right"></i></a></Link>
                        </div>
                      </div>
                  </div>
              </div>
              )}
          </Slider>
          <Slider className="banner-slider-nav bottom-nav" {...settingsThumbs} asNavFor={nav1} ref={slider => (setSlider2(slider))}>
                {props.data && props.data.map((val) =>
                  <div className="banner-slide" key={val.id}>
                      <div className="nav-border-animation">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <div className="banner-nav-inner">
                          <h2 className="h4 banner-nav-head">{val?.attributes?.Title}</h2>
                          <h3 className="h6 sub-head">{val?.attributes?.Sub_Title}</h3>
                      </div>
                  </div>
                )}
          </Slider>
      </div>
      
    );
}
export default BannerSlider; 