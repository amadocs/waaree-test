import React from 'react';
import _ from 'lodash'
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const ServicesSingleCol = dynamic(() =>  import('./ServicesSingleCol'))

const ServicesGridSection = (props) => {
    return (
        <section className="section service-grid-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="service-grid-row">
                            <ServicesSingleCol data={props.Service} />
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ServicesGridSection;