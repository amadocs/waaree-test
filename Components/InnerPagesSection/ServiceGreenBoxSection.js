import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const ServiceGreenBoxCol = dynamic(() =>  import('./ServiceGreenBoxCol'));
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))

export default class ServiceGreenBoxSection extends Component {
 
    constructor(props) {
        super(props);   
        this.state = {
            data: [],
         
        };
    }
    render(){
        return (
            <section className="section service-greenbox-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <Row className="green-box-row row">
                                {
                                   this.props.data.map((val)=>{
                                       return(
                                        <ServiceGreenBoxCol 
                                        key={val.id}
                                        serviceGreenTitle={val?.attributes?.Title}
                                        serviceCitytype={val?.attributes?.City_Type} />   
                                       )
                                                                           
                                    })
                                }                         
                            </Row>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        )
    }
}

