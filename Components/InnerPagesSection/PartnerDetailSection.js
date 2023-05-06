import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))
const PartnerApplyNowLabel = dynamic(() => import( './PartnerApplyNowLabel'))

export default class PartnerDetailSection extends Component{

    constructor(props) {
        super(props);
    }
    render(){
        return (
            <section className="section partner-detail-section two-col-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="alternate-col-wrap">
                                <Row className="image-content-row">
                                    <SectionTitle 
                                    sectionTitle={this.props.data?.attributes?.Solar_Energy_Title} titleTheme="dark-title" />
                                    <Col lg={5} className="image-col reveal-fade">
                                        <div className="col-inner">
                                            <img priority="false" src={this.props.data?.attributes?.Solar_Energy_Cover_Image?.data?.attributes?.url
                                                ? this.props.data?.attributes?.Solar_Energy_Cover_Image?.data?.attributes?.url
                                                : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Solar energy cover image"  loading='lazy' />
                                        </div>
                                    </Col>
                                    <Col lg={7} className="content-col reveal-fade">
                                        <div className="col-inner" dangerouslySetInnerHTML={{__html:this.props.data?.attributes?.Solar_Energy_Short_Description}}>
                                            
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="image-content-row">
                                    <SectionTitle 
                                    sectionTitle={this.props.data?.attributes?.Channel_Partner_Title} titleTheme="dark-title" />
                                    <Col lg={5} className="image-col reveal-fade">
                                        <div className="col-inner">
                                            <img priority="false" src={this.props.data?.attributes?.Channel_Partner_Cover_Image?.data?.attributes?.url} alt="channel partner images"  loading='lazy'/>
                                        </div>
                                    </Col>
                                    <Col lg={7} className="content-col reveal-fade">
                                        <div className="col-inner">
                                            <p>{this.props.data?.attributes?.Channel_Partner_Short_Description}</p>
                                            <div className="grin-check-listing">
                                                <p>{this.props.data?.attributes?.Benefits_With_Waaree?.Service_List_Title}</p>
                                                <ul>
                                                {
                                                    this.props.data?.attributes?.Benefits_With_Waaree?.Service_Key_Points.map((val) =>{
                                                        return(
                                                            <li key={val.id}>{val.Key_Value_Title}</li>
                                                        )
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <PartnerApplyNowLabel
                            data={this.props.data}
                             />
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        )
    }
}

