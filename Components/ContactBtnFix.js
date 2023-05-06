import _ from 'lodash'
import React from 'react';
import Link from 'next/link'
const ContactBtnFix = (props) =>{
    return(
      <div className="fixed-btn contact-fixed-btn">
        <ul>
          {props.contact_data && props.contact_data.map((val) =>
            <li key={val.id}>
              <div className="fixed-btn-div"><i className={val?.attributes?.Contact_Icon_ClassName}></i></div>
              <Link href={val?.attributes?.contact_Icon_URL} prefetch={false} >
              <a  className="hover-content">
                {val?.attributes?.Contact_Icon_Text}
              </a>
              </Link>
            </li>
          )}
          
        </ul>
      </div>
    )
}

export default ContactBtnFix;
