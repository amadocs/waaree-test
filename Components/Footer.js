import _ from 'lodash'
import React,{Component } from 'react';
import {Container, Col,Row} from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic'
const NewsletterSubscribe  = dynamic(() =>  import('./InnerPagesSection/NewsletterSubscribe'))
const SocialMediaIcon = dynamic(() =>  import( './SocialMediaIcon'))
export default class Footer extends Component{ 
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <footer className="section site-footer" style={{backgroundColor: "#f0faf2"}} id="Footer">
            <div className="section-inner">
            <div className="newsletter-section" style={{backgroundImage:"url(https://d2ehz7r19zq528.cloudfront.net/newsletter_bg_zopnpe_dd607c385b.jpg)"}} loading='lazy'>
               <Container>
                        <NewsletterSubscribe />
                </Container>
            </div>
                <div className="footer-main">
                    <Container>
                        <div className="footer-top">
                            <Row>
                                <Col xl={3} md={6} className="footer-col reveal-fade">
                                    <div className="footer-col-inner">
                                        <div className="footer-logo">

                                            <img priority="false"
                                            src={this.props?.Contact?.attributes?.Footer_Logo?.data?.attributes?.url}
                                             alt="Waaree Logo" loading='lazy' /> 
                                        </div>
                                        <SocialMediaIcon SocialIcons={this.props?.Social_Data} />
                                    </div>
                                </Col>

                                <Col xl={3} md={6} className="footer-col reveal-fade">
                                    <div className="footer-col-inner" dangerouslySetInnerHTML={{ __html:this.props?.Contact?.attributes?.LetsTalk_Text}}>                          
                                    </div> 
                                </Col>

                                <Col xl={3} md={6} className="footer-col reveal-fade">
                                    <div className="footer-col-inner"  dangerouslySetInnerHTML={{ __html:this.props?.Contact?.attributes?.Corp_Office_Text}}>                     
                                    </div> 
                                </Col>

                                <Col xl={3} md={6} className="footer-col reveal-fade">
                                    <div className="footer-col-inner" dangerouslySetInnerHTML={{ __html:this.props?.Contact?.attributes?.DropEmail_Text}}>                          
                                    </div> 
                                </Col>                           
                            </Row>
                        </div>
                        <div className="footer-bottom">                       
                            {
                               this.props.MoreMenu.length !== 0 && this.props.MoreMenu.map((moremenu)=>{                                 
                                    if(moremenu?.attributes?.Menu_Type === "Footer"){                                        
                                    return(
                                        <Row key={moremenu.id}>                                        
                                        {
                                            moremenu?.attributes?.Menu_Content.map((menucontent)=>{
                                            return(
                                         
                                            <Col lg={2} className="footer-col reveal-fade" key={menucontent.id}>
                                             <div className="footer-col-inner" >
                                                <h5 className="footer-menu-title">{menucontent.Menu_heading}</h5>
                                            </div>
                                            <ul className="footer-menu">
                                            {
                                                 menucontent?.Menu_items.map((menuitems)=>{
                                                    return(
                                                        <li key={menuitems.id}>
                                                       <Link href={menuitems.Url} prefetch={false} >{menuitems.Label}</Link>
                                                        </li>
                                                    )
                                                    
                                                })
                                            }
                                            </ul>
                                            </Col>                                         
                                            )
                                            })
                                        }                                      
                                        </Row>
                                    )
                                    }
                                })
                            }
                        </div>
                        <div className="footer-note">
                            <Row className="reveal-fade">
                                <Col lg={5} className="footer-col">
                                    <ul>
                                           <li><a href="/privacy-policy">Privacy Policy.</a></li>
                                           <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                                    </ul>
                                </Col>
                                <Col lg={7} className="footer-col">
                                    <p>{this.props?.Web?.attributes?.Copyright_Text}</p>
                                </Col>
                            </Row>
                        </div>                        
                    </Container>
                </div>
            </div>
        </footer>
        )    
      }
}