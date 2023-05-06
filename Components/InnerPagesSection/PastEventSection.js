import React from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
import { useState } from 'react';

const PastEventSection = (props) => {
    const [visibleEvent, setvisibleEvent] = useState(3)
       
    const dispBlogDate = (blogDate) => {
        if (blogDate) {
            let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
            let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
            let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
            return (<>{day}{' '}{month}{' '} {year}</>)
        }
    }

    const handleClick = () => {
        const btnId = document.querySelector('.load-more');
        btnId.classList.add('hide');

        setvisibleEvent(props.data?.attributes?.Events.length)
    }
    const currentDate = (val) =>{

       
      
        return new Date(val).getTime() - new Date().getTime() > 0 ? true : false;
      }
      

    return (
        <section className="section past-event-section">
        <div className="section-inner">
            <Container>
                <div className="section-wrap">
                    <SectionTitle sectionTitle={props.data?.attributes?.Pass_Event_Title} titleTheme="dark-title mb-80" />
                    <div className="event-listing-wrap">
                        <div className="event-listing">
                            <Row className="event-listing-row p-inner-50">
                {
                   props.data?.attributes?.Events.slice(0,visibleEvent).map((val) =>{

                    
                       if(currentDate(val?.Event_Date) !== true){

                           return(

                                           
                                <Col lg={4} sm={6} className="event-col-single stagger-animation" key={val.key}>
                                    <div className="col-inner">
                                            <img priority="false" src={val?.Logo_Image?.data?.attributes?.url 
                                            ? val?.Logo_Image?.data?.attributes?.url
                                            : process.env.NEXT_PUBLIC_NO_IMAGE} alt="event content image"  loading='lazy'/>
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
        <div className="load-more-btn btn-wrap text-center reveal-fade">
        <button className="btn btn-primary load-more" onClick={handleClick}>Load More <i className="fa fa-chevron-right"></i></button>                             </div>
                                            </div>
               </div>
        </div>                            
                               
        </Container>
        </div>
        </section>

            
    )
}

export default PastEventSection;

