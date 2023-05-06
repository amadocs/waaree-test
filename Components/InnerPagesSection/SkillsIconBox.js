import React, { Component } from 'react';
import _ from 'lodash'
import {Col} from 'react-bootstrap';

export default class SkillsIconBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
         
        };
    }
    render(){
        return (
            <>
    
                {this.props.data?.attributes?.Services.map((val) =>
    
                <Col lg={3} sm={6} className="skill-icon-box icon-box-single reveal-fade stagger-animation">
                    <div className="col-inner">
                        <div className="icon-box-top">
                            <div className="icon-wrap">
                                <img priority="false" src={val?.Service_Image?.data?.attributes?.url
                                ? val?.Service_Image?.data?.attributes?.url
                                :  process.env.NEXT_PUBLIC_NO_IMAGE } alt="Skill icon images" loading='lazy' />
                            </div>
                            <div className="skills-title">
                                <h5>{val?.Service_Title}</h5>
                            </div>
                        </div>
                        <div className="icon-box-content">
                            <p>{val?.Service_Short_Description}</p>
                        </div>
    
                    </div>
                </Col>
                )}
    
    
            </>
        )
    }
   
}
