import React,{Component} from 'react';
import _ from 'lodash'
import {Col } from 'react-bootstrap';

export default class WaareePrimeIconBoxCol extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        // const {data} = this.state
        return (
            <>
    
                {this.props.data.map((val) =>
    
                    <Col sm={6} className="icon-box-single reveal-fade stagger-animation" key={val.id}>
                        <div className="col-inner">
                            <div className="icon-wrap">
                                <img priority="false" src={val?.attributes?.Box_Icon_Image?.data?.attributes?.url 
                                        ? val?.attributes?.Box_Icon_Image?.data?.attributes?.url 
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} loading='lazy' />
                            </div>
                            <div className="prime-box-title">
                                <h4><span>{val?.attributes?.Box_Icon_Green_Title}</span> {val?.attributes?.Box_Icon_Title}</h4>
                            </div>
                        </div>
                    </Col>
                )}
    
            </>
        ) 
    }


 
}

