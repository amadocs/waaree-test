import _ from 'lodash'
import React from 'react';
import {Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const ContactHelpColSingle = dynamic(() =>  import('./ContactHelpColSingle'))

const ContactHelpSection = (props) => {
    return (
        <section className="section contact-help-section">
            <div className="section-inner ">
                <div className="section-wrap">
                    <Row className="help-sec-row">
                        <ContactHelpColSingle Data={props.Contact_Help} />
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default ContactHelpSection;