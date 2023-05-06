import _ from 'lodash'
import React from 'react';
import {Col} from 'react-bootstrap';

const AboutValueboxSingle = (props) =>{
    return(
      <Col md={6} className="boxes-single reveal-fade">
        <div className="column-wrap">
          <h4>{props.CoreValueTitle}</h4>
          <div className="image-wrap">
            <img priority="false" src={props.valueImage} alt={props.CoreValueTitle} loading='lazy'  />
          </div>
          <div className="content-text">
            <p>{props.valueContentText}</p>
          </div>
        </div>
      </Col>
    )
  }

  export default AboutValueboxSingle;