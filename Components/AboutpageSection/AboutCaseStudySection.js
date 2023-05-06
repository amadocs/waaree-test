import _ from 'lodash'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const CaseStudySingle  = dynamic(() =>  import('./aboutsectionInnerComponent/CaseStudySingle'))
import Link from "next/link";

export default function AboutCaseStudySection(props){
    return (
        <section className="section case-study-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                    <SectionTitle sectionTitle={props.pages[4]?.attributes?.Page_Title} titleTheme="dark-title" />
                        <Row className="case-study-row">
                        

                                  <Col lg={5} className="featured-case-column">
                                    {
                                      props.casestudy.map((data,i) =>{
                                        if(i%3 == 0){
                                          return(
                                            <CaseStudySingle  key={data.id}
                                            feauredCaseStudyclassName="featured-col-wrap"
                                             caseStudyImageclassName="featured-image"
                                              caseStudyLink={data?.attributes?.slug}
                                              caseStudySrc={data?.attributes?.Case_Study_Image?.data?.attributes?.url
                                                ? data?.attributes?.Case_Study_Image?.data?.attributes?.url
                                                :process.env.NEXT_PUBLIC_NO_IMAGE}
                                              caseStudyTitle={data?.attributes?.Title}
                                              caseStudyDisc={data?.attributes?.Short_Description}   />
                                          )
                                      }
                                      })
                                    }

                                          
                                  </Col>
                            
                                  <Col lg={7} className="case-study-column">
                                  <div className="case-col-wrap">
                                  {
                                      props.casestudy.map((data,i) =>{
                                        if(i%3 !== 0){
                                          return(
                                        
                                            <CaseStudySingle 
                                            key={data.id}
                                             caseStudyImageclassName="case-study-image"
                                              caseStudyLink={data?.attributes?.Slug}
                                              caseStudySrc={data?.attributes?.Case_Study_Image?.data?.attributes?.url
                                                ? data?.attributes?.Case_Study_Image?.data?.attributes?.url
                                                :process.env.NEXT_PUBLIC_NO_IMAGE}
                                              caseStudyTitle={data?.attributes?.Title}
                                              caseStudyDisc={data?.attributes?.Short_Description}   />
                                                
                                          )
                                      }
                                      })
                                    }
                                    </div>
                                 <div className="btn-wrap reveal-fade">
                                   <Link href="/blog" prefetch={false} >
                                   <a className="btn btn-primary">More Projects<i className="fas fa-chevron-right"></i></a>

                                   </Link>
                                </div>
                                  </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
    
} 


