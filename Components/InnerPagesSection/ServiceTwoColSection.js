import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))
import { TwoColSecContentCol, TwoColSecImageCol } from './TwoColSecColSingle';

export default class ServiceTwoColSection extends Component {

    constructor(props) {
        super(props);
    }


    render(){
        return (
            <>
                <section className="section service-detail-section two-col-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <div className="alternate-col-wrap">
                                    {
                                        this.props?.data?.attributes?.Service_Description.map((val)=>{
                                            return(
                                            <Row className="image-content-row" key={val.id}>
                                                <TwoColSecImageCol 
                                                imageColSrc={val?.Service_Image?.data?.attributes?.url} />
                                                <TwoColSecContentCol
                                                 contentColTitle={val?.Service_Title}
                                                  contentColText={val?.Service_Short_Description} />
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


