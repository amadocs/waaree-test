import React from 'react';
import _ from 'lodash'
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import( './RoundSvgSectionTop'))
const MediaCoverageListing = dynamic(() =>  import('./MediaCoverageListing'))

const MediaCoverageSection = (props) => {

    return (
        <>
            <section className="section press-release-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="press-release-wrapper">                         
                                <div className="press-release-row">
                                    <MediaCoverageListing data={props.News}/>
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

export default MediaCoverageSection;