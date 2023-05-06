import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() => import('../HomepageSection/SectionInnerComponent/SectionTitle'))

const LetUsKnowSection = (props) => {
    return (
        <section className="section letus-know-section">
            <div className="section-inner">
                <div className="section-wrap">
                    <Container>
                        <SectionTitle sectionTitle={props.data?.attributes?.Let_Us_Help_Section_Title} titleTheme="dark-title" />
                        <Row className="letus-know-row">
                            {props.data?.attributes?.Let_Us_Help_Section.map((val) =>
                                <Col md={4} key={val.id} className="reveal-fade stagger-animation">
                                    <div className="col-inner">
                                        {
                                            props.help_section == "true"
                                                ?
                                                <>
                                                    <div className="icon-wrap">
                                                        <a href={val?.link}>
                                                            <img priority="false" src={val?.Icon_Image?.data?.attributes?.url
                                                                ? val?.Icon_Image?.data?.attributes?.url
                                                                : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Let us know section image" loading='lazy' />
                                                        </a>
                                                    </div>
                                                    <div className="content-wrap">
                                                        <a href={val?.link}>
                                                            <h4>{val?.Title}</h4>
                                                        </a>
                                                        <div className="content-text">
                                                            <p>{val?.Short_Description}</p>
                                                        </div>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="icon-wrap">
                                                        <img priority="false" src={val?.Icon_Image?.data?.attributes?.url
                                                            ? val?.Icon_Image?.data?.attributes?.url
                                                            : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Let us know section image" loading='lazy' />

                                                    </div>
                                                    <div className="content-wrap">
                                                        <h4>{val?.Title}</h4>
                                                        <div className="content-text">
                                                            <p>{val?.Short_Description}</p>
                                                        </div>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )

}

export default LetUsKnowSection;