import _ from 'lodash'
import React from 'react';
import Link from "next/link";

const CaseStudySingle = (props) => {
    return (
        <div className={`case-study-single reveal-fade ${props.feauredCaseStudyclassName}`}>
            <div className={props.caseStudyImageclassName}>
                <Link href="/case-study/[slug]" as={`/case-study/${props.caseStudyLink}`}prefetch={false} >
                <a >
                    <img priority="false" src={props.caseStudySrc} alt={props.caseStudyTitle} loading='lazy'/>
                </a>
                    </Link>  
            </div>
            <div className="case-study-content">
                <h5 className="case-study-title">{props.caseStudyTitle}</h5>
                <div className="case-study-text">
                    <p>{props.caseStudyDisc}</p>
                </div>
                <div className="read-more-link">
                    <Link href="/case-study/[slug]" as={`/case-study/${props.caseStudyLink}`} prefetch={false} >
                     <a className="read-more">Read More<i className="fas fa-chevron-right"></i></a>
                    </Link>
                   
                </div>

            </div>
        </div>
    )
}

export default CaseStudySingle;