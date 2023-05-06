import _ from 'lodash'
import React from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const CompanyLogoSlider  = dynamic(() =>  import('./aboutsectionInnerComponent/CompanyLogoSlider'))

const AboutCompanyLogoSection = (props) => {
    return (
        <section className="section company-logo-section"> 
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <CompanyLogoSlider companylogo={props.companylogo}/>
                            </div>
                        </Container>
                    </div>
                </section>
    )
}

export default AboutCompanyLogoSection;