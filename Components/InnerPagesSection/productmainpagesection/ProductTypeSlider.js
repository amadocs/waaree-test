import _ from 'lodash'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import dynamic from 'next/dynamic'
const ButtonDiv = dynamic(() =>  import('../../HomepageSection/SectionInnerComponent/ButtonDiv'))

const ProductTypeSlider= (props) => {

  var settingsProductType = {
    modules:[Navigation, Pagination],
    speed:600, 
    slidesPerView:1,
    slideToClickedSlide: true,
    centeredSlides:true,
    pagination: {
      clickable: true,
    },
    navigation:{
      clickable: true,
    },
    loop:true,
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768:{
        slidesPerView: 2,
      }
    }
  };
    return (
          <Swiper className="product-type-slider" {...settingsProductType}>
                {props?.data.map((val) =>
                  <SwiperSlide key={val?.id} className="reveal-fade stagger-animation">
                  <div className="product-type-inner">
                      <div className="product-type-content">
                        <div className="product-type-title">
                            <h2>{val?.attributes?.Title}</h2>
                            <span className="sub-text">{val?.attributes?.Sub_Text}</span>
                        </div>
                        <div className="product-type-image">
                            <img priority="false" src={val?.attributes?.Icon_Image?.data?.attributes?.url
                             ? val?.attributes?.Icon_Image?.data?.attributes?.url
                             : process.env.NEXT_PUBLIC_NO_IMAGE} alt='' loading='lazy'/>
                        </div>
                        <div className="btn-wrap">
                          <ButtonDiv buttonHref={val?.attributes?.Inquiry_Link} buttonText="Inquire Now" />
                        </div>
                      </div>
                  </div>
                  </SwiperSlide>
                 )}
          </Swiper>
      
    );
  }
export default ProductTypeSlider;