import _ from 'lodash'
import React from 'react';
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('./SectionInnerComponent/SectionTitle'))
const TestimonialSlider = dynamic(() =>  import('./SectionInnerComponent/TestimonialSlider'))

const HomeTestimonialSection = (props) => {
    return (
        <div className="section testimonial-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="service-inner">
                            <SectionTitle sectionTitle="What our client Say" titleTheme="dark-title" />
                            <TestimonialSlider data={props.data} />
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default HomeTestimonialSection;