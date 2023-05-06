import React from 'react';
import _ from 'lodash'
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const CurrentOpeningSlider= dynamic(() =>  import('./CurrentOpeningSlider'))

const CurrentOpeningSection = (props) => {

    return (
        <section className="section case-study-section current-opening-section" style={{backgroundColor:"#f0faf2"}}>
            <div className="section-inner reveal-fade">
                <Container>
                    <div className="section-wrap">
                        <div className="current-opening-slider-wrap">
                                <CurrentOpeningSlider data={props.data} />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )

}

export default CurrentOpeningSection;