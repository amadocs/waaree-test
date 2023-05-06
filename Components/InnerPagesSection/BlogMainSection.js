import React,{useState,useEffect} from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const BlogSingle = dynamic(() =>  import('./BlogSingle'))
const BlogRightCol = dynamic(() =>  import('./BlogRightCol'))
const RoundSvgSectionTop= dynamic(() =>  import('./RoundSvgSectionTop'))

const BlogMainSection = (props) => {
    const [displayData, setDisplayData] = useState([])

    useEffect(() =>{
        if(props.data.length > 0){
            setDisplayData(props.data)
        }
      },[props.data])

    return (
        <>
            <section className="section Blog-page-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="blog-main-row">
                                <Row>
                                    <Col lg={8} className="blog-listing-col">
                                        <div className="col-inner">
                                            <div className="blog-wrap">
                                                <BlogSingle Items={displayData} blog_count={props.blog_count}/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className="blog-right-col">
                                        <div className="col-inner">
                                            <BlogRightCol data={props.data} setDisplayData={setDisplayData}Blog_Category={props.Blog_Category} />
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

export default BlogMainSection;