import React, { Component } from 'react';
import _ from 'lodash'
import { Col } from 'react-bootstrap';
import Link from "next/link";

export default class ServicesSingleCol extends Component {

    constructor(props) {
        super(props);   
    }
    render(){
        return (
            <>
                {this.props.data.map((val) =>
                    <Col md={6} key={val.id} className="service-col-single reveal-fade">
                        <div className="col-inner">
                            <div className="service-image">
                            <Link href="/services/[slug]" as={`/services/${val?.attributes?.slug}`}  prefetch={false}>
                                <a>
                                    <img priority="false" src={val?.attributes?.Service_Image?.data?.attributes?.url
                                    ? val?.attributes?.Service_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="services image" loading='lazy' />
                                </a>
                                </Link> 
                            </div>
                            <div className="service-content">
                                <h4 className="service-title">{val?.attributes?.Title}</h4>
                                <div className="service-text">
                                    <p>{val?.attributes?.Short_Description}</p>
                                </div>
                                <div className="read-more-link">
                                <Link href="/services/[slug]" as={`/services/${val?.attributes?.slug}`}  prefetch={false}>
                                 <a  className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
                                </Link>   
                            </div>
                            </div>
                        </div>
                    </Col>
                )}
            </>
        )
    }
}