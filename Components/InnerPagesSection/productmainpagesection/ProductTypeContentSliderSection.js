import _ from 'lodash'
import React from 'react';
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../../HomepageSection/SectionInnerComponent/SectionTitle'))

const ProductTypeContentSliderSection = (props) => {

    return (
        <section className="section product-type-content-section product-type-content-slider-section" style={{backgroundColor:"#f0faf2"}}>
            <div className="section-inner">
                    <div className="section-wrap">
                        <Container>
                        <SectionTitle sectionTitle={props.productTitle} titleTheme="dark-title" />
                        <div className="product-type-content-slider-wrap">
                                {props.contentTypeSlider}
                        </div>
                        
                        </Container>
                    </div>
            </div>
        </section>
    )

}

export default ProductTypeContentSliderSection;