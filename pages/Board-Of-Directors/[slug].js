import _ from 'lodash'
import React from 'react';
import dynamic from 'next/dynamic'
const  Header  = dynamic(() =>  import('../../Components/Header'))
const Footer  = dynamic(() =>  import( '../../Components/Footer'))
const ContactBtnFix  = dynamic(() =>  import( '../../Components/ContactBtnFix'))
const SocialFixedBtn  = dynamic(() =>  import( '../../Components/SocialFixedBtn'))
const PrivacyPolicyPopup  = dynamic(() =>  import( '../../Components/PrivacyPolicyPopup'))
const InnerBannerSection  = dynamic(() =>  import( '../../Components/InnerBannerSection'))
const ScrollToTopBtn  = dynamic(() =>  import( '../../Components/ScrollToTopBtn'))
const InnerPageGsapAnimation  = dynamic(() =>  import( '../../Components/InnerPageGsapAnimation'))
const Meta  = dynamic(() =>  import( '../../Components/Meta'))
const TeamDetailSection  = dynamic(() =>  import( '../../Components/InnerPagesSection/TeamDetailSection'))

export async function getServerSideProps({res,query}) {
  // Fetch data from external API
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  let {slug} = query
  const res_1 =  await fetch(process.env.NEXT_PUBLIC_API_URL + `board-of-directors?populate=*&&filters[slug]=${slug}`

          ,{
            headers:{
              'Authorization' :  process.env.NEXT_PUBLIC_API_token
          }    
          }  
          );
          const temp = await res_1.json()


          const response =  await fetch(process.env.NEXT_PUBLIC_API_URL + `pages?populate=*&filters[slug]=Board-Of-Directors`

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
  return { props: { data : temp.data , pages:temp2.data, contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data} }
}



export default function Slug({data,pages,contact_icons,cookies,More_Menu,footer_contact ,social_icons}){

  function meta(){      
    let arr = [];
    let temp = data[0]?.attributes?.Seo_Info?.meta
    temp?.map((el)=>{
        arr.push(
        <meta name={el.Meta_Name} content={el.Meta_Content} key={el.id} />)
    }) 
    return arr
  }
return <>
   
<Meta
      seo_info={data[0]?.attributes?.Seo_Info}
      meta={meta()} 
      />
      <InnerPageGsapAnimation />
      <Header MoreMenu={More_Menu} social_data={social_icons} />
      <main className="no-fullpage">
      <InnerBannerSection
        bgSrc={pages[0]?.attributes?.Banner_Image
          ? pages[0]?.attributes?.Banner_Image?.data[0]?.attributes?.url
          : process.env.NEXT_PUBLIC_NO_IMAGE}
        pageTitle={pages[0]?.attributes?.Page_Title}
        bannerText={pages[0]?.attributes?.Short_Description} />

    <TeamDetailSection data={data[0]}/>
    <Footer Contact={footer_contact}  Web={cookies}  MoreMenu={More_Menu} 
                          Social_Data={social_icons}/>
        <SocialFixedBtn social_data={social_icons} />
        <ContactBtnFix  contact_data={contact_icons} />
        <ScrollToTopBtn />
      </main>
    <PrivacyPolicyPopup cookie={cookies} />
    </>
}

