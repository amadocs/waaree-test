import React from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

const UpComingEventSection = (props) => {
       
    const dispBlogDate = (blogDate) => {
        if (blogDate) {
            let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
            let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
            let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
            return (<>{day}{' '}{month}{' '} {year}</>)
        }
    }

    const currentDate = (val) =>{      
    
        return new Date(val).getTime() - new Date().getTime() > 0 ? true : false;
      }
    return (
        <>
          {
            props.data?.attributes?.Events  &&  <section className="section upcoming-event-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle={props.data?.attributes?.Upcoming_Events_Title} titleTheme="dark-title mb-80" />
                        <div className="event-listing-wrap">
                            <div className="event-listing">
                                <Row className="event-listing-row p-inner-50">
                    {
                      props.data?.attributes?.Events.map((val) =>{
    
                        
                           if(currentDate(val?.Event_Date) == true){
                               return(
    
                                               
                                    <Col lg={4} sm={6} className="event-col-single reveal-fade stagger-animation" key={val.key}>
                                        <div className="col-inner">
                                                <img priority="false" src={val?.Logo_Image?.data?.attributes?.url 
                                                ? val?.Logo_Image?.data?.attributes?.url
                                                : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy'  />
                                                    <div className="event-hover-content">
                                                        <h4>{val?.Title}</h4>
                                                        <span>{dispBlogDate(val?.Event_Date)}</span>
                                                    </div>
                                         </div>
                                    </Col>
                                                  
                      
                               )
                           }
                       })
                   }
            
            </Row>
                                                </div>
                                            </div>
                                        </div>
                                        <RoundSvgSectionTop /> 
                                    </Container>
                                </div>
                            </section>
        }
        </>
           
    )
}

export default UpComingEventSection;