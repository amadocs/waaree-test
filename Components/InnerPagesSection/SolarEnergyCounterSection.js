import React , {Component} from 'react';
import _ from 'lodash'
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';

export default class SolarEnergyCounterSection extends Component{

    constructor(props) {
        super(props);
    }
    render(){
        return (

            <>
                <section className="section solar-energy-counter-section" style={{ backgroundImage: `url(${this.props.data?.attributes?.Solar_Energy_Counter_Background_Image?.data?.attributes?.url
                ? this.props.data?.attributes?.Solar_Energy_Counter_Background_Image?.data?.attributes?.url
                :  process.env.NEXT_PUBLIC_NO_IMAGE})` }}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <Row className="energy-counter-main-row">
                                    <Col lg={4} className="energy-counter-text-col reveal-fade stagger-animation">
                                        <div className="col-inner">
                                            <h4 className="energy-counter-title" dangerouslySetInnerHTML={{__html:this.props.data?.attributes?.Solar_Energy_Counter_Title}}></h4>
                                            <span>{this.props.data?.attributes?.Solar_Energy_Counter_Sub_Title}</span>
                                        </div>
                                    </Col>
                                    <Col lg={8} className="energy-counter-col">
                                        <div className="col-inner">
                                         {this.props.data?.attributes?.Solar_Energy_Counter_Row.map((val) =>
                                            <div className="energy-counter-single" key={val.id}>
                                                <div className="counter-inner">
                                                    <h4 className="counter-title">
                                                        <span className="coun-anim">{val?.Counter_Number} </span>
                                                        <span>{val?.Counter_Text}<sub>{val?.Sub_Text}</sub></span>
                                                    </h4>
                                                    <span>{val?.Counter_Sub_Text}</span>
                                                </div>
                                            </div>
                                        )}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </section>
            </>
        )
    }
   
}

