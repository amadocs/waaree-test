import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

export default class SolarEnergySection extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        this.props.data?.attributes?.Solar_Energy_Content_Section.sort((a,b)=>{
            if(a?.Sort_Order > b?.Sort_Order ) return -1;
            if(a?.Sort_Order < b?.Sort_Order ) return 1;
             return 0
        })

        return (
            <>
                <section className="section solar-energy-section" style={{backgroundColor:"#11582b"}}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <SectionTitle 
                                sectionTitle={this.props.data?.attributes?.Solar_Energy_Section_Title} titleTheme="light-title" className="text-center" />
                                <div className="solar-energy-wrapper">
                                <Row className="solar-energy-row">
                                    {this.props.data?.attributes?.Solar_Energy_Content_Section.map((val) =>
                                        <Col md={6} className="solar-energy-col reveal-fade stagger-animation" key={val.id}>
                                            <div className="col-inner">
                                                <div className="energy-image">
                                                    <img priority="false" src={val?.Solar_Energy_Cover_Image?.data?.attributes?.url
                                                        ? val?.Solar_Energy_Cover_Image?.data?.attributes?.url
                                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                                                </div>
                                                <div className="energy-content">
                                                    <h4>{val?.Title}</h4>
                                                    <span>{val?.Content}</span>
                                                </div>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </>
        )
    }
}

