import React from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))

import { useState, useEffect} from 'react';

const ClienteleLogoSection = (props) => {
    const [visibleBlogs, setVisibleBlogs] = useState(5)

    useEffect(async () => {
      setTimeout(() => {
          var tabFirstChild = document.querySelector('.filter-btn-list li:first-child a');
          tabFirstChild.click();
              
      }, 1200);
        },[]);


        const [value,setvalue]=useState('');

          
     
        const handleChange=(e)=>{
            const filterListBtn = document.querySelectorAll('.filter-btn');
            [].forEach.call(filterListBtn, function(item) {
                item.classList.remove('active');
            }); 
            
            e.target.classList.add('active');
          setvalue(e.currentTarget.text)

      }
      const handleClick = () => {
        const btnId = document.querySelector('.load-more');
        btnId.classList.add('hide');

        setVisibleBlogs(props.data?.attributes?.Clientele_Content.length)
   
    }
    return (
        <section className="section clientele-logo-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="company-logo-filter">
                            <div className="filter-btn-wrap">
                                <ul className='filter-btn-list'>
                                {
                                        props.data.map((val) =>{
                                            return(
                                                <li className="reveal-fade stagger-animation" key={val.id}>
                                                <a onClick={handleChange} 
                                                
                                                className="filter-btn btn">{val?.attributes?.Clientele_Logo_Type }</a>
                                            </li>


                                            )
                                        }
                                      
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="company-logo-listing">
                                <Row className="company-logo-row">
                                    {props.data.map((val) =>

                                    {
                                        if(val?.attributes?.Clientele_Logo_Type === value){
                                            return(
                                                <>
                                                {val?.attributes?.Clientele_Content.slice(0, visibleBlogs).map((val) =>{
                                                    return(
                                                        <Col lg={3} md={4} sm={6} className="col-20" key={val.id}>
                                                        <div className="col-inner">
                                                            <img priority="false" src={val?.Clientele_Logo_Image?.data?.attributes?.url} alt="Clientele Logo" loading='lazy' />
                                                        </div>
                                                    </Col>
                                                    )
                                                })}
                                                </>
                                            )
                                        }
                                    }
                                  
                                    )}

                                </Row>
                                <div className="load-more-btn btn-wrap text-center reveal-fade">
                                <button className="btn btn-primary load-more" onClick={handleClick}>Load More<i className="fa fa-chevron-right"></i></button>
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

export default ClienteleLogoSection;