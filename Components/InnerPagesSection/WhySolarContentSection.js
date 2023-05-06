import React, { Component } from 'react';
import _ from 'lodash'
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))
const BenifitsRow = dynamic(() =>  import('./BenifitsRow'))

export default class WhySolarContentSection extends Component{

    constructor(props) {
        super(props);
    }
    render(){

        return (
            <>
                <section className="section whysolar-content-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <SectionTitle 
                                sectionTitle={this.props.data?.attributes?.Why_Solar_Content_Title} titleTheme="dark-title" />
                                <div className="content-text" dangerouslySetInnerHTML={{__html:this.props.data?.attributes?.Why_Solar_Content_Description}}>
                                   
                                </div>
                                <BenifitsRow data={this.props.Why_Solar_Benifits_Row} />
                            </div>
                        </Container>
                    </div>
                    <RoundSvgSectionTop />
                </section>
            </>
        )
    }
  
}

