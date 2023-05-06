import _ from 'lodash'
import React, { Component } from 'react';
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
const SimpleContentSection= dynamic(() =>  import('../../../Components/InnerPagesSection/SimpleContentSection'))
const ProductTypeSliderSection = dynamic(() =>  import('../../../Components/InnerPagesSection/productmainpagesection/ProductTypeSliderSection'))
const ProductTypeSlider = dynamic(() =>  import('../../../Components/InnerPagesSection/productmainpagesection/ProductTypeSlider'))
const ProductTypeContentSliderSection = dynamic(() =>  import('../../../Components/InnerPagesSection/productmainpagesection/ProductTypeContentSliderSection'))
const ProductTypeContentSlider = dynamic(() =>  import('../../../Components/InnerPagesSection/productmainpagesection/ProductTypeContentSlider'))
const LetUsKnowSection = dynamic(() =>  import('../../../Components/InnerPagesSection/LetUsKnowSection'))
const ProductThreeColContentSection = dynamic(() =>  import('../../../Components/InnerPagesSection/ProductThreeColContentSection'))
const ProductTypeContentColSolarProduct = dynamic(() =>  import('../../../Components/InnerPagesSection/productmainpagesection/ProductTypeContentColSolarProduct'))


export async function getServerSideProps({res,query}) {
  // Fetch data from external API
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  let {slug} = query
    const res_1 =  await fetch(process.env.NEXT_PUBLIC_API_URL + `products?populate=*&filters[slug]=${slug}`
  
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


    const waaree_products =  await fetch(process.env.NEXT_PUBLIC_API_URL + `waaree-products?populate=*&sort=createdAt:desc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
  
    const temp_2 = await waaree_products.json()

    
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

   const let_us_know =  await fetch(process.env.NEXT_PUBLIC_API_URL + `product-let-us-know-section?populate=*&sort=createdAt:desc`
   
   ,{
     headers:{
       'Authorization' :  process.env.NEXT_PUBLIC_API_token
   }    
   }  
   );
   const let_us_know_data = await let_us_know.json()
  


    // Pass data to the page via props
    return { props: { products : temp , page:temp2, contact_icons:contact_data.data,mydata:temp_2.data, slug_value:slug,cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,let_us_know:let_us_know_data.data} }
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
        const temp  = this.props.mydata.map((value)=>{
            if(value?.attributes?.product_category?.data?.attributes?.slug == this.props.slug_value){
                return (
                    value
                )
            }
        })
       const value = temp.filter(x => x !== undefined)
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
           this.props.products?.data[0]?.attributes?.Product_Type_Slider_Background_Image?.data == null ? "" :
       
            <ProductTypeSliderSection 
            productSlider=       
                {
                         <ProductTypeSlider data={value} />

                }
            SliderbgSrc={this.props.products?.data[0]?.attributes?.Product_Type_Slider_Background_Image
                ? this.props.products?.data[0]?.attributes?.Product_Type_Slider_Background_Image?.data?.attributes?.url
                : process.env.NEXT_PUBLIC_NO_IMAGE} />
       }
        

            {
                !this.props?.products?.data[0]?.attributes?.waaree_products?.data?.length ? "" :
                <ProductTypeContentSliderSection 
                contentTypeSlider={<ProductTypeContentSlider data={value} />} 
                productTitle={this.props?.products?.data[0]?.attributes?.Title} /> 
            }

        {
              !this.props?.products?.data[0]?.attributes?.Three_Col_Content.length ? "" :
              <ProductThreeColContentSection 
              productsectionTitle="Solar Products"
              productContentCol={<ProductTypeContentColSolarProduct  data={this.props.products?.data[0]} />} 
             
              />
        }
        {
            this.props?.products?.data[0]?.attributes?.Let_Us_Know_Section  === true ?  

            this.props.slug_value !== "inverter" ?  <LetUsKnowSection data={this.props.let_us_know} help_section="false" /> 
             :  <LetUsKnowSection data={this.props.let_us_know} help_section="true" />   
           : ""
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
