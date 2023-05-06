import React, { Component } from 'react';
import _ from 'lodash'
import { Col, Row } from 'react-bootstrap';

export default class BenifitsRow extends Component {

    constructor(props) {
        super(props);
    }
   render(){
    return (
        <>
            <Row className="benifits-row">
                {this.props.data.map((val) =>
                    <Col md={4} className="benifit-col reveal-fade stagger-animation" key={val.id}>
                        <div className="col-inner" style={{backgroundImage:`url(${val?.attributes?.Background_Image?.data?.attributes?.url
                        ? val?.attributes?.Background_Image?.data?.attributes?.url : process.env.NEXT_PUBLIC_NO_IMAGE})`}}>
                            <div className='icon-wrap'>
                                <img priority="false" src={val?.attributes?.Icon_Image?.data?.attributes?.url
                                ?val?.attributes?.Icon_Image?.data?.attributes?.url :  process.env.NEXT_PUBLIC_NO_IMAGE} alt={val?.attributes?.Title} loading='lazy' />
                            </div>
                            <div className="benifit-content">
                                <h4>{val?.attributes?.Title}</h4>
                                <div className="content-text">
                                    <p>{val?.attributes?.Short_Description}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
   }
}

