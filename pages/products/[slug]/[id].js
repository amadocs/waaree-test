import _ from 'lodash'
import React, { Component } from "react";
import dynamic from 'next/dynamic'
const  Header  = dynamic(() =>  import('../../../Components/Header'))
const Footer = dynamic(() =>  import( '../../../Components/Footer'))
const ContactBtnFix = dynamic(() =>  import( '../../../Components/ContactBtnFix'))
const SocialFixedBtn = dynamic(() =>  import( '../../../Components/SocialFixedBtn'))
const PrivacyPolicyPopup = dynamic(() =>  import( '../../../Components/PrivacyPolicyPopup'))
const InnerBannerSection = dynamic(() =>  import( '../../../Components/InnerBannerSection'))
const ScrollToTopBtn = dynamic(() =>  import( '../../../Components/ScrollToTopBtn'))
const InnerPageGsapAnimation = dynamic(() =>  import( '../../../Components/InnerPageGsapAnimation'))
const Meta = dynamic(() =>  import( '../../../Components/Meta'))
const SimpleContentSection  = dynamic(() =>  import('../../../Components/InnerPagesSection/SimpleContentSection'))
const ProductRelatedInfoSection  = dynamic(() =>  import('../../../Components/InnerPagesSection/ProductRelatedInfoSection'))
const ProductFeaturedSection  = dynamic(() =>  import('../../../Components/InnerPagesSection/ProductFeaturedSection'))
const ProductAdvantageSection  = dynamic(() =>  import('../../../Components/InnerPagesSection/ProductAdvantageSection'))
const ProductFooterSection  = dynamic(() =>  import('../../../Components/InnerPagesSection/ProductFooterSection'))
const ProductFullWidthVideoSection  = dynamic(() =>  import("../../../Components/InnerPagesSection/ProductFullWidthVideoSection"))
const ProductThreeColContentSection  = dynamic(() =>  import('../../../Components/InnerPagesSection/ProductThreeColContentSection'))
const ProductTypeContentCol  = dynamic(() =>  import("../../../Components/InnerPagesSection/productsubpagesection/ProductTypeContentCol"))

export async function getServerSideProps({res,query}) {
  // Fetch data from external API
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  let {id} = query
  const res_1 =  await fetch(process.env.NEXT_PUBLIC_API_URL + `waaree-products?populate=*&filters[slug]=${id}`

          ,{ 
            headers:{
              'Authorization' :  process.env.NEXT_PUBLIC_API_token
          }    
          }  
          );
  const temp = await res_1.json()


  const response =  await fetch(process.env.NEXT_PUBLIC_API_URL + `pages?populate=*&filters[slug]=products`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );

  const temp2 = await response.json()
  const contact =  await fetch(process.env.NEXT_PUBLIC_API_URL + `contact-icons?populate=*&sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const contact_data = await contact.json()
 
 
  // Menus
  const menu =  await fetch(process.env.NEXT_PUBLIC_API_URL + `menus?populate=*&sort=id:asc`
 
  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const menu_data = await menu.json()
 
  //Footer Section
  const footer =  await fetch(process.env.NEXT_PUBLIC_API_URL + `footer-contact-us-block?populate=*`
 
  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const footer_data = await footer.json()
 
 // web settings 
 const cookie =  await fetch(process.env.NEXT_PUBLIC_API_URL + `web-setting`
 
 ,{
  headers:{
    'Authorization' :  process.env.NEXT_PUBLIC_API_token
 }    
 }  
 );
 const cookie_data = await cookie.json()
 const social =  await fetch(process.env.NEXT_PUBLIC_API_URL + `social-icons?populate=*`
 
 ,{
   headers:{
     'Authorization' :  process.env.NEXT_PUBLIC_API_token
 }    
 }  
 );
 const social_data = await social.json()

  // Pass data to the page via props
  return { props: { products : temp , page:temp2, contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data} }
}

export default class Slug extends Component {
  constructor(props) {
    super(props)    
};


data(){      
  let arr = [];
  let temp = this.props?.products?.data[0]?.attributes?.Seo_Info?.meta
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
            seo_info = {this.props?.products?.data[0]?.attributes?.Seo_Info}
            meta={this.data()}/>
        <InnerPageGsapAnimation />
        <Header MoreMenu={this.props.More_Menu} social_data={this.props.social_icons} />

        <main className="no-fullpage">
        <InnerBannerSection 
               bgSrc={this.props.page?.data[0]?.attributes?.Banner_Image
                ? this.props.page?.data[0]?.attributes?.Banner_Image?.data[0]?.attributes?.url
                : process.env.NEXT_PUBLIC_NO_IMAGE}
               pageTitle={this.props?.products?.data[0]?.attributes?.Title}  
               bannerText={this.props?.products?.data[0]?.attributes?.Short_Description} />

        <SimpleContentSection data={this.props?.products?.data[0]} />
        {
          !this.props?.products?.data[0]?.attributes?.Product_Icon_Box_Data.length ? "" :
          <ProductRelatedInfoSection  data={this.props?.products?.data[0]} />
        }
        {
           !this.props?.products?.data[0]?.attributes?.Product_Features.length ? "" :
           <ProductFeaturedSection data={this.props?.products?.data[0]} />
        }
        {
           !this.props?.products?.data[0]?.attributes?.Product_Advantages.length ? "" :
           <ProductAdvantageSection data={this.props?.products?.data[0]} />
        }
         <ProductFooterSection 
         btnText={this.props?.products?.data[0]?.attributes?.Product_Footer_Section_Button_Text}
         btnLink={this.props?.products?.data[0]?.attributes?.Product_Footer_Section_Button_Link}
         contentText={this.props?.products?.data[0]?.attributes?.Product_Footer_Section_Text} />
       
        
        <ProductFullWidthVideoSection 
       fullWidth="full-width"
        videoSrc={this.props?.products?.data[0]?.attributes?.Product_Full_Width_Video_Url}
        videCoverBgSrc={this.props?.products?.data[0]?.attributes?.Product_Full_Width_Image?.data?.attributes?.url
          ?this.props?.products?.data[0]?.attributes?.Product_Full_Width_Image?.data?.attributes?.url
          : process.env.NEXT_PUBLIC_NO_IMAGE

        }
         videoCoverText={this.props?.products?.data[0]?.attributes?.Product_Full_Width_Video_Text} />
      
        {
          !this.props?.products?.data[0]?.attributes?.Col_Content.length ? "" :
          <ProductThreeColContentSection 
          productContentCol={ <ProductTypeContentCol data={this.props?.products?.data[0]?.attributes?.Col_Content} />} 
          productsectionTitle={this.props?.products?.data[0]?.attributes?.Other_Products_Title} />           
        }
       <Footer Contact={this.props.footer_contact}  Web={this.props.cookies}  MoreMenu={this.props.More_Menu} 
                          Social_Data={this.props.social_icons}/>
        <SocialFixedBtn social_data={this.props.social_icons} />
        <ContactBtnFix  contact_data={this.props.contact_icons} />
        <ScrollToTopBtn />
      </main>
     <PrivacyPolicyPopup cookie={this.props.cookies} />  
    </>
  )
}
}
