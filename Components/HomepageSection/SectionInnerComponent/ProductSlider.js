import _ from 'lodash'
import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Link from "next/link";

export default class ProductSlider extends Component{
            constructor(props) {
              super(props);   
          }
          render(){           
            return (
              <Swiper className="product-slider" 
              modules={[Navigation, Pagination]}
              speed={1200} 
              slidesPerView={'auto'}
              navigation
              pagination={{ clickable: true }}
              slideToClickedSlide= {true}
              centeredSlides={true}
              loop={true}
              >
              {this.props.data && this.props.data.map((val) =>
                  <SwiperSlide className="product-slide reveal-fade" key={val.id}>
                  <div className="product-slide-inner">
                      <div className="product-image">
                          <img priority="false" src={val?.attributes?.Product_Image?.data?.attributes?.url
                                    ? val?.attributes?.Product_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Solar Module" loading='lazy' />
                      </div>
                      <div className="product-content">
                        <h4 className="product-title">{val?.attributes?.Title}</h4>
                            <div className="product-text">
                              <p>{val?.attributes?.Short_Description}</p>
                            </div>
                            <div className="read-more-link">
                            <Link 
                                href="/products/[slug]" 
                                as={`/products/${val?.attributes?.slug}`} 
                                prefetch={false}
                                >
                                     <a  className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
                                </Link>  
                                
                            </div>
                      </div>
                  </div>
                  </SwiperSlide>
              )}
              </Swiper>
          );
          }
     
}

