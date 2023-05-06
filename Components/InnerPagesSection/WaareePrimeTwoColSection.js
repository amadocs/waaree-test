import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))

export default class WaareePrimeTwoColSection extends Component{
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <>
                <section className="section two-col-section prime-col-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <div className="alternate-col-wrap">
                                    <Row className="image-content-row">
                                        <Col lg={8} className="content-col reveal-fade">
                                            <div className="col-inner">
                                                <h2 className="section-title content-col-title">{this.props.data?.attributes?.About_Prime_Section_Title}</h2>
                                                <div className="content-col-text" dangerouslySetInnerHTML={{__html:this.props.data?.attributes?.About_Prime_Section_Short_Description}}>
                                                    
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className="image-col reveal-fade">
                                            <div className="col-inner">
                                                <img priority="false" src={this.props.data?.attributes?.About_Prime_Section_Image?.data?.attributes?.url
                                                        ? this.props.data?.attributes?.About_Prime_Section_Image?.data?.attributes?.url
                                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt='Col Image' loading='lazy'/>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <RoundSvgSectionTop />
                </section>
            </>
        )
    }
 
}

