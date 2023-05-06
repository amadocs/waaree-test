import _ from 'lodash'
import React from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop  = dynamic(() =>  import('../InnerPagesSection/RoundSvgSectionTop'))

export default function AboutExcellenceSection(props){
  const [play, setPlay] = React.useState(false);
    const url = play
          
    ? `${props.AboutBlock?.attributes?.Video_Link}`
    : ``;
     const playClass = play ? "play-video" : '';


    return(
        <section className="section excellence-section">
        <div className="section-inner">
            <Container>
                <div className="section-wrap">
                    <div className="row">
                        <div className="col-lg-7 left-text">
                            <div className="col-inner">

                                <div className="year-content" dangerouslySetInnerHTML={{ __html:props?.AboutBlock?.attributes?.Title}}>
                                 </div>
                                <div className="content-text reveal-fade">
                                   <p>{props?.AboutBlock?.attributes?.Short_Description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 video-grid-right reveal-fade">
                            <div className="col-inner">
                            <div className={`video-player ${playClass}`} 
                                         style={{backgroundImage:`url(${props?.AboutBlock?.attributes?.Video_Image?.data?.attributes?.url 
                                            ?   props?.AboutBlock?.attributes?.Video_Image?.data?.attributes?.url
                                            :process.env.NEXT_PUBLIC_NO_IMAGE
                                        })`}} >
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
                                         <h4>{props?.AboutBlock?.attributes?.Video_Title}</h4>
                                    </div>
                            </div>                            
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>

            <RoundSvgSectionTop />
        </div>
    </section>
    )
    }


// const AboutExcellenceSection = (props) => {
//     return (
//         <section className="section excellence-section">
//             <div className="section-inner">
//                 <Container>
//                     <div className="section-wrap">
//                         <div className="row">
//                             <div className="col-lg-7 left-text">
//                                 <div className="col-inner">
//                                     <AboutYearSec />
//                                     <div className="content-text reveal-fade">
//                                         <p>Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest <a href="https://www.waaree.com/solar-panels">Solar panel</a> manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 380 locations nationally and 20 countries internationally.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-5 video-grid-right reveal-fade">
//                                 <div className="col-inner">
//                                     <VideoPlayer videoSrc="https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1"/>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         </section>
//     )
// }

// export default AboutExcellenceSection;