import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import Link from "next/link";

export default class ProductsSingleCol extends Component{

    constructor(props) {
        super(props);   
    }
    render(){
        return (
            <>
              <section className="section service-grid-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <Row className="service-grid-row">
                            {this.props.data.map((val) =>
                    <Col md={6} className="service-col-single reveal-fade">
                        <div className="col-inner">
                            <div class="service-image">
                            <Link 
                                href="/products/[slug]" 
                                as={`/products/${val?.attributes?.slug}`} 
                                prefetch={false}
                                >
                                <a>
                                    <img priority="false" src={val?.attributes?.Product_Image?.data?.attributes?.url
                                    ? val?.attributes?.Product_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="product image" loading='lazy'  />
                                </a>
                                </Link> 
                            </div>
                            <div className="service-content">
                                <h4 className="service-title">{val?.attributes?.Title}</h4>
                                <div className="service-text">
                                    <p>{val?.attributes?.Short_Description}</p>
                                </div>
                                <div className="read-more-link">

                                <Link 
                                href="/products/[slug]" 
                                as={`/products/${val?.attributes?.slug}`} 
                                prefetch={false}
                                >
                                     <a  className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
                                </Link>                                         
                                    </div>
                            </div>
                        </div>
                    </Col>
                )}
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
           
            </>
        )
    }

}

