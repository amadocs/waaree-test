import React from 'react';
import _ from 'lodash'
import {Col} from 'react-bootstrap';

const TwoColSecContentCol = (props) => {
    return (
        <>
            <Col lg={6} className="content-col reveal-fade" >
                <div className="col-inner">
                    <h4 className="content-col-title">{props.contentColTitle}</h4>
                    <div className="content-col-text" dangerouslySetInnerHTML={{__html:props.contentColText}}>
                      
                    </div>
                </div>
            </Col>
        </>
    )
}
const TwoColSecImageCol = (props) => {
    return (        
        <>
            <Col lg={6} className="image-col reveal-fade">
                <div className="col-inner">
                    <img priority="false" src={props.imageColSrc} alt='Col Image' loading='lazy' />
                </div>
            </Col>
        </>
    )
}
export { TwoColSecContentCol, TwoColSecImageCol};