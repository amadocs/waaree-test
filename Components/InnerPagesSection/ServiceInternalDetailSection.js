import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';

export default class ServiceInternalDetailSection extends Component{

    constructor(props) {
        super(props);

    }

    render(){

        return (
            <section className="section service-detail-section two-col-section service-list-row-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <Row className="service-list-row">
                                {
                                    this.props?.data?.attributes?.Service_List.map((key)=>{
                                        return(
                                            <Col md={6} className="service-list-col reveal-fade" key={key.id}>
                                            <div className="col-inner">
                                                <h4 className="service-list-title">{key?.Service_List_Title}</h4>
                                                <ul className="service-listing">
                                                    {key?.Service_Key_Points.map((serviceListkey) => (
                                                        <li key={serviceListkey?.id}>{serviceListkey?.Key_Value_Title}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        )
    }
}

