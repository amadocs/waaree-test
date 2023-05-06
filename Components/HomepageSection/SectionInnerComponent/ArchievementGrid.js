import _ from 'lodash'
import React from 'react';
import {Col} from 'react-bootstrap';
import Link from 'next/link';
const ArchievementGrid = (props) => {
  return(
    <Col md={6} className={`inner-grid-col reveal-fade ${props.bgtheme}`}>
      <div className="inner-grid-col-wrap">
        <div className="achievement-image">
            <img priority="false"  src={props.archivementBg} alt="Film History" loading='lazy' />
        </div>
        <div className="achievement-content">
          <div className="achievement-content-wrap">
            <h4 className="achievement-title">{props.achievementTitle}</h4>
            <div className="content-text">
              <p>{props.achievementText}</p>
              <div className="read-more-link">
                <Link href={props.achievementButton} prefetch={false}>                  
                <a  className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ArchievementGrid;