import _ from 'lodash'
import React, { Component }  from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('./SectionInnerComponent/SectionTitle'))
const ButtonDiv  = dynamic(() =>  import( './SectionInnerComponent/ButtonDiv'))
const ProductSlider  = dynamic(() =>  import( './SectionInnerComponent/ProductSlider'))

export default class HomeProductSection extends Component{
        constructor(props) {
            super(props);
        }
   
    render(){
    return (
        <div className="section product-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="product-inner">
                            <SectionTitle  sectionTitle={this.props?.data?.attributes?.Title} titleTheme="dark-title" />
                            <div className="product-slider-wrap">
                                <ProductSlider data={this.props?.Product_List} />
                            </div>
                            <div className="view-all-btn text-center reveal-fade">
                                <ButtonDiv buttonText={this.props?.data?.attributes?.Button_Text}
                                                buttonHref={this.props?.data?.attributes?.Button_Link}  />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="small-round-shape top-right custom-round">
                <div className="yellow-round small reveal-fade"></div>
                <div className="green-round big reveal-fade"></div>
            </div>
            <div className="inner-round-shape boottom-left custom-round">
                <div className="green-round big reveal-fade"></div>
                <div className="yellow-round small reveal-fade"></div>
            </div>
        </div>
    )
}
}

