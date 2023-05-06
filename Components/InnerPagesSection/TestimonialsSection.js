import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))

export default class TestimonialsSection extends Component{

    constructor(props) {
        super(props);
   
        this.state = {
            visibleTestimonial: 6,
        };
    }

    render(){
        const handleClick = () => {
            const btnId = document.querySelector('.load-more');
            btnId.classList.add('hide');

        this.setState({
            visibleTestimonial: this.state.visibleTestimonial.length,
             DataisLoaded : true})
        }
        return (
            <>
                <section className="section testimonial-listing-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap reveal-fade stagger-animation">
                                <div className="testimonial-listing-wrapper">
                                <div className="testimonial-listing">
    
    
                                {this.props.data.slice(0, this.state.visibleTestimonial).map((val) =>
                                    <div className="testimonial-single ">
                                        <div className="testimonial-single-wrap">
                                            <Row>
                                                <Col lg={2} md={4} className="testimonial-image-col">
                                                    <div className="col-inner">
                                                        <div className="testimonial-image">
                                                            <img priority="false" src={val?.attributes?.Testimonial_Logo?.data?.attributes?.url
                                                    ? val?.attributes?.Testimonial_Logo?.data?.attributes?.url
                                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy'/>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={10} md={8} className="testimonial-content-col">
                                                    <div className="col-inner">
                                                        <h4 className="testimonial-company-title green-title">
                                                        “ {val?.attributes?.Title}
                                                        </h4>
                                                        <div className="content-text">
                                                            <p>{val?.attributes?.Testimonial_Text}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                )}
                                </div>
                                    <div className="btn-wrap text-center">
                                    <button className="btn btn-primary load-more" onClick={handleClick}>Load More <i className="fa fa-chevron-right"></i></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Container>
                        <RoundSvgSectionTop />
                    </div>
                </section>
            </>
        )
    }

 
}

