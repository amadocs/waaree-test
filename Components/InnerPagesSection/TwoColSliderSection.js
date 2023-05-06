import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))
const TwoColImageSlider= dynamic(() =>  import('../InnerPagesSection/TwoColImageSlider'))

export default function TwoColSliderSection(props){
  
    return (
        <>
            <section className="section two-col-slider-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <Row className="two-col-slider-row">
                                <Col md={6} className="content-col reveal-fade stagger-animation">
                                    <div className="col-inner">
                                        <div className="content-text">
                                            <h2 className="section-title dark-title" dangerouslySetInnerHTML={{__html:props.data?.attributes?.Life_At_Waaree_Title}}></h2>
                                            
                                            <p>{props.data?.attributes?.Life_At_Waaree_Short_Description}</p>
                                        </div>  
                                    </div>
                                </Col>
                                <Col md={6} className="image-slider-col reveal-fade stagger-animation">
                                    <div className="col-inner">
                                        <TwoColImageSlider data={props.data} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}
