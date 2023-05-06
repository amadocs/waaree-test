import _ from 'lodash'
import React, { Component } from 'react';
import dynamic from 'next/dynamic'
const  Header  = dynamic(() =>  import("./Header"))
const Footer  = dynamic(() =>  import("./Footer"))
const ContactBtnFix = dynamic(() =>  import('./ContactBtnFix'))
const InnerBannerSection = dynamic(() =>  import("./InnerBannerSection"))
const SocialFixedBtn = dynamic(() =>  import('./SocialFixedBtn'))
const PrivacyPolicyPopup = dynamic(() =>  import('./PrivacyPolicyPopup'))
const ScrollToTopBtn = dynamic(() =>  import('./ScrollToTopBtn'))
const InnerPageGsapAnimation = dynamic(() =>  import('./InnerPageGsapAnimation'))
const Meta = dynamic(() =>  import('./Meta'))
const CsrBodySection = dynamic(() =>  import('./InnerPagesSection/CsrBodySection'))
const TeamReviewSection= dynamic(() =>  import( './InnerPagesSection/TeamReviewSection'))
const ImageGallarySection  = dynamic(() =>  import( './InnerPagesSection/ImageGallarySection'))
const CsrImageGallary  = dynamic(() =>  import( './InnerPagesSection/CsrImageGallery'))


export default class CSR extends Component{
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
        <Header MoreMenu={this.props.MoreMenu} social_data={this.props.social_data} />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc={this.props.path?.Banner_Image ? this.props.path?.Banner_Image?.data[0]?.attributes?.url  : process.env.NEXT_PUBLIC_NO_IMAGE} pageTitle={this.props?.path?.Page_Title} bannerText={this.props?.path?.Short_Description} /> 
        <CsrBodySection data={this.props.Csr_Living} />
        <TeamReviewSection Csr_Team_Review={this.props.Csr_Team_Review} />
           <ImageGallarySection 
             gallarySectionTitle={this.props.page?.data?.attributes?.Title}
              gallaryType={<CsrImageGallary data={this.props.page} />}/>
       <Footer Contact={this.props.Footer_Contact}  Web={this.props.cookie_policy}  MoreMenu={this.props.MoreMenu} 
                        Social_Data={this.props.social_data}  />
        <SocialFixedBtn social_data={this.props.social_data}/>
        <ContactBtnFix  contact_data={this.props.contact_data} />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup cookie={this.props.cookie_policy} />

            </>
        )
    }
}