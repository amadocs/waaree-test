import _ from 'lodash'
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('./SectionInnerComponent/SectionTitle'))
const ButtonDiv  = dynamic(() =>  import( './SectionInnerComponent/ButtonDiv'))
const ServiceSlider  = dynamic(() =>  import( './SectionInnerComponent/ServiceSlider'))

export default class HomeServiceSection extends Component{
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <div className="section service-section">
                        <div className="fp-fixed-inr">
                            <div className="fp-fixed-content" style={{backgroundColor:"#effff3"}}>
                                {
                                    this.props?.data?.attributes?.Background_Image?.data?.attributes?.url &&
                                <div className="bg-image" style={{backgroundImage:`url(${this.props?.data?.attributes?.Background_Image?.data?.attributes?.url
                                    ?this.props?.data?.attributes?.Background_Image?.data?.attributes?.url: process.env.NEXT_PUBLIC_NO_IMAGE})`}}></div>
                                }
                            </div>
                          </div>
                          <div className="section-inner">
                                <Container>
                                    <div className="section-wrap">
                                      <div className="service-inner">
                                          <SectionTitle 
                                          sectionTitle={this.props?.data?.attributes?.Title} titleTheme="light-title" />
                                          <ServiceSlider serviceSlider={this.props?.Service_List} />
                                          <div className="view-all-btn text-center reveal-fade">
                                                <ButtonDiv buttonText={this.props?.data?.attributes?.Button_Text}
                                                buttonHref={this.props?.data?.attributes?.Button_Link} />
                                          </div>
                                      </div>
                                    </div>
                                  </Container>
                          </div>
                          <div className="inner-round-shape top-right custom-round">
                              <div className="green-round big reveal-fade"></div>
                              <div className="yellow-round small reveal-fade"></div>
                          </div>
            </div>
        )
    }

}

