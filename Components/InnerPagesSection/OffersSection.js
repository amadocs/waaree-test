import React,{Component} from 'react';
import _ from 'lodash'
import {Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const OffersSlider  = dynamic(() =>  import('./OffersSlider'))

export default class OffersSection extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <>
                <section className="section offers-slider-section" style={{backgroundColor:"#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle={this.props.data?.attributes?.Offer_Section_Title} titleTheme="dark-title mb-80"/>
                            <div className='offers-slider-wrap'>
                                <OffersSlider data={this.props.data}/>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            </>
        )
    }
 
}

