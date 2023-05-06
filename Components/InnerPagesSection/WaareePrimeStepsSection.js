import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

export default class  WaareePrimeStepsSection extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
                <section className="section steps-section" style={{backgroundColor:"#f0faf2"}}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
    
                                <div className="step-section-wrap">
                                    <Row className="step-row">
                                        <Col md={6} className="step-title-col">
                                            <div className="col-inner">
                                                <SectionTitle sectionTitle={this.props.data?.attributes?.Waaree_Prime_Step_Section_Title} titleTheme="dark-title" className="text-center" />
                                            </div>
                                        </Col>
                                        <Col md={6} className="steps-col">
                                            <div className="col-inner">
                                                <div className="steps-wrap">
                                                    {this.props.data?.attributes?.Waaree_Prime_Step_Section.map((val,id) =>
                                                       
                                                        <div className="step-single reveal-fade stagger-animation" key={val.id}>
                                                            <span className="step-no h3">{++id}</span>
                                                            <div className="step-content">

                                                                <div className="icon-wrap">
                                                                    <img priority="false" src={val?.Gallery_Image?.data?.attributes?.url
                                                                            ? val?.Gallery_Image?.data?.attributes?.url
                                                                            : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                                                                </div>
                                                                <h4 className="step-title">{val?.Gallery_Item_text}</h4>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
                        <div className="section-inner-round"></div>
                    </div>
                </section>
            </>
        )
    }

}

