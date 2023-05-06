import React from 'react';
import _ from 'lodash'
import { Accordion, Container} from 'react-bootstrap';
const SolarCalculatorIframe = () => {

    return (
   
        <section className="section investor-accordion-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="investor-accordion solar-calculator-iframe">
                            <iframe src='https://devgosolar.thesolarlabs.com/waaree' >
                            </iframe>
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


export default SolarCalculatorIframe ;
