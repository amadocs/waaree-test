import _ from 'lodash'
import React from 'react';
import Link from 'next/link'
export default function SocialMediaIcon(props){
          return(
            <ul className="social-icon">
                {
                 props.SocialIcons && props.SocialIcons.map((social) => {
                        return(
                            <li key={social.id}>
                                <Link href={social?.attributes?.Social_Media_Link} prefetch={false} >
                                <a className={`social-link ${social?.attributes?.Class_Name}`} target="_blank" aria-label='Social media links'>
                                    <i className={social?.attributes?.Font_Class_Name}></i></a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
          )
}