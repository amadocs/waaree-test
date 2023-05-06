import _ from 'lodash'
import React, { Component } from 'react';
import dynamic from 'next/dynamic'
const  Header  = dynamic(() =>  import('../Components/Header'))
const Footer = dynamic(() =>  import( "./Footer"))
const ContactBtnFix = dynamic(() =>  import( './ContactBtnFix'))
const InnerBannerSection = dynamic(() =>  import( "./InnerBannerSection"))
const SocialFixedBtn = dynamic(() =>  import( './SocialFixedBtn'))
const PrivacyPolicyPopup = dynamic(() =>  import( './PrivacyPolicyPopup'))
const ScrollToTopBtn = dynamic(() =>  import( './ScrollToTopBtn'))
const InnerPageGsapAnimation = dynamic(() =>  import( './InnerPageGsapAnimation'))
const AboutExcellenceSection = dynamic(() =>  import( './AboutpageSection/AboutExcellenceSection'))
const AboutCorevalueSection = dynamic(() =>  import('./AboutpageSection/AboutCorevalueSection'))
const AboutBoardDirectorSection = dynamic(() =>  import( './AboutpageSection/AboutBoardDirectorSection'))
const AboutJoinTeamSection = dynamic(() =>  import( './AboutpageSection/AboutJoinTeamSection'))
const AboutAwardsSection= dynamic(() =>  import( './AboutpageSection/AboutAwardsSection'))
const AboutCaseStudySection = dynamic(() =>  import( './AboutpageSection/AboutCaseStudySection'))
const AboutCsrSection = dynamic(() =>  import( './AboutpageSection/AboutCsrSection'))
const AboutCompanyLogoSection = dynamic(() =>  import( './AboutpageSection/AboutCompanyLogoSection'))
const Meta = dynamic(() =>  import( './Meta'))
const ScrollToId = dynamic(() =>  import( './InnerPagesSection/ScrollToId'))

export default class About extends Component {

    constructor(props) {
        super(props)
    };

    data(){      
        let arr = [];
        let temp = this.props?.path?.Seo_info?.meta
        temp?.map((el)=>{
            arr.push(
            <meta name={el?.Meta_Name} content={el?.Meta_Content} key={el.id} />)
        }) 
        return arr
    }


    render(){
        return(
            <>
               <Meta    
        seo_info = {this.props.path?.Seo_info}
        meta={this.data()} />
   
        <InnerPageGsapAnimation />
        <ScrollToId />
        <Header MoreMenu={this.props.MoreMenu} social_data={this.props.social_data} />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc={this.props.path?.Banner_Image ? this.props.path?.Banner_Image?.data[0]?.attributes?.url  : process.env.NEXT_PUBLIC_NO_IMAGE} pageTitle={this.props?.path?.Page_Title} bannerText={this.props?.path?.Short_Description} /> 
        <AboutExcellenceSection AboutBlock={this.props.About_Excellence} />
        <AboutCorevalueSection  AboutBlock={this.props.Homepage_About} CoreValues={this.props.About_Core_Value} />
        <AboutBoardDirectorSection pages={this.props.Page}  About_Board_Of_Directors={this.props.About_Board_Of_Directors} />
        <AboutJoinTeamSection JoinTeam={this.props.About_Join_Team} />
        <AboutAwardsSection AwardData={this.props.About_Award}/>
        <AboutCaseStudySection pages={this.props.Page}  casestudy={this.props.About_Case_Study}/>
        <AboutCsrSection Data={this.props.About_Csr} />
        <AboutCompanyLogoSection companylogo={this.props.About_Company_Logo} />
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