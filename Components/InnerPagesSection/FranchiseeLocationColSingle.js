import React from 'react';
import _ from 'lodash'
import Link from "next/link";
const FranchiseeLocationColSingle = (props) => {

    return (
        <div className="franchisee-loc-single">
            <div className="location-col-inner">
                <h5 className="location-title">{props.locationTitle}</h5>
                <div className="location-address">
                    <span>{props.locationAddress}</span>

                </div>
                <div className="location-contact-sec">
                    <ul>
                    {
                                props.mobileNumber &&
                                <li>
                                <span className="icon-wrap">
                                    <i className="fas fa-phone-volume"></i>
                                </span>
                                <Link href={`tel:${props.mobileNumber}`} >
                                <a className="contact-info mobile-contact" >
                                    {props.mobileNumber}
                                </a>
                                </Link>
                            </li>
                    }
                    {
                      props.emailId  && 
                      <li>
                            <span className="icon-wrap">
                                <i className="far fa-envelope"></i>
                            </span>
                            <Link href={`mailto:${props.emailId}`}>
                            <a className="contact-info" >
                                {props.emailId}
                            </a>
                            </Link>
                        </li>
                    }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default FranchiseeLocationColSingle;