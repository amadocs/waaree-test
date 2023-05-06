import React from 'react';
import _ from 'lodash'
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

const ProductThreeColContentSection = (props) => {

    return (
        <section className="section product-type-content-section" style={{ backgroundColor: "#f0faf2" }}>
            <div className="section-inner">
                <div className="section-wrap">
                    <Container>
                        <SectionTitle sectionTitle={props.productsectionTitle}  titleTheme="dark-title" />
                        <div className="product-type-content-wrap">
                            <Row className="product-type-content-row p-inner-50">
                            {props.productContentCol}
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )

}

export default ProductThreeColContentSection;