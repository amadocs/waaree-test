import React, { Component } from 'react';
import _ from 'lodash'
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))

export default class OurCultureContentSection extends Component{
    constructor(props) {
        super(props);   
    }

    render(){
        return (
            <>
                <section className="section simple-content-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <div className="content-text reveal-fade">
                                    <p>{this.props.data?.attributes?.Our_Culture_Content_Description} </p>
                                </div>
                            </div>
                        </Container>
    
                        <RoundSvgSectionTop />
                    </div>
                    <div className="content-bg reveal-fade">
                        <img priority="false" src={this.props.data?.attributes?.Our_Culture_Content_Image?.data?.attributes?.url
                            ?  this.props.data?.attributes?.Our_Culture_Content_Image?.data?.attributes?.url
                            :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="content bg"  loading='lazy' />
                    </div>
                </section>
            </>
        )
    }
 
}

