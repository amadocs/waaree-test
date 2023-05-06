import React from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))
import Link from "next/link";
const JobOpportunitySection = (props) => {

    return (
        <section className="section job-opportunity-section">
            <div className="section-inner">
                    <div className="section-wrap">
                            <Container>
                            <SectionTitle sectionTitle={props.data?.attributes?.Job_Opportunities_Title} titleTheme="dark-title" />
                                <Row className="job-opportunity-row">
                                    {props.data?.attributes?.Job_Opportunities.map((val) =>
                                        <Col md={3} key={val.id} className="col-20 reveal-fade stagger-animation">
                                            <Link href={val.Content_Link} prefetch={false}>
                                                <a  target="_blank">
                                                    <div className="col-inner">
                                                        <div className="icon-wrap">
                                                            <img priority="false" src={val?.Icon_Image?.data?.attributes?.url
                                                                    ?val?.Icon_Image?.data?.attributes?.url
                                                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Job oppournity section image"  loading='lazy'/>
                                                        </div>
                                                        <div className="content-text">
                                                            <p>{val?.Title}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </Col>
                                    )}
                                </Row>
                            </Container>
                            <RoundSvgSectionTop />
                    </div>
            </div>
        </section>
    )

}

export default JobOpportunitySection;

























// import React, { Component } from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
// import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
// import JobOpportunityRow from './JobOpportunityRow';
// export default class JobOpportunitySection extends Component{

//     constructor(props) {
//         super(props);   
//         this.state = {
//             data: [],
         
         
//         };
//     }

//     componentDidMount(){
//         fetch(process.env.NEXT_PUBLIC_API_URL + 'careers-page?populate=*'
//         ,{
//           headers:{
//             'Authorization' :  process.env.NEXT_PUBLIC_API_token
//         }    
//         }
//         )
//         .then(Res => Res.json())
//         .then(message =>this.setState({
//             data: message.data,
//         }) );
//     }

//     render(){

//         const {data} = this.state

//         return (
//             <section className="section job-opportunity-section">
//                 <div className="section-inner">
//                         <div className="section-wrap">
//                                 <Container>
//                                     <SectionTitle sectionTitle={data?.attributes?.Job_Opportunities_Title} titleTheme="dark-title" />
//                                     <JobOpportunityRow data={data}/>
//                                 </Container>
//                         </div>
//                 </div>
//             </section>
//         )
//     }
// }

