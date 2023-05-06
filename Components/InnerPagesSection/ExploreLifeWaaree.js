import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
import Link from 'next/link';
const ExploreLifeWaaree = (props) => {
    return (
        <section className="section explore-waaree-section" style={{ backgroundColor: "#733256" }}>
            <div className="section-inner">
                <div className="section-wrap">
                    <Container>
                    <SectionTitle sectionTitle={props.data?.attributes?.Explore_Waaree_Section_Title} titleTheme="light-title" />
                        <Row className="explore-waaree-row">
                            <Col lg={6} className="explore-waaree-text-col">
                                <div className="col-inner">
                                <div className="content-text reveal-fade" dangerouslySetInnerHTML={{__html:props.data?.attributes?.Explore_Waaree_Section_Short_Description}}>
                                           
                                </div>
                                </div>
                            </Col>
                            <Col lg={6} className="explore-waaree-image-col">
                                <div className="col-inner">
                                    <div className="explore-waaree-masonary">
                                    {props.data?.attributes?.Explore_Life_Section.map((val) =>
                    <div className="grid-col-single reveal-fade stagger-animation" key={val.id}>
                        <div className="col-inner">
                            <Link href={val?.Content_Link} prefetch={false}>
                            <a>
                            <div className="grid-bg">
                                <img priority="false"  src={val?.Icon_Image?.data?.attributes?.url} alt="Explore Life section images"  loading='lazy'  />
                                </div>
                                <h4 className="grid-title">{val?.Title}</h4>
                            </a>
                             
                            </Link>
                        </div>
                    </div >
                )}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )

}

export default ExploreLifeWaaree;