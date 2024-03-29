import _ from 'lodash'
import React from 'react';
const ProductTypeSliderSection = (props) => {

    return (
        <section className="section product-type-section" style={{backgroundImage: `url(${props.SliderbgSrc})` }}>
            <div className="section-inner">
                    <div className="section-wrap">
                        
                        <div className="product-type-slider-wrap">
                                {props.productSlider}
                        </div>
                    </div>
            </div>
        </section>
    )

}

export default ProductTypeSliderSection;