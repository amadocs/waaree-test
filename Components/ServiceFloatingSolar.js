import React, { Component, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import ContactBtnFix from './ContactBtnFix';
import InnerBannerSection from "./InnerBannerSection"
import SocialFixedBtn from './SocialFixedBtn';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';
import ScrollToTopBtn from './ScrollToTopBtn';
import InnerPageGsapAnimation from './InnerPageGsapAnimation';
import ImageGallarySection from './InnerPagesSection/ImageGallarySection';
import ServiceInternalDetailSection from './InnerPagesSection/ServiceInternalDetailSection';
import ImageGallaryFourCol from './InnerPagesSection/ImageGallaryFourCol';
import Meta from './Meta';

export default class ServiceFloatingSolar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects : []
        }
    };

    async componentDidMount(){
        axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_API_URL + "floating-solar-key-projects-section",
            responseType: 'json',
            headers:{
                'Authorization' : process.env.NEXT_PUBLIC_API_token
          }
           
        })
        .then((res) => {
            this.setState({projects:res.data}) ;  
          })
    }

    data(){
      
        let arr = [];
        let temp = this.props?.path?.Seo_info?.meta
        temp?.map((el)=>{
            arr.push(
            <meta name={el.Meta_Name} content={el.Meta_Content} key={el.id} />)
        }) 
        return arr
    }


    render(){
        return(
            <>
        <Meta    
        seo_info = {this.props.path?.Seo_info}
       meta={this.data()}/>
        <InnerPageGsapAnimation />
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection
                        bgSrc={this.props.path?.Banner_Image?.data[0]?.attributes?.url}
                        pageTitle={"Services - " + `${this.props?.path?.Page_Title}`  }
                        bannerText={this.props?.path?.Short_Description}  />
        <ServiceInternalDetailSection />
        <ImageGallarySection 
        gallarySectionTitle={this.state.projects?.data?.attributes?.Title} gallaryType={<ImageGallaryFourCol />}/>           
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />

            </>
        
        )
    }

}
