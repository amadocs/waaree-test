import _ from 'lodash'
import React from 'react';
import dynamic from 'next/dynamic'
export async function getServerSideProps({res,query}) {

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
  )
    let {slug} = query

    const res_1 =  await fetch(process.env.NEXT_PUBLIC_API_URL + `pages?populate=*&filters[slug]=${slug}`
  
            ,{
              headers:{
                'Authorization' :  process.env.NEXT_PUBLIC_API_token
            }    
            }  
            );
    const temp = await res_1.json()


    //pages
       
    const pages = await fetch(process.env.NEXT_PUBLIC_API_URL + `pages?populate=*&sort=id:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
const pages_data = await pages.json()

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

    const social =  await fetch(process.env.NEXT_PUBLIC_API_URL + `social-icons?populate=*`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
const social_data = await social.json()
 
  // web settings 
  const cookie =  await fetch(process.env.NEXT_PUBLIC_API_URL + `web-setting`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const cookie_data = await cookie.json()
  
  //about page
  if(slug === "about"){
    const about_excellence =  await fetch(process.env.NEXT_PUBLIC_API_URL + `about-excellence-block?populate=*`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_excellence_data = await about_excellence.json()
  
    const homepage_about =  await fetch(process.env.NEXT_PUBLIC_API_URL + `homepage-about-block?populate=*`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const homepage_about_data = await homepage_about.json()
  
  
    const about_core_value =  await fetch(process.env.NEXT_PUBLIC_API_URL + `about-us-core-value-section?populate=*&sort=id:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_core_value_data = await about_core_value.json()
  
  
    const about_join_team =  await fetch(process.env.NEXT_PUBLIC_API_URL + `join-our-team?populate=*`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_join_team_data = await about_join_team.json()
  
  
    const about_award =  await fetch(process.env.NEXT_PUBLIC_API_URL + `about-us-award-section?populate=*`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_award_data = await about_award.json()
  
  
    const about_csr =  await fetch(process.env.NEXT_PUBLIC_API_URL + `about-us-sustainable-living-section?populate=*`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_csr_data = await about_csr.json()
  
  
    const about_board_of_directors =  await fetch(process.env.NEXT_PUBLIC_API_URL + `board-of-directors?populate=*&sort=Sort_Order:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_board_of_directors_data = await about_board_of_directors.json()
  
  
    const about_case_study =  await fetch(process.env.NEXT_PUBLIC_API_URL + `case-studies?populate=*&sort=id:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_case_study_data = await about_case_study.json()
  
    const about_company_logo =  await fetch(process.env.NEXT_PUBLIC_API_URL + `our-partners?populate=*&sort=id:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_company_logo_data = await about_company_logo.json()

    return {
      props:{
        data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,  
        about_excellence:about_excellence_data.data,homepage_about:homepage_about_data.data,about_core_value:about_core_value_data.data,about_join_team:about_join_team_data.data,about_award:about_award_data.data,about_csr:about_csr_data.data,page:pages_data.data,about_board_of_directors:about_board_of_directors_data.data,about_case_study:about_case_study_data.data,about_company_logo:about_company_logo_data.data
      }
    }
  }
  //about page ends 


  // contact page
  if(slug === "contact"){
    const contact_location =  await fetch(process.env.NEXT_PUBLIC_API_URL + `our-locations?populate=*&sort=Sort_Order:asc`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const contact_location_data = await contact_location.json()
  
    const contact_help =  await fetch(process.env.NEXT_PUBLIC_API_URL + `help-sections?populate=*&sort=id:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const contact_help_data = await contact_help.json()
  
    const contact_footer_section =  await fetch(process.env.NEXT_PUBLIC_API_URL + `contact-us-footer-section`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const contact_footer_section_data = await contact_footer_section.json()
    return{
      props:{
        data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,  
        contact_location:contact_location_data.data,contact_help:contact_help_data.data,contact_footer_section:contact_footer_section_data.data
      }
    }
  }
 
  //contact page ends 

  //service page
  if(slug === "services"){
    const about_join_team =  await fetch(process.env.NEXT_PUBLIC_API_URL + `join-our-team?populate=*`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_join_team_data = await about_join_team.json()
 
  const service_location =  await fetch(process.env.NEXT_PUBLIC_API_URL + `service-locations?sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const service_location_data = await service_location.json()


  const services =  await fetch(process.env.NEXT_PUBLIC_API_URL + `services?populate=*&sort=Sort_Order:desc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const service_data = await services.json()

  const services_waaree_prime =  await fetch(process.env.NEXT_PUBLIC_API_URL + `service-waree-prime-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const services_waaree_prime_data = await services_waaree_prime.json()

  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data, 
      service_location:service_location_data.data,service:service_data.data,services_waaree_prime:services_waaree_prime_data.data,about_join_team:about_join_team_data.data
    }
  }
}
  //service page ends


  //video page
  if(slug === "videos"){
    const video_section =  await fetch(process.env.NEXT_PUBLIC_API_URL + `video-section?populate=*`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const video_section_data = await video_section.json()

    return{
      props:{
        data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,   video_section:video_section_data.data
      }
    }
  }
 


  //video page ends

  //why solar page
  if(slug === "why-solar"){
    const why_solar  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `why-solar-page?populate=*`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const why_solar_data = await why_solar.json()
  
  
    const why_solar_benifits_row  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `why-solar-benefits-rows?populate=*&sort=Sort_Order:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const why_solar_benifits_row_data = await why_solar_benifits_row.json()
    return{
      props:{
        data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data ,  why_solar:why_solar_data.data,why_solar_benifits_row:why_solar_benifits_row_data.data
      }
    }
  }
  //why solar page ends
  // Clientele
  if(slug === "clientele"){


  const clientele_logo_section =  await fetch(process.env.NEXT_PUBLIC_API_URL + `clientele-logo-sections?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const clientele_logo_section_data = await clientele_logo_section.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , clientele_logo_section:clientele_logo_section_data.data
    }
  }
}
  // clientele pages end 

  // media coverage 
  if(slug === "media-coverage"){


  const news =  await fetch(process.env.NEXT_PUBLIC_API_URL + `newses?populate=*&sort=News_Date:desc,createdAt:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const news_data = await news.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , news:news_data.data 
    }
  }
}
  // media coverage ends

  //news
  if(slug === "all-news"){


  const limit = await
  fetch(process.env.NEXT_PUBLIC_API_URL + `newses/count`
  ,{
  headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }
  );
  const newses =  await fetch(process.env.NEXT_PUBLIC_API_URL + `newses?populate=*limit=${limit},start=1&sort=News_Date:desc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const newses_data = await newses.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , newses:newses_data.data
    }
  }
}
  // news ends


  // manufacturing plant 
  if(slug === "manufacturing-plant"){

 
  const manufacturing_process =  await fetch(process.env.NEXT_PUBLIC_API_URL + `manufacturing-processes?populate=*&sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const manufacturing_process_data = await manufacturing_process.json()

  const manufacturing_video =  await fetch(process.env.NEXT_PUBLIC_API_URL + `manufacturing-plant-video-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const manufacturing_video_data = await manufacturing_video.json()

  const manufacturing_company_logo =  await fetch(process.env.NEXT_PUBLIC_API_URL + `manufacturing-plant-certification-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const manufacturing_company_logo_data = await manufacturing_company_logo.json()

  const manufacturing_lab_facility =  await fetch(process.env.NEXT_PUBLIC_API_URL + `manufacturing-plant-lab-facility-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const manufacturing_lab_facility_data = await manufacturing_lab_facility.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , manufacturing_process:manufacturing_process_data.data, manufacturing_video:manufacturing_video_data.data,manufacturing_company_logo:manufacturing_company_logo_data.data,manufacturing_lab_facility:manufacturing_lab_facility_data.data
    }
  }
}
  // manufacturing plant ends


  //award page
  if(slug === "awards"){
 
  const award_grid =  await fetch(process.env.NEXT_PUBLIC_API_URL + `awards?populate=*&sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const award_grid_data = await award_grid.json()

  const award_gallery =  await fetch(process.env.NEXT_PUBLIC_API_URL + `award-gallery-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const award_gallery_data = await award_gallery.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , award_grid:award_grid_data.data,award_gallery:award_gallery_data.data
    }
  }
}
  //award page ends

  // csr page
  if(slug === "csr"){

  
  const csr_living =  await fetch(process.env.NEXT_PUBLIC_API_URL + `sustainable-livings?populate=*&sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const csr_living_data = await csr_living.json()


  const csr_team_review =  await fetch(process.env.NEXT_PUBLIC_API_URL + `csr-team-reviews?populate=*&sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const csr_team_review_data = await csr_team_review.json()

  
  const csr_gallery_section =  await fetch(process.env.NEXT_PUBLIC_API_URL + `csr-gallery-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const csr_gallery_section_data = await csr_gallery_section.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data ,csr_living:csr_living_data.data,csr_team_review:csr_team_review_data.data,csr_gallery_section:csr_gallery_section_data.data
    }
  }
}
    //csr page ends
  //waaree prime
if(slug === "waaree-prime"){
const waaree_prime_page =  await fetch(process.env.NEXT_PUBLIC_API_URL + `waaree-prime-page?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const waaree_prime_page_data = await waaree_prime_page.json()

  
const waaree_box_icon =  await fetch(process.env.NEXT_PUBLIC_API_URL + `box-icon-sections?populate=*&sort=Sort_Order:asc`

,{
  headers:{
    'Authorization' :  process.env.NEXT_PUBLIC_API_token
}    
}  
);
const waaree_box_icon_data = await waaree_box_icon.json()



const waaree_success_story =  await fetch(process.env.NEXT_PUBLIC_API_URL + `success-story-section?populate=*`

,{
  headers:{
    'Authorization' :  process.env.NEXT_PUBLIC_API_token
}    
}  
);
const waaree_success_story_data = await waaree_success_story.json()


const waaree_download_app_section =  await fetch(process.env.NEXT_PUBLIC_API_URL + `download-the-app-section?populate=*`

,{
  headers:{
    'Authorization' :  process.env.NEXT_PUBLIC_API_token
}    
}  
);
const waaree_download_app_section_data = await waaree_download_app_section.json()
return{
  props:{
    data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data ,waaree_prime_page:waaree_prime_page_data.data,waaree_box_icon:waaree_box_icon_data.data,waaree_success_story:waaree_success_story_data.data,waaree_download_app_section:waaree_download_app_section_data.data
  }
}
}
  //waaree prime ends

  //waaree expert page
  if(slug === "waaree-expert"){

  const waaree_expet_page =  await fetch(process.env.NEXT_PUBLIC_API_URL + `waaree-expert-page?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const waaree_expet_page_data = await waaree_expet_page.json()

  const about_join_team =  await fetch(process.env.NEXT_PUBLIC_API_URL + `join-our-team?populate=*`
  
  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const about_join_team_data = await about_join_team.json()

  const waaree_box_icon =  await fetch(process.env.NEXT_PUBLIC_API_URL + `box-icon-sections?populate=*&sort=Sort_Order:asc`

,{
  headers:{
    'Authorization' :  process.env.NEXT_PUBLIC_API_token
}    
}  
);
const waaree_box_icon_data = await waaree_box_icon.json()



const waaree_success_story =  await fetch(process.env.NEXT_PUBLIC_API_URL + `success-story-section?populate=*`

,{
  headers:{
    'Authorization' :  process.env.NEXT_PUBLIC_API_token
}    
}  
);
const waaree_success_story_data = await waaree_success_story.json()


const waaree_download_app_section =  await fetch(process.env.NEXT_PUBLIC_API_URL + `download-the-app-section?populate=*`

,{
  headers:{
    'Authorization' :  process.env.NEXT_PUBLIC_API_token
}    
}  
);
const waaree_download_app_section_data = await waaree_download_app_section.json()

  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , waaree_expet_page:waaree_expet_page_data.data,about_join_team:about_join_team_data.data,waaree_box_icon:waaree_box_icon_data.data,waaree_success_story:waaree_success_story_data.data,waaree_download_app_section:waaree_download_app_section_data.data
    }
  }
}
  //waaree expert page ends

  //investor 
  if(slug === "ipo"){
  const investor =  await fetch(process.env.NEXT_PUBLIC_API_URL + `investors?populate=*&sort=id:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const investor_data = await investor.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , investor:investor_data.data
    }
  }
}
  // investor ends 


  // download center 
  if(slug === "download-center"){
  const download_center =  await fetch(process.env.NEXT_PUBLIC_API_URL + `download-page-body-sections?populate=*&sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const download_center_data = await download_center.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , download_center:download_center_data.data
    }
  }
}
  // download center ends 

  //career page
  if(slug === "work-with-us"){
  const career =  await fetch(process.env.NEXT_PUBLIC_API_URL + `careers-page?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const career_data = await career.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,career_data:career_data.data
    }
  }
}
  //career page ends

  //culture page
  if(slug === "work-culture"){

  
  const culture =  await fetch(process.env.NEXT_PUBLIC_API_URL + `our-culture-page?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const culture_data = await culture.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,culture_data:culture_data.data
    }
  }
}
  //culture page ends 

  //life at waaree 
  if(slug === "life-at-waaree"){
    const about_core_value =  await fetch(process.env.NEXT_PUBLIC_API_URL + `about-us-core-value-section?populate=*&sort=id:asc`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_core_value_data = await about_core_value.json()

    const about_join_team =  await fetch(process.env.NEXT_PUBLIC_API_URL + `join-our-team?populate=*`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_join_team_data = await about_join_team.json()
  const life_at_waaree =  await fetch(process.env.NEXT_PUBLIC_API_URL + `life-at-waaree-page?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const life_at_waaree_data = await life_at_waaree.json()
  return{
    props:{
      about_core_value:about_core_value_data.data,
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data, life_at_waaree:life_at_waaree_data.data,about_join_team:about_join_team_data.data
    }
  }
}
  //life at waaree page ends

  //event page
  if(slug === "all-events"){

  
  const event  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `event-page?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const event_data = await event.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,event_data:event_data.data
    }
  }
}

  //event page ends

  //partner page 
  if(slug === "partners"){
  const partner_detail_section  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `partner-detail-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const partner_detail_section_data = await partner_detail_section.json()


  const partner_case_study_section  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `partner-case-study-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const partner_case_study_section_data = await partner_case_study_section.json()

  
  const partner_city  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `franchisee-location-cities?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const partner_city_data = await partner_city.json()


  const partner_state  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `franchisee-location-states?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const partner_state_data = await partner_state.json()

  const partner_location  =  await fetch(process.env.NEXT_PUBLIC_API_URL + `our-franchisee-locations?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const partner_location_data = await partner_location.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , partner_detail_section:partner_detail_section_data.data,partner_case_study_section:partner_case_study_section_data.data,partner_city_data:partner_city_data.data,partner_state_data:partner_state_data.data,partner_location:partner_location_data.data
    }
  }
}
  //partner page ends

  //product page
  if(slug === "products"){
    const service_location =  await fetch(process.env.NEXT_PUBLIC_API_URL + `service-locations?sort=Sort_Order:asc`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const service_location_data = await service_location.json()

    const about_join_team =  await fetch(process.env.NEXT_PUBLIC_API_URL + `join-our-team?populate=*`
  
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const about_join_team_data = await about_join_team.json()
  const product =  await fetch(process.env.NEXT_PUBLIC_API_URL + `products?populate=*&sort=createdAt:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const product_data = await product.json()

  const services_waaree_prime =  await fetch(process.env.NEXT_PUBLIC_API_URL + `service-waree-prime-section?populate=*`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const services_waaree_prime_data = await services_waaree_prime.json()

  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , product:product_data.data,about_join_team:about_join_team_data.data,service_location:service_location_data.data,services_waaree_prime:services_waaree_prime_data.data
    }
  }
}
  //product page ends

  //blog
  if(slug === "blog"){

    const myblogcount =await  fetch(process.env.NEXT_PUBLIC_API_URL + `blog/count`
    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }
    ).then(res => res.json())

  const blog =  await fetch(process.env.NEXT_PUBLIC_API_URL + `blogs?populate=*&sort=Blog_Date:desc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const blog_data = await blog.json()

  const blog_category =  await fetch(process.env.NEXT_PUBLIC_API_URL + `blog-categories?sort=Sort_Order:asc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const blog_category_data = await blog_category.json()

  const limits = 5;
  
  const blog_display =  await fetch(process.env.NEXT_PUBLIC_API_URL + `blogs?sort=Blog_Date:desc&limit=${limits}`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const blog_display_data = await blog_display.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data , blog:blog_data.data,blog_category:blog_category_data.data,blog_display:blog_display_data.data ,blog_count:myblogcount
    }
  }
}
  //blog ends
  
  //testimonial
  if(slug === "testimonials"){
    
  
  const testimonial =  await fetch(process.env.NEXT_PUBLIC_API_URL + `testimonials?populate=*&sort=createdAt:desc`

  ,{
    headers:{
      'Authorization' :  process.env.NEXT_PUBLIC_API_token
  }    
  }  
  );
  const testimonial_data = await testimonial.json()
  return{
    props:{
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,testimonial:testimonial_data.data
    }
  }
}
  //testimonial end

  // support page

  if(slug  === "support"){
    const support =  await fetch(process.env.NEXT_PUBLIC_API_URL + `support-page?populate=*`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const support_data = await support.json()


    // solar calculator page 
    if(slug === "solar-calculator"){
      return{
        props:{
          data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,
        }
      }
    }

    //frachisee enquiry page 
    if(slug === "franchise-enquiry"){
      return{
        props:{
          data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,
        }
      }
    }

    return {
      props:{
        data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,        
        support_page:support_data.data 
      }
    }
  }
 
  // console.log(temp.data , "temp");
    // Pass data to the page via props
    return { props: {
      data:temp.data , query: query ,  contact_icons:contact_data.data, cookies : cookie_data.data, More_Menu:menu_data.data,footer_contact:footer_data.data,social_icons:social_data.data , contact_icons:contact_data.data,   
   } }
  }

  export default function Pages({data,query,contact_icons,cookies,More_Menu,footer_contact , social_icons,support_page,about_excellence,homepage_about,about_core_value,about_join_team,about_award,about_csr,page,about_board_of_directors,about_case_study,about_company_logo,contact_location,contact_help,contact_footer_section,service_location,service,services_waaree_prime,video_section,why_solar,why_solar_benifits_row,clientele_logo_section,news,newses,manufacturing_process,manufacturing_video,manufacturing_company_logo,manufacturing_lab_facility,award_grid,award_gallery,csr_living,csr_team_review,csr_gallery_section,waaree_prime_page,waaree_box_icon,waaree_success_story,waaree_download_app_section,waaree_expet_page,investor,download_center,career_data,culture_data,life_at_waaree,event_data,partner_detail_section,partner_case_study_section,partner_city_data,partner_state_data,partner_location,product,blog,blog_category,blog_display,testimonial,blog_count}){

    if(data[0]?.attributes?.slug === "about")
    {
      const About = dynamic(() => import('../Components/About'))
        return(
         <>
         
          <About path={data[0]?.attributes} Footer_Contact={footer_contact} About_Excellence={about_excellence} Homepage_About={homepage_about}   About_Core_Value={about_core_value} About_Join_Team={about_join_team} About_Award={about_award}About_Csr={about_csr} Page={page} About_Board_Of_Directors={about_board_of_directors} About_Case_Study={about_case_study} About_Company_Logo={about_company_logo}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} />          
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "solar-calculator")
    {
      const SolarCalculator = dynamic(() => import( '../Components/SolarCalculator' ))
      return(
          <SolarCalculator path={data[0]?.attributes} Footer_Contact={footer_contact} 
          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>    
        )
    }

    else if(data[0]?.attributes?.slug === "franchise-enquiry"){
      const Enquiry = dynamic(() => import( '../Components/Enquiry' ))
        return(
            <Enquiry path={data[0]?.attributes} Footer_Contact={footer_contact} 
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }

    else  if(data[0]?.attributes?.slug === "manufacturing-plant")
    {
      const ManufacturingPlant = dynamic(() => import( '../Components/ManufacturingPlant'))
        return(
         <>
          <ManufacturingPlant path={data[0]?.attributes} Footer_Contact={footer_contact} Manufacturing_Process={manufacturing_process} Manufacturing_Video={manufacturing_video} Manufacturing_Company_Logo={manufacturing_company_logo} manufacturing={manufacturing_lab_facility}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "ipo")
    {
      const Investor= dynamic(() => import( '../Components/Investor'))
        return(
         <>
          <Investor path={data[0]?.attributes} Footer_Contact={footer_contact}  Investor={investor}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "contact")
    {
      const Contact= dynamic(() => import('../Components/Contact'))
        return(
         <>
          <Contact path={data[0]?.attributes} Footer_Contact={footer_contact} Contact_Location={contact_location} Contact_Help={contact_help} Contact_Footer_Section={contact_footer_section}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }
    else  if(data[0]?.attributes?.slug === "awards")
    {
      const Award = dynamic(() => import( '../Components/Award'))
        return(
         <>
          <Award path={data[0]?.attributes} Footer_Contact={footer_contact} page={award_grid} Award_Gallery={award_gallery}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "services")
    {
      const Service = dynamic(() => import( '../Components/Service'))
        return(
         <>
          <Service path={data[0]?.attributes} Footer_Contact={footer_contact} About_Join_Team={about_join_team}
          Service_Location={service_location} Service={service} Services_Waaree_Prime={services_waaree_prime}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }
   
    else  if(data[0]?.attributes?.slug === "partners")
    {
      const Partner = dynamic(() => import( '../Components/Partners' ))
        return(
         <>
          <Partner path={data[0]?.attributes} Footer_Contact={footer_contact} Partner_Detail_Section={partner_detail_section} Partner_Case_Study_Section={partner_case_study_section} Partner_State_Data={partner_state_data} Partner_City_Data={partner_city_data} Partner_Location={partner_location}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }  

  else  if(data[0]?.attributes?.slug === "videos")
    {
      const Videos = dynamic(() => import( '../Components/Videos' ))
        return(
         <>
          <Videos path={data[0]?.attributes} Footer_Contact={footer_contact} Video_Section={video_section}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} />
          </>  
        )
    }

  else if(data[0]?.attributes?.slug === "blog" )
    {
      const Blog = dynamic(() => import( '../Components/Blog' ))
      return(
        <>
         <Blog path={data[0]?.attributes} Footer_Contact={footer_contact}  Blog={blog} Blog_Category={blog_category}
         Blog_Display={blog_display}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} blog_count={blog_count} />
         </>  
       )
        
    }
         
    else  if(data[0]?.attributes?.slug === "all-news")
    {
      const PressRelease = dynamic(() => import( '../Components/PressRelease' ))
        return(
         <>
          <PressRelease path={data[0]?.attributes} Footer_Contact={footer_contact} News={newses}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "csr")
    {
      const CSR = dynamic(() => import( '../Components/CSR' ))
        return(
         <>
          <CSR path={data[0]?.attributes} Footer_Contact={footer_contact} Csr_Living={csr_living} Csr_Team_Review={csr_team_review} page={csr_gallery_section}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "why-solar")
    {
      const WhySolar = dynamic(() => import( '../Components/WhySolar' ))
        return(
         <>
          <WhySolar path={data[0]?.attributes} Footer_Contact={footer_contact}  Why_Solar={why_solar} Why_Solar_Benifits_Row={why_solar_benifits_row}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} />
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "clientele")
    {
      const Clientele = dynamic(() => import( '../Components/Clientele' ))
        return(
         <>
          <Clientele path={data[0]?.attributes} Footer_Contact={footer_contact}  Clientele_Logo_Section={clientele_logo_section}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} />
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "life-at-waaree")
    {
      const LifeAtWaaree = dynamic(() => import( '../Components/LifeAtWaaree' ))
        return(
         <>
          <LifeAtWaaree path={data[0]?.attributes} Footer_Contact={footer_contact}  About_Core_Value={about_core_value} About_Join_Team={about_join_team} Life_At_Waaree={life_at_waaree}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} />
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "work-culture")
    {
      const OurCulture = dynamic(() => import( '../Components/OurCulture' ))
        return(
         <>
          <OurCulture path={data[0]?.attributes} Footer_Contact={footer_contact} Culture_Data={culture_data}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }
         
    else  if(data[0]?.attributes?.slug === "waaree-prime")
    {
      const WaareePrime = dynamic(() => import( '../Components/WaareePrime' ))
        return(
         <>
          <WaareePrime path={data[0]?.attributes} Footer_Contact={footer_contact} Waaree_Prime_Page={waaree_prime_page} Waaree_Box_Icon={waaree_box_icon} Waaree_Success_Story={waaree_success_story} Waaree_Download_App_Section={waaree_download_app_section}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "waaree-expert")
    {
      const WaareeExpert = dynamic(() => import( '../Components/WaareeExpert'))
        return(
         <>
          <WaareeExpert path={data[0]?.attributes} Footer_Contact={footer_contact} Waaree_Prime_Page={waaree_prime_page}  Waaree_Download_App_Section={waaree_download_app_section} Waaree_Box_Icon={waaree_box_icon} Waaree_Success_Story={waaree_success_story} Waaree_Expet_Page={waaree_expet_page}
                          cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>
          </>  
        )
    }

    else  if(data[0]?.attributes?.slug === "work-with-us")
    {
      const Careers = dynamic(() => import( '../Components/Careers' ))
        return(
            <Careers path={data[0]?.attributes} Footer_Contact={footer_contact}  Career_Data={career_data}
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }
    
    else  if(data[0]?.attributes?.slug === "all-events")
    {
      const Events = dynamic(() => import( '../Components/Events' ))
        return(
            <Events path={data[0]?.attributes} Footer_Contact={footer_contact}  event={event_data}
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }
  
    else  if(data[0]?.attributes?.slug === "media-coverage")
    {
      const MediaCoverage = dynamic(() => import( '../Components/MediaCoverage' ))
        return(
            <MediaCoverage path={data[0]?.attributes} Footer_Contact={footer_contact} News={news}
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }

    else  if(data[0]?.attributes?.slug === "testimonials")
    {
      const Testimonial = dynamic(() => import( '../Components/Testimonial' ))
        return(
            <Testimonial path={data[0]?.attributes} Footer_Contact={footer_contact} Testimonial={testimonial}
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }
   
    else  if(data[0]?.attributes?.slug === "enquiry")
    {
      const Enquiry = dynamic(() => import( '../Components/Enquiry' ))
        return(
            <Enquiry path={data[0]?.attributes} Footer_Contact={footer_contact} 
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }

    else  if(data[0]?.attributes?.slug === "products")
    {
      const Products = dynamic(() => import( '../Components/Products' ))
        return(
            <Products path={data[0]?.attributes} Footer_Contact={footer_contact} About_Join_Team={about_join_team}
            Service_Location={service_location} Services_Waaree_Prime={services_waaree_prime} Product={product}
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }

    else  if(data[0]?.attributes?.slug === "support")
    {
      const Support = dynamic(() => import( '../Components/Support' ))
        return(
            <Support path={data[0]?.attributes} Footer_Contact={footer_contact} 
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} support={support_page}/>         
        )
    }

    else  if(data[0]?.attributes?.slug === "download-center")
    {
      const Downloadcenter = dynamic(() => import( '../Components/DownloadCenter' ))
        return(
            <Downloadcenter path={data[0]?.attributes} Footer_Contact={footer_contact}  Download_Center={download_center}
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons}/>         
        )
    }
    else if(data[0]?.attributes?.slug === "privacy-policy"
            || data[0]?.attributes?.slug === "terms-and-conditions" 
            || data[0]?.attributes?.slug === "faqs" ){
      const Design = dynamic(() => import('../Components/Design'))
        return(
          <>   
          <Design path={data[0]?.attributes}  Footer_Contact={footer_contact} 
                      cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} />
          </>
        )
    }

    else if(data[0]?.attributes?.slug == query.slug){
      const Design = dynamic(() => import('../Components/Design'))
        return(
            <Design path={data[0]?.attributes} Footer_Contact={footer_contact} 
            cookie_policy={cookies} MoreMenu={More_Menu} social_data={social_icons} contact_data={contact_icons} />
        )
    }

    else{
      const NotFound = dynamic(() => import( './404' ))
        return(
                <NotFound />
        )  
    }
  }