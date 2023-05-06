import React, {Component} from 'react';
import _ from 'lodash'
import { Container} from 'react-bootstrap';
import Slider from 'react-slick';

var settingsCompanyLogo = {
  speed: 600,
  arrows: false,
  infinite: true,
  dots: true,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 10000,
  slidesToScroll: 5,
  swipe: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
  ]
};   

export default class CompanyLogoSection extends Component {

          constructor(props) {
            super(props);
        }
      render(){
        return (
          <section className="section company-logo-section">
              <div className="section-inner">
                  <Container>
                      <div className="section-wrap">
                          <h4 className="title-small text-center reveal-fade">{this.props.Data?.attributes?.Short_Description}</h4>
                          <Slider className="company-logo-slider" {...settingsCompanyLogo}>
                                  {this.props.Data?.attributes?.Certifications.map((val) =>
                                      <div className="logo-slide" key={val.id}>
                                      <div className="image-wrap">
                                          <img priority="false" src={val?.Certification_Image?.data?.attributes?.url
                                            ? val?.Certification_Image?.data?.attributes?.url
                                            :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="Certificate Images" loading='lazy'/>
                                      </div>
                                      </div>
                                  )}
                          </Slider>
                      </div>
                  </Container>
              </div>
          </section>
      )
      }
}

