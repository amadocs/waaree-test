import React from 'react';
import _ from 'lodash'
import { Container,Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const WaareePrimeIconBoxCol = dynamic(() =>  import('./WaareePrimeIconBoxCol'))
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))

const WaareePrimeIconBoxSection = (props) => {

    return (
        <>
            <section className="section prime-icon-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            {props.iconBoxSimpleContent}
                            <Row className="icon-box-row">
                                <WaareePrimeIconBoxCol data={props.Waaree_Box_Icon} />
                            </Row>
                            {props.applyNowBanner}
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default WaareePrimeIconBoxSection;