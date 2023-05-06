import _ from 'lodash'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

export default function AboutCorevalueSection(props){
    
  const AboutValueboxSingle = (props) =>{
    return(
      <>
        <Col md={6} className="boxes-single reveal-fade">
        <div className="column-wrap">
          <h4>{props.CoreValueTitle}</h4>
          <div className="image-wrap">
            <img priority="false" src={props.valueImage} alt={props.CoreValueTitle} loading='lazy' />
          </div>
          <div className="content-text">
            <p>{props.valueContentText}</p>
          </div>
        </div>
      </Col>
      </>
    
    )
  }

  return(
    <section className="section core-value-section">
    <div className="section-inner core-value-main" id="coreValueSec">
        <Container>
            <div className="section-wrap">
                <Row className="title-row">
                    <Col lg={3} md={4} className="title-wrap">
                        <SectionTitle sectionTitle={props?.CoreValues?.attributes?.About_Section_Title} titleTheme="light-title" />
                    </Col>
                    <Col lg={9} md={8} className="subtitle-wrap reveal-fade">
                        <p>{props?.CoreValues?.attributes?.Short_Description}</p>
                    </Col>
                </Row>
                <Row className="core-value-row">
                    {
                      props?.CoreValues?.attributes?.Core_Value.map((corevalue)=>{
                            return(                             
                                <Col key={corevalue.id} lg={3} className="core-value-single reveal-fade" >
                                    <div className="core-value-inner">
                                        <div className="icon-wrap">
                                            <img  priority="false" src={corevalue?.CoreValue_Icon?.data?.attributes?.url
                                            ?   corevalue?.CoreValue_Icon?.data?.attributes?.url
                                            :process.env.NEXT_PUBLIC_NO_IMAGE} alt={corevalue?.Title} loading='lazy' />
                                        </div>
                                    <h5 className="core-value-title">{corevalue?.Title}</h5> 
                                    </div>
                                </Col>                            
                            )
                        })
                    }
               
           
            </Row>
            </div>
        </Container>
    </div>
    <div className="section-inner core-value-boxes" id="visionMissionSec">
        <Container>
            <div className="section-wrap">
            <Row className="value-boxes-row">
                <AboutValueboxSingle 
                id="visionValueSec"
                 CoreValueTitle={props.AboutBlock.attributes.Vision_Title}
                  valueImage={props.AboutBlock.attributes.Vision_Image
                     ?   props.AboutBlock.attributes.Vision_Image.data.attributes.url
                    :process.env.NEXT_PUBLIC_NO_IMAGE}
                  valueContentText={props.AboutBlock.attributes.Vision_Text} />
                    <AboutValueboxSingle 
                    id="missionValueSec"
                    CoreValueTitle={props.AboutBlock.attributes.Mission_Title}
                    valueImage={props.AboutBlock.attributes.Mission_Image
                      ?  props.AboutBlock.attributes.Mission_Image.data.attributes.url
                      :process.env.NEXT_PUBLIC_NO_IMAGE}
                    valueContentText={props.AboutBlock.attributes.Mission_Text} />
            </Row>
            </div>
        </Container>
        <div className="small-round-shape top-right custom-round">
            <div className="green-round big reveal-fade"></div>
            <div className="yellow-round small reveal-fade"></div>
        </div>
    </div>
</section>
  )
}
