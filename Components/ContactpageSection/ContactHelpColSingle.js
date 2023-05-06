import _ from 'lodash'
import React from 'react';
import { Col } from 'react-bootstrap';
import Link from 'next/link';

const ContactHelpSection = (props) => {
    return (
        <>
        {props.Data.map((val) =>
        <Col lg={4} className="help-col-single" key={val.id}>
            <img priority="false" src={val?.attributes?.Cover_Image?.data?.attributes?.url
                ? val?.attributes?.Cover_Image?.data?.attributes?.url
                : process.env.NEXT_PUBLIC_NO_IMAGE} alt={val?.attributes?.Title} loading='lazy' />
                <div className="col-inner">
                    <h3 className="reveal-fade">{val?.attributes?.Title}</h3>
                    <div className="btn-wrap reveal-fade">
                        <Link href={val?.attributes?.Button_Read_More_Url} prefetch={false}>
                        <a  className="btn btn-primary" target="_blank">{val?.attributes?.Button_Text}<i className="fas fa-chevron-right"></i></a>
                        </Link>
                    </div>
                </div>
        </Col>
        )}
        </>
    )
}

export default ContactHelpSection;