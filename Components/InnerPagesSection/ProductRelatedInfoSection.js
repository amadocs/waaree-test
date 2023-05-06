import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const ProductServicesSingle = dynamic(() =>  import('./ProductServicesSingle'))
const ButtonDiv = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/ButtonDiv'))

const ProductRelatedInfoSection = (props) => {
    return (
        <section className="section product-info-section" style={{ backgroundImage: `url(${props?.data?.attributes?.Product_Related_Info_Background_Image?.data?.attributes?.url
                ? props?.data?.attributes?.Product_Related_Info_Background_Image?.data?.attributes?.url
                : process.env.NEXT_PUBLIC_NO_IMAGE})` }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="product-info-row">
                            <Col lg={8} className="product-info-col">
                                <div className="col-inner">
                                    <SectionTitle sectionTitle={props?.data?.attributes?.Product_Related_Info_Section_Title} titleTheme="light-title mb-80" />
                                    <Row className="product-service-row p-inner-50">
                                        <ProductServicesSingle data={props?.data.attributes?.Product_Icon_Box_Data} />
                                    </Row>
                                    <div className="btn-wrap">
                                        <ButtonDiv buttonHref={props?.data?.attributes?.Product_Related_Info_Button_Link}
                                        buttonText={props?.data?.attributes?.Product_Related_Info_Button_Text} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="product-image reveal-fade stagger-animation">
                                <div className='col-inner'>
                                    <img priority="false" src={props?.data?.attributes?.Product_Related_Info_Section_Image
                                        ? props?.data?.attributes?.Product_Related_Info_Section_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
        </section>
    )

}

export default ProductRelatedInfoSection;