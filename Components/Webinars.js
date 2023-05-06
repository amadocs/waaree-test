import _ from 'lodash'
import React, { Component } from 'react';
import dynamic from 'next/dynamic'
const  Header  = dynamic(() =>  import("./Header"))
const Footer = dynamic(() =>  import("./Footer"))
const ContactBtnFix = dynamic(() =>  import( './ContactBtnFix'))
const InnerBannerSection = dynamic(() =>  import( "./InnerBannerSection"))
const SocialFixedBtn = dynamic(() =>  import( './SocialFixedBtn'))
const PrivacyPolicyPopup = dynamic(() =>  import( './PrivacyPolicyPopup'))
const ScrollToTopBtn = dynamic(() =>  import( './ScrollToTopBtn'))
const InnerPageGsapAnimation = dynamic(() =>  import('./InnerPageGsapAnimation'))
const IconCounterSection  = dynamic(() =>  import('./InnerPagesSection/IconCounterSection'))
const VideoSliderSection  = dynamic(() =>  import('./InnerPagesSection/VideoSliderSection'))
const VideoFilterSection  = dynamic(() =>  import( './InnerPagesSection/VideoFilterSection'))
const Meta  = dynamic(() =>  import( './Meta'))

export default class Webinars extends Component{
    constructor(props) {
        super(props)      
    };


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
        <InnerBannerSection bgSrc={this.props.path?.Banner_Image ? this.props.path?.Banner_Image?.data[0]?.attributes?.url  : process.env.NEXT_PUBLIC_NO_IMAGE} pageTitle={this.props?.path?.Page_Title} bannerText={this.props?.path?.Short_Description} />  
           <IconCounterSection />
        <VideoSliderSection />
        <VideoFilterSection /> 
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