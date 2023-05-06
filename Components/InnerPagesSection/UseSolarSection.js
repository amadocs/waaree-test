import React , { Component }from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

export default class UseSolarSection extends Component{

    constructor(props) {
        super(props);
        // this.state = {
        //     data: [],
         
        // };
    }

    render(){
        return (
            <>
                <section className="section use-solar-section">
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <SectionTitle
                                 sectionTitle={this.props.data?.attributes?.Use_Solar_Section_Title} titleTheme="dark-title" className="text-center" />
                                <Row className="use-solar-row">
                                    <Col lg={7} className="use-solar-col">
                                        <div className="col-inner">
                                            <div className="content-text" dangerouslySetInnerHTML={{__html:this.props.data?.attributes?.Use_Solar_Section_Short_Description}}>
                                               
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5} className="use-solar-col">
                                        <div className="col-inner">
                                        {this.props.data?.attributes?.Use_Solar_Section_Box_Data.map((val) =>
                                                <div className="use-solar-box" key={val.id}>

                                                    <div className="icon-wrap">
                                                        <img priority="false" src={val?.Icon_Image?.data?.attributes?.url
                                                        ? val?.Icon_Image?.data?.attributes?.url
                                                        :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy'  />
                                                    </div>
                                                    <div className="use-solar-text">
                                                        <h4>{val?.Title}</h4>
                                                        <span>{val?.Short_Description}</span>
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


