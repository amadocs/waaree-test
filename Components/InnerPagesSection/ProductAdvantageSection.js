import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

const ProductAdvantageSection = (props) => {

    return (
        <section className="section product-advantage-section two-col-section" style={{ backgroundColor: "#f0faf2" }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="product-info-row">
                            <Col lg={8} className="content-col">
                                <div className="col-inner">
                                    <SectionTitle sectionTitle={props?.data?.attributes?.Product_Advantage_Section_Title} titleTheme="dark-title mb-80" />

                                    <div className="advantage-list-wrap">
                                        <ul className="no-type-list custom-two-grid">
                                            {props?.data?.attributes?.Product_Advantages.map((val) =>
                                                <li key={val?.id} className="reveal-fade stagger-animation">{val?.Key_Value_Title}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="image-col stagger-animation">
                                <div className='col-inner'>
                                    <img priority="false" src={props?.data?.attributes?.Icon_Image?.data?.attributes?.url
                                        ? props?.data?.attributes?.Icon_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Product advantages image"  loading='lazy' />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
        </section>
    )

}

export default ProductAdvantageSection;