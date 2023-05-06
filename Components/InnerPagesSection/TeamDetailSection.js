import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const RoundSvgSectionTop  = dynamic(() =>  import('./RoundSvgSectionTop'))

export default class TeamDetailSection extends Component{
    constructor(props) {
        super(props)    
      }
    render(){
        return (
            <section className="section team-detail-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="team-member-title">
                                <SectionTitle sectionTitle={this.props.data?.attributes?.Title} titleTheme="dark-title" />
                                <span className="team-member-post reveal-fade">{this.props.data?.attributes?.Position}</span>
                            </div>
                            <Row className="team-detail-row">
                                <Col md={4} className="people-image-col reveal-fade stagger-animation">
                                    <div className="col-inner">
                                        <div className='people-image'>
                                            <img priority="false" src={this.props.data?.attributes?.Board_Of_Director_Image?.data?.attributes?.url
                                                ? this.props.data?.attributes?.Board_Of_Director_Image?.data?.attributes?.url
                                            : process.env.NEXT_PUBLIC_NO_IMAGE}  alt='' loading='lazy' />
                                        </div>
                                        <div className="socia-media-wrap">
                                        <ul className="social-icon">
                                            {
                                                this.props.data?.attributes?.Team_Member_Social_Media.map((social) => {
                                                    return(
                                                        <li key={social.id}>
                                                            <Link href={social?.Social_Media_Link}  prefetch={false}>
                                                            <a  className={`social-link ${social?.Class_Name}`} target="_blank">
                                                                <i className={social?.Font_Class_Name}></i></a>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        </div>
                                    </div>  
                                </Col>
                                <Col md={8} className="people-detail-col reveal-fade stagger-animation">
                                    <div className="col-inner">
                                        <div className="team-detail-text">
                                            <div className="team-quotes"> 
                                                <blockquote>{this.props.data?.attributes?.Team_Member_Quotes}</blockquote>
                                            </div>
                                            <div className="content-text">
                                                <h4>Experience</h4>
                                                <p>{this.props.data?.attributes?.Team_Member_Experience_Detail}</p>
                                            </div>
                                            <div className="content-text">
                                                <h4>Education</h4>
                                                <p>{this.props.data?.attributes?.Team_Member_Education_Detail} </p>
                                            </div>
                                        </div>
                                    </div>  
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        )
    }
}

