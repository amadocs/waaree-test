import _ from 'lodash'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('./SectionInnerComponent/SectionTitle'))
const ButtonDiv = dynamic(() =>  import('./SectionInnerComponent/ButtonDiv'))
const AboutValueboxes= dynamic(() =>  import('./SectionInnerComponent/AboutValueboxes'))
export default function HomeAboutSection(props){  
        return(               
            <div className="section about-section" style={{ backgroundColor: "#11582c" }} id="aboutSection">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row>
                            <Col xl={6} className="about-left-column">
                                <div className="column-wrap">
                                    <div className="about-content">
                                        <SectionTitle sectionTitle={props?.AboutBlock?.attributes?.Title} titleTheme="light-title" />
                                        <div className="about-content-text reveal-fade">
                                            
                                        <div className="year-content" dangerouslySetInnerHTML={{ __html:props?.AboutBlock?.attributes?.Sub_Text}}>
                                            </div>
                                            <div className="about-text" dangerouslySetInnerHTML={{ __html:props?.AboutBlock?.attributes?.Description}}>
                                            </div>
                                            <div className="btn-wrap">
                                                
                                                <ButtonDiv buttonHref={props?.AboutBlock?.attributes?.Read_More_Url} buttonText="Read More" />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} className="about-right-column">
                                <div className="column-wrap about-value-box">
                                    <Row>
                                        <AboutValueboxes col="6" valueURL={props?.AboutBlock?.attributes?.Vision_Read_More_Url}
                                        valueImageSrc={props?.AboutBlock?.attributes?.Vision_Image?.data?.attributes?.url
                                        ?props?.AboutBlock?.attributes?.Vision_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE}
                                        valueText={props?.AboutBlock?.attributes?.Vision_Text} 
                                        valueBoxTitle={props?.AboutBlock?.attributes?.Vision_Title} />

                                        <AboutValueboxes col="6" valueURL={props?.AboutBlock?.attributes?.Mission_Read_More_Url}
                                        valueImageSrc={props?.AboutBlock?.attributes?.Mission_Image?.data?.attributes?.url
                                        ? props?.AboutBlock?.attributes?.Mission_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE}
                                         valueText={props?.AboutBlock?.attributes?.Mission_Text}
                                         valueBoxTitle={props?.AboutBlock?.attributes?.Mission_Title} />

                                        <AboutValueboxes col="12" extraclassName="yellow-bg" valueURL={props?.AboutBlock?.attributes?.Value_Read_More_Url}
                                        valueText={props?.AboutBlock?.attributes?.Value_Text}
                                        valueBoxTitle={props?.AboutBlock?.attributes?.Value_Title} />
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="big-round-shape reveal-fade">
                <div className="inner-round-shape"></div>
            </div>
        </div>
        )
    }