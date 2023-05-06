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
const InnerPageGsapAnimation = dynamic(() =>  import( './InnerPageGsapAnimation'))
const WaareePrimeIconBoxSection = dynamic(() =>  import( '../Components/InnerPagesSection/WaareePrimeIconBoxSection'))
const VideoGallaryTwoColSection = dynamic(() =>  import( '../Components/InnerPagesSection/VideoGallaryTwoColSection'))
const WaareePrimeDownloadAppSection = dynamic(() =>  import( '../Components/InnerPagesSection/WaareePrimeDownloadAppSection'))
const IconBoxSimpleContent = dynamic(() =>  import( '../Components/InnerPagesSection/IconBoxSimpleContent'))
const ApplyNowLabelBanner = dynamic(() =>  import( '../Components/InnerPagesSection/ApplyNowLabelBanner'))
const SkillsIconBoxSection = dynamic(() =>  import( '../Components/InnerPagesSection/SkillsIconBoxSection'))
const Meta = dynamic(() =>  import( './Meta'))

export default class WaareeExpert extends Component{
    constructor(props) {
        super(props)   
        this.state = {
            data: [],
         
        };   

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
        console.log(this.props.Waaree_Download_App_Section , "Waaree_Download_App_Section");
        return(
        <>
        <Meta    
            seo_info = {this.props.path?.Seo_info}
            meta={this.data()}/>
        <InnerPageGsapAnimation />
        <Header MoreMenu={this.props.MoreMenu} social_data={this.props.social_data} />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc={this.props.path?.Banner_Image ? this.props.path?.Banner_Image?.data[0]?.attributes?.url  : process.env.NEXT_PUBLIC_NO_IMAGE} pageTitle={this.props?.path?.Page_Title} bannerText={this.props?.path?.Short_Description} />
        <WaareePrimeIconBoxSection  Waaree_Box_Icon={this.props.Waaree_Box_Icon} iconBoxSimpleContent={<IconBoxSimpleContent data={this.props.Waaree_Expet_Page} />} applyNowBanner={<ApplyNowLabelBanner data={this.props.Waaree_Expet_Page} />}/>  
        <WaareePrimeDownloadAppSection sectionBgColor={this.props.Waaree_Expet_Page?.attributes?.Download_Section_Background_Color} extraClassName={this.props.Waaree_Expet_Page?.attributes?.Download_Section_Extra_Class_Name} SectiondownloadAppTitle={this.props.Waaree_Expet_Page?.attributes?.Download_Section_Title}  SectiondownloadAppSubTitle={this.props.Waaree_Expet_Page?.attributes?.Download_Section_Sub_Title} downloadAppImageSrc={this.props.Waaree_Expet_Page?.attributes?.Download_Section_Image?.data?.attributes?.url ? this.props.Waaree_Expet_Page?.attributes?.Download_Section_Image?.data?.attributes?.url              :  process.env.NEXT_PUBLIC_NO_IMAGE } Waaree_Download_App_Section={this.props.Waaree_Download_App_Section}       
        Play_Store_Download_Link={this.props?.Waaree_Download_App_Section?.attributes?.Play_Store_Download_Link_For_Waaree_Expert} 
                             Apple_Store_Download_Link={this.props?.Waaree_Download_App_Section?.attributes?.Apple_Store_Download_Link_For_Waaree_Expert}
                             Qr_Code_Image={this.props?.Waaree_Download_App_Section?.attributes?.Qr_Code_Download_App_Image_For_Waaree_Expert }/> 
        <VideoGallaryTwoColSection data={this.props.Waaree_Success_Story} />
        <SkillsIconBoxSection data={this.props.Waaree_Expet_Page} />
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