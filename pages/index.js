import _ from 'lodash'
import React from 'react';
import dynamic from 'next/dynamic'
import Script from 'next/script';
const FullpageHome = dynamic(() =>  import('../Components/FullpageHome'))
const  Header  = dynamic(() =>  import('../Components/Header'))
const  ContactBtnFix  = dynamic(() =>  import('../Components/ContactBtnFix'))
const  SocialFixedBtn  = dynamic(() =>  import('../Components/SocialFixedBtn'))
const  HomeScrollToTop  = dynamic(() =>  import('../Components/HomepageSection/HomeScrollToTop'))
const  PrivacyPolicyPopup  = dynamic(() => import('../Components/PrivacyPolicyPopup'))
const  Meta  = dynamic(() =>  import('../Components/Meta'))

export async function getServerSideProps({res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
    )
    // Fetch data from external API
  // Banner slider Api
  const banner_data =  await fetch(process.env.NEXT_PUBLIC_API_URL + `homepage-banners?populate=*&sort=Sort_Order:desc`
    ,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const slider_data = await banner_data.json()
  // homepage about block 
    const about_block =  await fetch(process.env.NEXT_PUBLIC_API_URL + `homepage-about-block?populate=*`,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
    const homepage_about = await about_block.json()
  // Homepage Product Block
  const product_block =  await fetch(process.env.NEXT_PUBLIC_API_URL + `homepage-product-section?populate=*`,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const homepage_product = await product_block.json()
  // product Listing 
  const product_list =  await fetch(process.env.NEXT_PUBLIC_API_URL + `products?populate=*&sort=createdAt:asc`,{    headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const homepage_product_list = await product_list.json()
  // Homepage service Block
  const service_block =  await fetch(process.env.NEXT_PUBLIC_API_URL + `homepage-service-section?populate=*`,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const homepage_service = await service_block.json()
  // service listing
  const service_list =  await fetch(process.env.NEXT_PUBLIC_API_URL + `services?populate=*&sort=Sort_Order:desc`,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const homepage_service_list = await service_list.json()
  // Homepage Testimonial Block
  const testimonial_block =  await fetch(process.env.NEXT_PUBLIC_API_URL + `testimonials?populate=*&sort=Sort_Order:desc`,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const homepage_testimonial = await testimonial_block.json()
  // Homepage Achivement Block
  const Achivement_block =  await fetch(process.env.NEXT_PUBLIC_API_URL + `homepage-achievements-block?populate=*`,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const homepage_achivement = await Achivement_block.json()
  // social icons api
  const social =  await fetch(process.env.NEXT_PUBLIC_API_URL + `social-icons?populate=*`,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
    const social_data = await social.json()
// Homepage Blog Block
    const blog_block =  await fetch(process.env.NEXT_PUBLIC_API_URL + `homepage-blog-section`,{headers:{ 'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
    const homepage_blog = await blog_block.json()
// Blog listing
const blog_list =  await fetch(process.env.NEXT_PUBLIC_API_URL + `blogs?sort=Blog_Date:desc&limit=3`,{ headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
const homepage_blog_list = await blog_list.json()
    // contact icons api
    const contact =  await fetch(process.env.NEXT_PUBLIC_API_URL + `contact-icons?populate=*&sort=Sort_Order:asc` ,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
    const contact_data = await contact.json()
    // Menus
    const menu =  await fetch(process.env.NEXT_PUBLIC_API_URL + `menus?populate=*&sort=id:asc` ,{ headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
    const menu_data = await menu.json()
    //Footer Section
    const footer =  await fetch(process.env.NEXT_PUBLIC_API_URL + `footer-contact-us-block?populate=*`,{ headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token ,'Content-Type': 'application/json'}});
    const footer_data = await footer.json()
  // web settings 
  const cookie =  await fetch(process.env.NEXT_PUBLIC_API_URL + `web-setting` ,{headers:{'Authorization' :  process.env.NEXT_PUBLIC_API_token,'Content-Type': 'application/json'}});
  const cookie_data = await cookie.json()
  return { props: { social_icons:social_data.data , contact_icons:contact_data.data, cookies : cookie_data.data,
    banner_slider:slider_data.data,about_data : homepage_about.data, product_data:homepage_product.data,
    service_data:homepage_service.data,service_listing:homepage_service_list.data,
    blog_data:homepage_blog.data , blog_listing:homepage_blog_list.data,footer_contact:footer_data.data,
    testimonial_data:homepage_testimonial.data,achivement_data:homepage_achivement.data,
    More_Menu:menu_data.data,

    product_listing:homepage_product_list.data,
  }}
  
}
export default function Home({social_icons,contact_icons,cookies,banner_slider,service_listing,More_Menu,footer_contact,
  about_data,product_data,service_data,testimonial_data,achivement_data, product_listing,blog_data,blog_listing}) {
    
    
    return (
      <>      
      {/* <Script / */}

      <script src="https://cdn.pagesense.io/js/waareeenergiesltd431/90ec9e1c7cbb4c6aac77073aead23b7d.js"></script> 
            <Meta /> 
        <Header MoreMenu={More_Menu} social_data={social_icons}  Slider={banner_slider} Homepage_About={about_data} Homepage_Product={product_data} 
                          Product_List_Data={product_listing} Homepage_Achivement={achivement_data}
                          Service_List_Data={service_listing} Homepage_Service={service_data} 
                          Homepage_Testimonial={testimonial_data} Homepage_Blog={blog_data}
                          Blog_List_Data={blog_listing} Footer_Contact={footer_contact}
                          cookie_policy={cookies} contact_data={contact_icons} />
        <main className='site-main'>
          <React.StrictMode>
          <div className='fp-fixed'></div>
            <FullpageHome  Slider={banner_slider} Homepage_About={about_data} Homepage_Product={product_data} 
                          Product_List_Data={product_listing} Homepage_Achivement={achivement_data}
                          Service_List_Data={service_listing} Homepage_Service={service_data} 
                          Homepage_Testimonial={testimonial_data} Homepage_Blog={blog_data}
                          Blog_List_Data={blog_listing} Footer_Contact={footer_contact}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons}
                           />
            <SocialFixedBtn social_data={social_icons} />
            <ContactBtnFix  contact_data={contact_icons} />
            <HomeScrollToTop />
          </React.StrictMode>
        </main>
        <PrivacyPolicyPopup cookie={cookies} />
      </>
    )
}
