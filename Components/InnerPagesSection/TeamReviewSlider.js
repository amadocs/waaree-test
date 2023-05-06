import React from 'react';
import _ from 'lodash'
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';


export default function TeamReviewSlider(props){
  var settingsTeamReview = {
    autoplay:true,
    speed:1000,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
  };
  
    return (
          <Slider className="team-review-slider" {...settingsTeamReview}>
                {props.data.map((val) =>
                  <div className="slide-inner" key={val.id}>
                      <Row>
                          <Col lg={7} className="review-left-col">
                              <div className="col-inner">
                                  <div className="review-text">
                                      <h4>{val?.attributes?.Review_Text}</h4>
                                  </div>
                                  <div className="team-info">
                                      <h4 className="team-member-name">{val?.attributes?.Team_Member_Name}</h4>
                                      <span className="team-member-position">{val?.attributes?.Team_Member_Position}</span>
                                  </div>
                              </div>
                          </Col>
                          <Col lg={5} className="team-image-col">
                            <div className="col-inner">
                                <div className="team-member-image">
                                    <img priority="false"
                                    src={val?.attributes?.Team_Member_Image?.data?.attributes?.url
                                    ? val?.attributes?.Team_Member_Image?.data?.attributes?.url
                                    :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                                </div>
                            </div>
                          </Col>
                      </Row>
                  </div>
                )}
          </Slider>
      
    );
  }
