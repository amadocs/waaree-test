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
const WaareePrimeTwoColSection = dynamic(() =>  import('../Components/InnerPagesSection/WaareePrimeTwoColSection'))
const WaareePrimeStepsSection = dynamic(() =>  import('../Components/InnerPagesSection/WaareePrimeStepsSection'))
const WaareePrimeIconBoxSection = dynamic(() =>  import('../Components/InnerPagesSection/WaareePrimeIconBoxSection'))
const OffersSection = dynamic(() =>  import('../Components/InnerPagesSection/OffersSection'))
const VideoGallaryTwoColSection = dynamic(() =>  import('../Components/InnerPagesSection/VideoGallaryTwoColSection'))
const WaareePrimeHelpSection = dynamic(() =>  import( '../Components/InnerPagesSection/WaareePrimeHelpSection'))
const WaareePrimeDownloadAppSection = dynamic(() =>  import('../Components/InnerPagesSection/WaareePrimeDownloadAppSection'))
const Meta = dynamic(() =>  import('./Meta'))

export default class WaareePrime extends Component{
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
        <WaareePrimeTwoColSection data={this.props.Waaree_Prime_Page} />     
        <WaareePrimeStepsSection data={this.props.Waaree_Prime_Page} />
        {/* <WaareePrimeIconBoxSection Waaree_Box_Icon={this.props.Waaree_Box_Icon} /> */}
        <OffersSection data={this.props.Waaree_Prime_Page}  />
        {/* <VideoGallaryTwoColSection data={this.props.Waaree_Success_Story} /> */}
        <WaareePrimeHelpSection data={this.props.Waaree_Prime_Page} />
        <WaareePrimeDownloadAppSection sectionBgColor={this.props.Waaree_Prime_Page?.attributes?.Download_Section_Background_Color}         
        extraClassName={this.props.Waaree_Prime_Page?.attributes?.Download_Section_Extra_Class_Name} 
        SectiondownloadAppTitle={this.props.Waaree_Prime_Page?.attributes?.Download_Section_Title} 
        SectiondownloadAppSubTitle={this.props.Waaree_Prime_Page?.attributes?.Download_Section_Sub_Title}
        downloadAppImageSrc={this.props.Waaree_Prime_Page?.attributes?.Download_Section_Image
                            ? this.props.Waaree_Prime_Page?.attributes?.Download_Section_Image?.data?.attributes?.url
                            :  process.env.NEXT_PUBLIC_NO_IMAGE } Waaree_Download_App_Section={this.props.Waaree_Download_App_Section}
                             Play_Store_Download_Link={this.props?.Waaree_Download_App_Section?.attributes?.Play_Store_Download_Link_For_Waaree_Prime} 
                             Apple_Store_Download_Link={this.props?.Waaree_Download_App_Section?.attributes?.Apple_Store_Download_Link_For_Waaree_Prime}
                             Qr_Code_Image={this.props?.Waaree_Download_App_Section?.attributes?.Qr_Code_Download_App_Image_For_Waaree_Prime} /> 
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