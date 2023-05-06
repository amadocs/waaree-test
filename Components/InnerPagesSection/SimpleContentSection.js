import React from 'react';
import _ from 'lodash'
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))

const SimpleContentSection = (props) => {
    return (
        <>
            <section className="section simple-content-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="content-text big-text reveal-fade">
                                <p>{props.data?.attributes?.Product_Body_Section}</p>
                            </div>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default SimpleContentSection;