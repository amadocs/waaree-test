import React from 'react';
import _ from 'lodash'
import {Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

const VideoGallarySection = (props) => {
    return (
        <>
            <section className="section video-gallary-section" style={{backgroundColor:"#fff"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle={props.gallarySectionTitle} titleTheme="dark-title" />
                            <div className="gallary-wrapper">
                                {props.gallaryType}
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default VideoGallarySection;