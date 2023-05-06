import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const RadialPieChart = dynamic(() =>  import('../InnerPagesSection/RadialPieChart'))

export default class EmployeeAssociateSection extends Component {
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
                            <SectionTitle sectionTitle={this.props.data?.attributes?.Employee_Association_Section_Title} titleTheme="dark-title" />
                            <div className="alternate-col-wrap">
                                <Row className="image-content-row title-none">
                                <Col lg={6} className="content-col reveal-fade" >
                                    <div className="col-inner">
                                        <div className="content-col-text" dangerouslySetInnerHTML={{__html:this.props.data?.attributes?.Employee_Association_Section_Short_Description}}>                               
                                 </div>
                                    </div>
                                </Col>
                                    <Col lg={6}>
                                        <RadialPieChart data={this.props.data} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
}

