import _ from 'lodash'
import React from 'react';
import {Col} from 'react-bootstrap';
import Link from 'next/link';

const AboutValueboxes = (props) =>{
  return (
    <Col xl={props.col} className={`value-box-col reveal-fade ${props.extraclassName}`}>
      <div className="value-col-inner">
        <div className="box-image">
          <Link href={props.valueURL} prefetch={false}>
         <img priority="false" src={props.valueImageSrc} alt="Vision Image" loading='lazy' />
          </Link>
        </div>
        <div className="box-content">
          <h4 className="box-title">{props.valueBoxTitle}</h4>
          <div className="value-text">
            <p>{props.valueText}</p>
          </div>
          <div className="read-more-link">
          <Link href={props.valueURL} prefetch={false}>
            <a className="read-more scrollToId">Read More<i className="fa fa-chevron-right"></i></a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default AboutValueboxes;