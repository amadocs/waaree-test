import _ from 'lodash'
import React from 'react';
import Link from 'next/link';
const ButtonDiv = (props) =>{
    return(
        <Link href={props.buttonHref} prefetch={false}>
        <a  className="btn btn-primary">{props.buttonText}<i className="fa fa-chevron-right"></i></a>
        </Link>
    )
}

export default ButtonDiv;