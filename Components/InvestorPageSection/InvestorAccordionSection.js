import _ from 'lodash'
import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import dynamic from 'next/dynamic';
const AccordionMain = dynamic(()=>import('./AccordionMain'))

const InvestorAccordionSection = (props) => {

    return (
        <section className="section investor-accordion-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="investor-accordion">
                            <Accordion defaultActiveKey="0" id="investorAccordion">
                                <AccordionMain Investor={props.Investor} />
                            </Accordion>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="inner-sec-round small-round-shape top-left custom-round">
                <div className="green-round big reveal-fade"></div>
                <div className="yellow-round small reveal-fade"></div>
            </div>
        </section>
    )
}


export default InvestorAccordionSection;
