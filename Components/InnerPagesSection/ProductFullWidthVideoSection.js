import React from 'react';
import _ from 'lodash'
import {Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))

const ProductFullWidthVideoSection = (props) => {
    
    const [play, setPlay] = React.useState(false);


    const url = play
          
    ? `${props?.videoSrc}`
    : ``;
    const playClass = play ? "play-video" : '';


    return (
        <>
        <section className={`section video-section ${props.fullWidth}`}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className={"video-wrapper"}>
                                <div className={`video-player ${playClass}`} 
                                            style={{backgroundImage:`url(${props?.videCoverBgSrc})`}} >
                                                    <iframe 
                                                    id="youTubeVideo"
                                                     src={url}
                                                    title="YouTube video player"
                                                    frameBorder="0" 
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                                    allowFullScreen height="100%" width="100%">                                                      
                                                    </iframe>
                                                <div className="video-player-content">
                                                    <div className="play-icon">
                                                    <a className="play-btn" id="playVideo" onClick={() => setPlay(true)}></a>
                                                    </div>                                                
                                                    <div className="video-text">
                                                    <h4>{props?.videoCoverText}</h4>
                                                    </div>
                                                </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default ProductFullWidthVideoSection;