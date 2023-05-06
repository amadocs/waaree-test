import _ from 'lodash'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('./SectionInnerComponent/SectionTitle'))
const ArchievementGrid = dynamic(() =>  import('./SectionInnerComponent/ArchievementGrid'))

export default function HomeAchievementSection(props){
    const [play, setPlay] = React.useState(false);
          const url = play          
          ? `${props?.Achievement?.attributes?.Why_Choose_Waaree_video}`
          : ``;
          const playClass = play ? "play-video" : '';
          return (
            <div className="section achievement-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="achievement-inner">
                                <SectionTitle sectionTitle="Achievement" titleTheme="dark-title" />
                                <Row className="masonary-row">
                                    <Col xl={6} className="video-grid-left grid-column reveal-fade">
                                        <div className="col-inner">

                                        <div className={`video-player ${playClass}`} id='divload'
                                         style={{backgroundImage:`url(${props?.Achievement?.attributes?.Why_Choose_Waaree_Image?.data?.attributes?.url
                                         ? props?.Achievement?.attributes?.Why_Choose_Waaree_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE})`, loading:'lazy'}}>
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
                                                <h4>{props?.Achievement?.attributes?.Why_Choose_Waaree_Title}</h4>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col xl={6} className="grid-right grid-column">
                                        <div className="col-inner">
                                            <Row className="inner-row">

                                                <ArchievementGrid 
                                                archivementBg={props?.Achievement?.attributes?.Firm_History_Image?.data?.attributes?.url
                                                ? props?.Achievement?.attributes?.Firm_History_Image?.data?.attributes?.url
                                                : process.env.NEXT_PUBLIC_NO_IMAGE}                                               
                                                achievementTitle={props?.Achievement?.attributes?.Firm_History_Title}
                                                achievementText={props?.Achievement?.attributes?.Firm_History_Text}
                                                achievementButton={props?.Achievement?.attributes?.Firm_History_Read_More_Url}
                                                bgtheme="green-bg" />

                                                <ArchievementGrid 
                                                archivementBg={props?.Achievement?.attributes?.Leadership_Image?.data?.attributes?.url
                                                ? props?.Achievement?.attributes?.Leadership_Image?.data?.attributes?.url
                                                : process.env.NEXT_PUBLIC_NO_IMAGE} 
                                                achievementTitle={props?.Achievement?.attributes?.Leadership_Title}
                                                 achievementText={props?.Achievement?.attributes?.Leadership_Text}
                                                 achievementButton={props?.Achievement?.attributes?.Leadership_Read_More_Link}
                                                 bgtheme="pink-bg" />

                                                <ArchievementGrid 
                                                archivementBg={props?.Achievement?.attributes?.Awards_Image?.data?.attributes?.url
                                                ? props?.Achievement?.attributes?.Awards_Image?.data?.attributes?.url
                                                : process.env.NEXT_PUBLIC_NO_IMAGE} 
                                                achievementTitle={props?.Achievement?.attributes?.Awards_Title}
                                                 achievementText={props?.Achievement?.attributes?.Awards_Text}
                                                 achievementButton={props?.Achievement?.attributes?.Awards_Read_More_Link}
                                                 bgtheme="pink-bg" />

                                                <ArchievementGrid 
                                                archivementBg={props?.Achievement?.attributes?.Csr_Image?.data?.attributes?.url
                                                ? props?.Achievement?.attributes?.Csr_Image?.data?.attributes?.url
                                                :  process.env.NEXT_PUBLIC_NO_IMAGE} 
                                                achievementTitle={props?.Achievement?.attributes?.Csr_Title}
                                                 achievementText={props?.Achievement?.attributes?.Csr_Text}
                                                 achievementButton={props?.Achievement?.attributes?.Csr_Read_More_Link}
                                                 bgtheme="green-bg" />       
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="small-round-shape top-left custom-round">
                    <div className="yellow-round small reveal-fade"></div>
                    <div className="green-round big reveal-fade"></div>
                </div>
                <div className="inner-round-shape bottom-right custom-round">
                    <div className="green-round big reveal-fade"></div>
                    <div className="yellow-round small reveal-fade"></div>
                </div>
            </div>
        )
}


