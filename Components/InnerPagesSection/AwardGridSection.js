import React, { Component }  from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import( './RoundSvgSectionTop'))

export default class ImageGallary extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <section className="section award-grid-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <Row className="awards-grid-row">
                            {
                                this.props.data.map((val)=>{
                                    return(
                                        <Col lg={4} sm={6} key={val.id} className="award-grid-single reveal-fade">
                                        <div className="col-inner">
                                            <div class="grid-image">
                                                <img priority="false" src={val?.attributes?.Award_Image?.data?.attributes?.url
                                                    ? val?.attributes?.Award_Image?.data?.attributes?.url
                                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Award Images" loading='lazy' />
                                            </div>
                                            <div className="grid-content-wrap">
                                                <h4 class="grid-title">{val?.attributes?.Title}</h4>
                                                <div class="grid-text">
                                                    <p>{val?.attributes?.Short_Description}</p>
                                                </div>
                                            </div>
        
                                        </div>
                                    </Col>
                                    )
                                })
                            }                        
                            </Row>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        )

    }
}

