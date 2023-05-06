import React from 'react';
import _ from 'lodash'
import { Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const WaareePrimeHelpCol = dynamic(() =>  import('./WaareePrimeHelpCol'))

const WaareePrimeHelpSection = (props) => {
    return (
        <section className="section contact-help-section two-col-section">
            <div className="section-inner ">
                <div className="section-wrap">
                    <Row className="help-sec-row">
                        <WaareePrimeHelpCol data={props.data} />
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default WaareePrimeHelpSection;