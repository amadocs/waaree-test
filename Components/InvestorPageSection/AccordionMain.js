import _ from 'lodash'
import React, { Component } from 'react';
import { Accordion,Col } from 'react-bootstrap';
import Link from 'next/link'
export default class AccordionMain extends Component{


    constructor(props) {
        super(props);
    }
    render(){
        this.props.Investor.sort((a,b)=>{ 
            if(a?.attributes?.createdAt > b?.attributes?.createdAt) return -1;
            if(a?.attributes?.createdAt <  b?.attributes?.createdAt) return 1;
             return 0
        })

        this.props.Investor?.attributes?.Accordion_Body.sort((a,b)=>{
            if(a?.Accordian_File?.data?.attributes?.createdAt > b?.Accordian_File?.data?.attributes?.createdAt ) return -1;
            if(a?.Accordian_File?.data?.attributes?.createdAt < b?.Accordian_File?.data?.attributes?.createdAt ) return 1;
             return 0
        })
              return (
            <>
            {
                this.props.Investor.map((investor)=>{
                    return (
                     <>
                         <Accordion.Item eventKey={investor.id} key={investor.id} className="reveal-fade">
                            <Accordion.Header className="h4">{investor?.attributes.Accordion_Title}<span className="plus-icon"></span></Accordion.Header>
                               <Accordion.Body>
                                    <div className="card-body">
                                        <div className="accordion-boxes-row row">
                                                {investor?.attributes?.Accordion_Body.map((val)=>{
                                                return (
                                                    <>
                                                        <Col lg={3} sm={6} className="accordion-box-single" key={val.id}>
                                                            <div className="column-inner">
                                                                <div className="pdf-icon">
                                                                <img priority="false" src="https://d2ehz7r19zq528.cloudfront.net/pdf_icon_888bc716b1.png" alt="PDF ICON" loading='lazy' />
                                                                </div>
                                                                <div className="column-content">
                                                                    <h5 className="pdf-title">{val?.Accordion_Title}</h5>
                                                                </div>
                                                                <div className="download-btn">
                                                                <Link href={val?.Accordian_File?.data?.attributes?.url}  prefetch={false}>
                                                                <a   className="btn" download target="_blank">
                                                                Download<i className="fas fa-arrow-down">
                                                                        </i></a>
                                                                </Link>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </>
                                                )
                                                })}
                                        </div>
                                    </div>
                               </Accordion.Body>
                        </Accordion.Item>
                    </>
                                )
                })
            }       
            </>
    )
    }
    
}
