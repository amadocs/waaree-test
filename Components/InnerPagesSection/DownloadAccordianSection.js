import React from 'react';
import _ from 'lodash'
import { Accordion, Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const DownloadAccordionMain= dynamic(() =>  import('./DownloadAccordianMain'))

const DownloadAccordionSection = (props) => {

    return (
        <section className="section investor-accordion-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="investor-accordion">
                            <Accordion defaultActiveKey="0" id="investorAccordion">
                                <DownloadAccordionMain  Investor={props.Download_Center} />
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


export default DownloadAccordionSection;
