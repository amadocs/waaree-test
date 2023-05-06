import _ from 'lodash'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function ContactLocationSection(props){
                return (
                    <section className="section company-location-section" style={{ backgroundColor: "#effff3" }}>
                        <div className="section-inner ">
                            <Container className="container">
                                <div className="section-wrap">
                                    <Row className="location-sec-row">
            
                                        {
                                            props.Data.map((val)=>{
                                                return(
                                                <Col lg={6} className="location-col-single reveal-fade" key={val.id}>
                                                    <div className="col-inner">
                                                        <Row className="location-inner-row">
                                                            <Col sm={5} className="image-col">
                                                                <div className="location-col-inner">
                                                                    <img priority="false" src={val?.attributes?.Location_Image?.data?.attributes?.url
                                                                        ? val?.attributes?.Location_Image?.data?.attributes?.url
                                                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Company Image" loading='lazy' />
                                                                </div>
                                                            </Col>
                                                            <Col sm={7} className="location-content-col">
                                                                <div className="location-col-inner">
                                                                    <h5 className="location-title">{val?.attributes?.Title}</h5>
                                                                    <div className="location-address" dangerouslySetInnerHTML={{__html:val?.attributes?.Address}}>
                                                                    </div>
                                                                    <div className="location-contact-sec">
                                                                        <ul>
                                                                            <li>
                                                                                <span className="icon-wrap">
                                                                                    <i className="fas fa-phone-volume"></i>
                                                                                </span>
                                                                                <Link href={`tel:${val?.attributes?.Contact_Number}`} prefetch={false} >
                                                                                <a className="contact-info mobile-contact" >
                                                                                    {val?.attributes?.Contact_Number}
                                                                                </a>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <span className="icon-wrap">
                                                                                    <i className="far fa-envelope"></i>
                                                                                </span>
                                                                                <Link href={`mailto:${val?.attributes?.Email}`} prefetch={false} > 
                                                                                <a className="contact-info" >
                                                                                    {val?.attributes?.Email}
                                                                                </a>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                                )
                                            })
                                        }
                                      
                                    </Row>
                                </div>
                            </Container>
                        </div>
                    </section>
                )
}

