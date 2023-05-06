import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Row } from 'react-bootstrap';
import { TwoColSecContentCol, TwoColSecImageCol } from './TwoColSecColSingle';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import( '../InnerPagesSection/RoundSvgSectionTop'))

export default class CsrBodySection extends Component {

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
                                <div className="alternate-col-wrap">
                                    {
                                        this.props.data.map((val)=>{
                                            return(
                                            <Row className="image-content-row" key={val.id}>
                                                <TwoColSecImageCol 
                                                imageColSrc={val?.attributes?.Sustainable_Living_Image?.data?.attributes?.url
                                                ? val?.attributes?.Sustainable_Living_Image?.data?.attributes?.url
                                                :  process.env.NEXT_PUBLIC_NO_IMAGE} />
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


