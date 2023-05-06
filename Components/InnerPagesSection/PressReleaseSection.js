import React from 'react';
import _ from 'lodash'
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))
const NewsSingle = dynamic(() =>  import('./NewsSingle'))

const PressReleaseSection = (props) => {

    return (
        <>
            <section className="section press-release-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="press-release-wrapper">
                                <div className="press-release-row">
                                    <NewsSingle data={props.News} />
                                </div>                               
                            </div>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default PressReleaseSection;