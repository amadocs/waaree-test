import _ from 'lodash'
import React from 'react';
import Link from 'next/link'
export default function SocialFixedBtn(props){
        return(
          <div
          className="social-fixed-btn undefined scrolled" id="FixedSocialIcon">
            <ul className="social-icon fixed-btn">
              {props.social_data && 
              props.social_data.map((social) => {
                 return(
                  <li key={social.id}>
                    <Link href={social?.attributes?.Social_Media_Link} prefetch={false} >
                  <a className={`social-link ${social?.attributes?.Class_Name}`} target="_blank" aria-label="Social media icons">
                      <i className={social?.attributes?.Font_Class_Name}></i>
                      <div className="hover-content">
                          <span className="bg-color">Follow @Waaree</span>
                          <span className="grey-bg">Visit Site</span>
                      </div>
                  </a>
                    </Link>
                </li>
                 )
               }               
              )
              }                
            </ul>
          </div>
          )
}