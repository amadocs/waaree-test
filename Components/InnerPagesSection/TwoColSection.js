import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))
import { TwoColSecContentCol, TwoColSecImageCol } from './TwoColSecColSingle';
export default class TwoColSection extends Component {

    constructor(props) {
        super(props);
    }
   render(){
        return (
            <>
                <section className="section two-col-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <SectionTitle sectionTitle="Manufacturing Process" titleTheme="dark-title" />
                                <div className="alternate-col-wrap">
                                    {
                                        this.props.data.map((val)=>{
                                            return(
                                            <Row className="image-content-row" key={val.id}>
                                                <TwoColSecImageCol 
                                                imageColSrc={val?.attributes?.Manufacturing_Image?.data?.attributes?.url
                                                ? val?.attributes?.Manufacturing_Image?.data?.attributes?.url
                                                : process.env.NEXT_PUBLIC_NO_IMAGE} />
                                                <TwoColSecContentCol
                                                 contentColTitle={val?.attributes?.Title}
                                                  contentColText={val?.attributes?.Short_Description} />
                                            </Row>
                                            )
                                        })
                                    }                              
                                </div>
                            </div>
                        </Container>
                    </div>
                    <RoundSvgSectionTop />
                </section>
            </>
        )
    }
}


