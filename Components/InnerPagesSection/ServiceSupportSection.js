import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))
import Link from 'next/link';
const ServiceSupportSection = (props) => {
    return (
        <section className="section job-opportunity-section">
            <div className="section-inner">
                    <div className="section-wrap">
                            <Container>
                            <SectionTitle sectionTitle={props.support?.attributes?.Support_Section_Title} titleTheme="dark-title" />
                                <Row className="job-opportunity-row">
                                    {props.support?.attributes?.Service_Support.map((val) =>
                                        <Col md={3} key={val.id} className="col-20 reveal-fade stagger-animation">
                                            <Link href={val?.Content_Link}  prefetch={false}>
                                            <a target="_blank" >
                                                <div className="col-inner">
                                                    <div className="icon-wrap">
                                                        <img priority="false" src={val?.Icon_Image?.data?.attributes?.url
                                                                ?val?.Icon_Image?.data?.attributes?.url
                                                                : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Service support section images" loading='lazy' />
                                                    </div>
                                                    <div className="content-text">
                                                        <p>{val?.Title}</p>
                                                    </div>
                                                </div>
                                            </a>
                                                                </Link>
                                        </Col>
                                    )}
                                </Row>
                            </Container>
                            <RoundSvgSectionTop />
                    </div>
            </div>
        </section>
    )

}
export default ServiceSupportSection;
