import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';

const JobOpportunityRow = () => {
    return (
        <Row className="job-opportunity-row">
            {JobOpportunityRowData.map((val) =>
                <Col md={3} key={val.id} className="col-20 reveal-fade stagger-animation">
                    <a href={val.contetLinkUrl}>
                        <div className="col-inner">
                            <div className="icon-wrap">
                                <img priority="false" src={val.opportunityIcon} alt=""  loading='lazy'/>
                            </div>
                            <div className="content-text">
                                <p>{val.contetText}</p>
                            </div>
                        </div>
                    </a>
                </Col>
            )}
        </Row>
    )

}

export default JobOpportunityRow;