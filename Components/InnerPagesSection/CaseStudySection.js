import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
var settingsCaseStudy = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
          }
      },
    ]
  };

export default class CaseStudySection extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return (
            <section className="section case-study-section case-study-main-section" 
            style={{backgroundImage:`url(${this.props.data?.attributes?.Case_Study_Background_Image?.data?.attributes?.url
            ? this.props.data?.attributes?.Case_Study_Background_Image?.data?.attributes?.url
                 : process.env.NEXT_PUBLIC_NO_IMAGE})`}}>
                <div className="section-inner reveal-fade">
                        <div className="section-wrap">
                            <div className="case-study-slider-wrap">
                                <Container>
                                <SectionTitle 
                                sectionTitle={this.props.data?.attributes?.Title} titleTheme="light-title"/>
                                    <Slider className="case-study-slider" {...settingsCaseStudy}>
                                        {this.props.data?.attributes?.Franchisee_Partner.map((val) =>
                                        
                                        <div className="case-study-inner" key={val.id}>
                                            <div className="case-study-content">
                                                <Row className="case-study-row">
                                                    <Col lg={3} md={4} className="col-left">
                                                        <div className="col-inner">
                                                            <h4 className="franchisee-loc-title">{this.props.data?.attributes?.Franchisee_Title}</h4>
                                                            <div className="partner-logo">
                                                                <img priority="false" src={val.Franchisee_Image?.data?.attributes?.url
                                                                    ? val.Franchisee_Image?.data?.attributes?.url
                                                                    : process.env.NEXT_PUBLIC_NO_IMAGE } alt={val.Partner_Company_Name} loading='lazy'/>
                                                            </div>
                                                            <div className="partner-company-name">
                                                                <span>{val.Partner_Company_Name}</span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={9} md={8} className="col-right">
                                                        <div className="col-inner" dangerouslySetInnerHTML={{__html:val?.Feedback_Short_Description}}>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        )}
                                    </Slider>
                                </Container>
                            </div>
                        </div>
                </div>
            </section>
        )
    }
}

