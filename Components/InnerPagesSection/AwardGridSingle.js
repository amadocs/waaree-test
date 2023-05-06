import React from 'react';
import _ from 'lodash'
import {Col} from 'react-bootstrap';

const AwardGridSingle = (props) => {

        return (
            <>
                <Col lg={4} sm={6} className="award-grid-single reveal-fade">
                    <div className="col-inner">
                        <div class="grid-image">
                            <img priority="false" src={props.AwardGridImageBg} alt="Award Images" loading='lazy'/>
                        </div>
                        <div className="grid-content-wrap">
                            <h4 class="grid-title">{props.awardGridTitle}</h4>
                            <div class="grid-text">
                                <p>{props.awardGridText}</p>
                            </div>
                        </div>

                    </div>
                </Col>
            </>
        )
}

export default AwardGridSingle;