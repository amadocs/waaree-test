import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const SkillsIconBox  = dynamic(() =>  import('./SkillsIconBox'))
const ButtonDiv  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/ButtonDiv'))

export default class SkillsIconBoxSection extends Component{
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <>
                <section className="section skills-icon-section" style={{ backgroundColor: "#11582c" }}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <SectionTitle sectionTitle={this.props.data?.attributes?.Skill_To_Service_TItle} titleTheme="light-title mb-80" />
                                <Row className="icon-box-row p-inner-50">
                                   {this.props.data?.attributes?.Services.map((val) =>

                                        <Col lg={3} sm={6} className="skill-icon-box icon-box-single reveal-fade stagger-animation" key={val.id}>
                                            <div className="col-inner">
                                                <div className="icon-box-top">
                                                    <div className="icon-wrap">
                                                        <img priority="false" src={val?.Service_Image?.data?.attributes?.url
                                                           ? val?.Service_Image?.data?.attributes?.url
                                                        :  process.env.NEXT_PUBLIC_NO_IMAGE } loading='lazy' />
                                                    </div>
                                                    <div className="skills-title">
                                                        <h5>{val?.Service_Title}</h5>
                                                    </div>
                                                </div>
                                                <div className="icon-box-content">
                                                    <p>{val?.Service_Short_Description}</p>
                                                </div>

                                            </div>
                                        </Col>
                                    )}

                                </Row>
                                <div className="btn-wrap text-center">
                                    <ButtonDiv buttonHref={this.props.data?.attributes?.Button_Link} buttonText={this.props.data?.attributes?.Button_Text} />
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </>
        )
    }
 
}

;