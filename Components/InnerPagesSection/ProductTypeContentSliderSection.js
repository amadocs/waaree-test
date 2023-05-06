import React from 'react';
import _ from 'lodash'
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const ProductTypeContentSlider = dynamic(() =>  import('./ProductTypeContentSlider'))

const ProductTypeContentSliderSection = () => {

    return (
        <section className="section product-type-content-section" style={{backgroundColor:"#f0faf2"}}>
            <div className="section-inner">
                    <div className="section-wrap">
                        <Container>
                        <SectionTitle sectionTitle="Inverter" titleTheme="dark-title" />
                        <div className="product-type-content-slider-wrap">
                                <ProductTypeContentSlider />
                        </div>
                        </Container>
                    </div>
            </div>
        </section>
    )

}

export default ProductTypeContentSliderSection;