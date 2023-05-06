import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const MediaCoverageDetailCol = dynamic(() =>  import( './MediaCoverageDetailCol'))
const RoundSvgSectionTop = dynamic(() =>  import( './RoundSvgSectionTop'))

export default class MediaCoverageDetailSection extends Component {

    render(){
        return (
            <>
                <section className="section Blog-detail-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <div className="blog-main-row">
                                    <Row>
                                        <Col lg={12} className="blog-detail-col">
                                            <div className="col-inner">
                                                <div className="blog-wrap">
                                                    <MediaCoverageDetailCol data={this.props.data}/>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
                        <RoundSvgSectionTop />
                    </div>
                </section>
            </>
        )
    }
    
   
}

