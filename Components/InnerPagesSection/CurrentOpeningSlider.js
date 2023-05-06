import React from 'react';
import _ from 'lodash'
import {Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import dynamic from 'next/dynamic'
const ButtonDiv= dynamic(() =>  import('../HomepageSection/SectionInnerComponent/ButtonDiv'))

export default function CurrentOpeningSlider(props){

  var settingsOpeningSlider = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
          <Slider className="current-opening-slider reveal-fade stagger-animation" {...settingsOpeningSlider}>
                {props.data?.attributes?.Current_Opening.map((val) =>
                  <div className="slide-inner" key={val.id}> 
                      <Row className="current-opening-row">
                        <Col lg={6} className="content-col">
                          <div className='col-inner'>
                              <h2 className="title">
                               {val?.Current_Slider_Title}
                              </h2>
                              <div className="opening-content">
                                  <h4>{val?.Current_Opening_Title}</h4>
                                  <div className="content-text">
                                      <p>{val?.Current_Opening_Text}</p>
                                  </div>
                                  <ButtonDiv buttonText={val?.Current_Opening_Button_Text} buttonHref={val?.Current_Opening_Button_Link}/>
                              </div>
                          </div>
                        </Col>
                        <Col lg={6} className="image-col">
                          <div className="col-inner">
                            <img priority="false" src={val?.Current_Opening_Image?.data?.attributes?.url
                            ?  val?.Current_Opening_Image?.data?.attributes?.url
                            :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="Slider Images"  loading='lazy'  />
                          </div>
                        </Col>
                      </Row>
                  </div>
                )}
          </Slider>
      
    );
  }
