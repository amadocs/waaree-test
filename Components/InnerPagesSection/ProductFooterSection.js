import React from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
const ProductFooterSection = (props) => {

    return (
        <section className="section contact-footer-section">
            <div className="section-inner ">
                <Container>
                    <div className="section-wrap">
                        <Row className="contact-footer-row">
                            <Col md={7}>
                                <h4 className="reveal-fade">{props.contentText}</h4>
                            </Col>
                            <Col md={5} className="btn-wrap reveal-fade">
                                <Link href={props.btnLink} prefetch={false}>
                                <a  className="btn btn-primary">{props.btnText}<i className="fas fa-chevron-right"></i></a>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ProductFooterSection;