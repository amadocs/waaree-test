import _ from 'lodash'
import React from 'react';
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const ContactForm  = dynamic(() =>  import( './ContactForm'))
const RoundSvgSectionTop  = dynamic(() =>  import('../InnerPagesSection/RoundSvgSectionTop'))

const ContactFormSection = () => {

    return (
        <section className="section contact-form-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="HELLO THERE!" titleTheme="dark-title" />
                        <ContactForm />
                    </div>
                </Container>
            </div>
            <RoundSvgSectionTop />
        </section>
    )
}

export default ContactFormSection;