import _ from 'lodash'
import React from 'react';
import { Col } from 'react-bootstrap';
import Link from 'next/link';

const BlogSingle = (props) => {

  return(
    <Col xl={4} md={6} className="blog-col reveal-fade">
      <div className="col-inner">
        <div className="blog-image">
          <Link href={props.blogLink} prefetch={false}>

            <img priority="false" src={props.blogBg} alt="Blog Image" loading='lazy' />
   
          </Link>
        </div>
        <div className="blog-content">
          <span className="blog-date">{props.blogDate}</span>
          <div className="blog-title">
            <Link href={props.blogLink } prefetch={false}>
            <a>{props.blogTitle}</a>
            </Link>
          </div>
          <div className="read-more-link">
              <Link href={props.blogLink} prefetch={false}>
              <a className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
              </Link>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BlogSingle;