import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const ButtonDiv = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/ButtonDiv'))

export default class  WaareePrimeSection extends Component {

    constructor(props) {
        super(props);
    }
    render(){

        const {data} = this.props
        
        return (
            <>
                <section className="section waaree-prime-section">
                    <Container>
                        <div className="section-inner" style={{ backgroundColor: "#d85540" }}>
    
                            <div className="section-wrap">
                                <Row className="waare-prime-row">
                                    <Col lg={3} className="prime-icon-col">
                                        <div className="icon-wrap">
                                        <img priority="false" loading='lazy' src={data?.attributes?.Waaree_Prime_Icon_Image?.data?.attributes?.url
                                        ? data?.attributes?.Waaree_Prime_Icon_Image?.data?.attributes?.url
                                        :process.env.NEXT_PUBLIC_NO_IMAGE}  />
                                        </div>
                                    </Col>
                                    <Col lg={6} className="prime-text-col">
                                        <div className="col-inner">
                                        <SectionTitle sectionTitle={data?.attributes?.Title} titleTheme="light-title" className="text-center" />
                                            <span className="sub-title">{data?.attributes?.Sub_Title}</span>
                                            <div className="prime-text">
                                                <p>{data?.attributes?.Short_Description}</p>
                                            </div>
                                            <div className="btn-wrap">
                                            <ButtonDiv buttonHref={data?.attributes?.Button_Link} buttonText={data?.attributes?.Button_Text} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} className="prime-bg-image">
                                        <div className="image-wrap">
                                        <img priority="false" src={data?.attributes?.Waaree_Prime_Background_Image?.data?.attributes?.url
                                        ? data?.attributes?.Waaree_Prime_Background_Image?.data?.attributes?.url
                                        :process.env.NEXT_PUBLIC_NO_IMAGE} loading='lazy'/>
                                        </div>
                                    </Col>
                                </Row>
    
                            </div>
    
                        </div>
                    </Container>
                </section>
            </>
        )
    }
  

}

