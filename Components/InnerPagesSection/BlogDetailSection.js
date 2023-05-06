import React, { useState,useEffect} from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const BlogDetailCol= dynamic(() =>  import('./BlogDetailCol'))
const BlogRightCol = dynamic(() =>  import('./BlogRightCol'))
const RoundSvgSectionTop = dynamic(() =>  import( './RoundSvgSectionTop'))

export default function BlogDetailSection(props){
        const [displayData, setDisplayData] = useState([])


           useEffect(() =>{
           
                setDisplayData(props.data)
            
          },[props.data])
    
        return (
            <>
                <section className="section Blog-detail-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <div className="blog-main-row">
                                    <Row>
                                        <Col lg={8} className="blog-detail-col">
                                            <div className="col-inner">
                                                <div className="blog-wrap">
                                                    <BlogDetailCol data={displayData} search={props.blog} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className="blog-right-col">
                                            <div className="col-inner">
                                                <BlogRightCol data={props.blog} setDisplayData={setDisplayData} Blog_Category={props.blog_category} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
                        <RoundSvgSectionTop />
                    </div>
                </section>
            </>
        )
   
    
   
}

