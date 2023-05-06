import React from 'react';
import _ from 'lodash'
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useState} from 'react';

export default function MediaCoverageListing(props){

    const [visibleBlogs, setVisibleBlogs] = useState(2)
   const dispBlogDate = (blogDate) =>{
        if (blogDate) {
            let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
            let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
            let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
            return (<>{day}{'. '}{month}{'. '}{year}</>)
        }
    }

    const getYear = (blogDate) =>{
        if (blogDate) {
        return new Date(blogDate).getFullYear();
        }
    }
 

    const [filterParam, setFilterParam] = useState(getYear(Date()));
    const handleChange=(e)=>{
        setFilterParam(getYear(e.target.value));
      
      }

      const uniqueHeaders=(menu)=>{
        let result=[];
        for (let item of menu){
          if (result.indexOf(getYear(item?.attributes?.News_Date))===-1){
            result.push(getYear(item?.attributes?.News_Date))
          };
        };
        return result
      }

      const handleClick = () => {
        const btnId = document.querySelector('.load-more');
        btnId.classList.add('hide');
        setVisibleBlogs(props.data?.attributes?.Clientele_Content.length)
   
    }
        // const {currentpage,newsPerPage, totalPages, data} = this.state;
        // let items = data.slice(currentpage * newsPerPage, (currentpage + 1) * newsPerPage);
        return (
            <>
               <div className="custom-dropdown mb-80" >
                                <span className="dropdown-title">Filter By Year</span>

                                <div className='custom-dropdown-wrapper'>
                                <select className='DropdownButton'
                                id="searchByYear" title="2022" onClick={handleChange} >     
                                  
                                  {
                                       uniqueHeaders(props.data).map(value =>
                                      
                                        <option>{value}</option>
                                            )
                                            
                                  }                             
                                
                                </select>
                                </div>
                </div>
                { props.data.slice(0, visibleBlogs).map((val) => {
                    if(filterParam == getYear(val?.attributes?.News_Date)){
                        return(
                            <div className="news-single" key={val.id}>
                            <div className="news-single-wrap">
                                <Row>
                                    <>
                                    <Col lg={4} md={5} className="news-image-col">
                                        <div className="col-inner">
                                            <div className="news-info">
                                                <span className="news-date">{dispBlogDate(val?.attributes?.News_Date)}</span>
                                                {
                                                    !val?.attributes?.Media_Coverage_Tag ? "":
                                                    <div className="news-tag-wrap">
                                                    <span className="news-tag">{val?.attributes?.News_Tag}</span>
                                                </div>
                                                }
                                                
                                               
                                                <div className="news-image">
                                                <img priority="false" src={val?.attributes?.News_Image?.data?.attributes?.url
                                                ? val?.attributes?.News_Image?.data?.attributes?.url
                                                :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="News Images"  loading='lazy' />
                                            </div>
                                            </div>
                                        </div>
                                    </Col>
                                    </>
                                   
                                    <Col lg={8} md={7} className="news-content-col">
                                        <div className="col-inner">
                                            <h4 className="news-title">
                                                <a> {val?.attributes?.Title}</a>
                                            </h4>
                                            <div className="content-text">
                                                <p>{val?.attributes?.News_Excert}</p>
                                            </div>
                                           
                                        {
                                           
                                            !val.attributes.Media_Coverage_Read_More_Url
                                            ?
                                             <div className="read-more-link">
                                             <Link href="/media-coverage/[slug]" as={`/media-coverage/${val?.attributes?.slug}`} prefetch={false} >
                                                  <a className="read-more"> Read More<i className="fa fa-chevron-right"></i></a>
                                             </Link>
                                              </div> 
                                           
                                             :
                                             <div className="read-more-link">      
                                             <Link href={val.attributes.News_Read_More_Url} prefetch={false}>
                                             <a className="read-more"  target="_blank"> Read More<i className="fa fa-chevron-right"></i></a>
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
                  
                }           
                   
                )}

                <div className="btn-wrap text-center">
                    <button className="btn btn-primary load-more" onClick={handleClick}>Load More <i className="fa fa-chevron-right"></i></button>
                </div>
            </>
    
        )
 
}