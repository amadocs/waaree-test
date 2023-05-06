import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const ButtonDiv = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/ButtonDiv'))
import Link from "next/link";
export default class CsrAwardSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            news:[]
         
        };
    }
    componentDidMount(){
        fetch(process.env.NEXT_PUBLIC_API_URL + 'csr-award-section?populate=*'
        ,{
          headers:{
            'Authorization' :  process.env.NEXT_PUBLIC_API_token
        }    
        }
        )
        .then(Res => Res.json())
        .then(message =>this.setState({
            data: message.data,
           
        }) );

        fetch(process.env.NEXT_PUBLIC_API_URL + 'newses?populate=*&sort=News_Date:desc,createdAt:desc&limit=1'
        ,{
          headers:{
            'Authorization' :  process.env.NEXT_PUBLIC_API_token
        }
    
        }
        )
        .then(temp => temp.json())
        .then(temp_1 =>this.setState({
            news: temp_1.data,
            
        }) )
    }
    render(){
        const {data,news} = this.state
        return(
            <section className="section csr-award-section" style={{ backgroundImage: `url(${
                data?.attributes?.Background_Image?.data?.attributes?.url
                ? data?.attributes?.Background_Image?.data?.attributes?.url
                : process.env.NEXT_PUBLIC_NO_IMAGE})` }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="csr-award-row">
                            <Col lg={6} className="csr-award-left-col">
                                <div className="col-inner">
                                    <SectionTitle
                                     sectionTitle={data?.attributes?.Title}
                                     titleTheme="light-title" />
                                    <div className="content-text">
                                        <p>{data?.attributes?.Content_Text}</p>
                                    </div>
                                    <div className="btn-wrap">
                                        <ButtonDiv 
                                        buttonHref={data?.attributes?.Button_Link}
                                        buttonText={data?.attributes?.Button_Text} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="csr-award-right-col">
                                <div className="col-inner">
                                    <div className="latest-award-text-box">
                                        <span className="latest-label">Latest</span>
                                        <div className="latest-award-text">
                                            <p>{news[0]?.attributes?.News_Excert}</p>
                                        </div>
                                        <div class="read-more-link">
                                            <Link href={`/news/${news[0]?.attributes?.slug}`}>
                                            <a  class="read-more">Read More<i class="fa fa-chevron-right"></i></a>
                                            </Link>
                                            </div>
                                    
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
        )
    }
}
