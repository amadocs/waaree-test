import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))

export default class CaseStudyDetail extends Component {
    constructor(props) {
        super(props)    
      }
    render(){
        return (
            <>
                <section className="section Blog-detail-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <div className="blog-main-row">
                                    <Row>
                                        <Col lg={12} className="blog-detail-col">
                                            <div className="col-inner">
                                                <div className="blog-wrap">
                                                <div className="blog-single">
                                                <div className="blog-inner">
                                                    <div className="blog-image">
                                                        <a href="">
                                                            <img priority="false" src={this.props?.data?.attributes?.Case_Study_Image?.data?.attributes?.url
                                                                    ? this.props?.data?.attributes?.Case_Study_Image?.data?.attributes?.url
                                                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt={this.props?.data?.attributes?.Title} loading='lazy'/>
                                                        </a>
                                                    </div>
                                                    <div className="blog-title-wrap">
                                                        <h4>
                                                            <a href="#">{this.props?.data?.attributes?.Title}</a>
                                                        </h4>
                                                    </div>
                                                    <div className="blog-detail-content" dangerouslySetInnerHTML={{__html:this.props?.data?.attributes?.Case_Study_Body_Section}}>
                                                    </div>

                                                </div>
                                                </div>

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
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

