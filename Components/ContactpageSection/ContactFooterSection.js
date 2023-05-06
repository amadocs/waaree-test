import _ from 'lodash'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const ContactFooterSection = (props) => {
    return (
        <section className="section contact-footer-section">
            <div className="section-inner ">
                <Container>
                    <div className="section-wrap">
                        <Row className="contact-footer-row">
                            <Col md={7}>
                                <h4 className="reveal-fade">{props?.Data?.attributes?.Title}</h4>
                            </Col>
                            <Col md={5} className="btn-wrap reveal-fade">
                                <Link href={props?.Data?.attributes?.Button_Read_More_Url} prefetch={false} >
                                <a className="btn btn-primary" target="_blank">{props?.Data?.attributes?.Button_Text}<i className="fas fa-chevron-right"></i></a>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ContactFooterSection;