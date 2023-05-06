import React from 'react';
import _ from 'lodash'
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const EnquiryForm  = dynamic(() =>  import('./EnquiryForm'))
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))

const EnquiryFormSection = () => {

    return (
        <section className="section enquiry-form-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="HELLO THERE!" titleTheme="dark-title" />
                        <p>You are just a step away from going solar. Please help us with the below details and our team shall getting touch with you shortly.</p>
                        <EnquiryForm />
                    </div>
                </Container>
            </div>      
            <RoundSvgSectionTop />
        </section>
    )
}

export default EnquiryFormSection;