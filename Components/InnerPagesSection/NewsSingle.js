import React from 'react';
import _ from 'lodash'
import {Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from "react";

export default function NewsSingle(props){

    const [visibleBlogs, setVisibleBlogs] = useState(5)
          const handleClick = () => {
            const btnId = document.querySelector('.load-more');
            btnId.classList.add('hide');
            setVisibleBlogs(props.data?.attributes?.Clientele_Content.length)
       
        }
        const dispBlogDate = (blogDate) => {
            if (blogDate) {
                let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
                let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
                let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
                return (<>{day}{'. '}{month}{'. '}{year}</>)
            }
        }
          
        
        return (
            <>
                {props?.data.slice(0,visibleBlogs).map((val) => {
                    return(
                        <div className="news-single" key={val.id}>
                        <div className="news-single-wrap">
                            <Row>
                                <>
                                <Col lg={4} md={5} className="news-image-col">
                                    <div className="col-inner">
                                        <div className="news-info">
                                            <span className="news-date">{dispBlogDate(val?.attributes?.News_Date)}</span>
                                            { !val?.attributes?.News_Tag ? "":
                                            <div className="news-tag-wrap">
                                                <span className="news-tag">{val?.attributes?.News_Tag}</span>
                                            </div>
                                            }
                                            
                                            <div className="news-image">
                                                <img priority="false" src={val?.attributes?.News_Image?.data?.attributes?.url
                                                ? val?.attributes?.News_Image?.data?.attributes?.url
                                                :  process.env.NEXT_PUBLIC_NO_IMAGE} loading='lazy' />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                </>
                               
                                <Col lg={8} md={7} className="news-content-col">
                                    <div className="col-inner">
                                        <h4 className="news-title">
                                            
                                            
                                            <a href={val.newsLinkUrl}>  {val?.attributes?.Title}</a>
                                           
                                        </h4>
                                        <div className="content-text">
                                            <p>{val?.attributes?.News_Excert}</p>
                                        </div>
                                       
                                    {
                                       
                                        !val.attributes.News_Read_More_Url
                                        ?
                                         <div className="read-more-link">
                                         <Link href="/news/[slug]" as={`/news/${val?.attributes?.slug}`} prefetch={false}>
                                              <a className="read-more"> Read More<i className="fa fa-chevron-right"></i></a>
                                         </Link>
                                          </div> 
                                       
                                         :
                                         <div className="read-more-link">                                   
                                            <Link href={val?.attributes.News_Read_More_Url} prefetch={false}>
                                         <a className="read-more" target="_blank"> Read More<i className="fa fa-chevron-right"></i></a>
                                            </Link>
                                         </div>
                                       
                                    }
                                     
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    )
                }          
                   
                )}
                <div className="btn-wrap text-center">
                    <button className="btn btn-primary load-more" onClick={handleClick}>Load More <i className="fa fa-chevron-right"></i></button>
                </div>
                       
            </>
    
        )
    
}


