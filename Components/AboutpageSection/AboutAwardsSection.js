import _ from 'lodash'
import React from 'react';
import Link from 'next/link'
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

export default function AboutAwardsSection(props){

    const AwardImage = (props) =>{
        return(
        <div className="image-wrap reveal-fade" key={props.id}>
            <img priority="false" src={props.awardImageSrc} alt="Award Image" loading='lazy' />
        </div>
        )
    } 
    return (
        <section className="section award-section" style={{backgroundColor: "#f0faf2"}}>
            <div className="section-inner">
                <div className="container">
                    <div className="section-wrap">
                        <div className="row award-row">
                            <div className="col-lg-4 award-image-column"> 
                            <div className="image-column-wrap"> 

                                
                                                    
                                                    <div className="left-image">
                                                        {

                                                    props?.AwardData?.attributes?.Award_Gallery.data?.map((data, i)=>{
                                                        if(i%2 == 0){
                                                            return(
                                                                <AwardImage key={data.id}  awardImageSrc={data ? 
                                                                    data?.attributes?.url 
                                                                     : process.env.NEXT_PUBLIC_NO_IMAGE} id="awardImage1"/>
                                                            )
                                                        }
                                                  
                                                })

                                                    }
                                                 </div>

                                                 <div className="right-image">
                                                        {

                                                    props?.AwardData?.attributes?.Award_Gallery?.data.map((data, i)=>{
                                                        if(i%2 !== 0){
                                                            return(
                                                                <AwardImage key={data.id} awardImageSrc={data ? 
                                                                    data?.attributes?.url
                                                                     : process.env.NEXT_PUBLIC_NO_IMAGE} id="awardImage1"/>
                                                            )
                                                        }
                                                  
                                                })

                                                    }
                                                 </div>
                                                       
                            </div>  
                           </div>
                            <div className="col-lg-8 award-content-column">
                                <div className="content-column-wrap">
                                    <SectionTitle sectionTitle={props?.AwardData?.attributes?.Title} titleTheme="dark-title" />
                                    <div className="content-text reveal-fade">
                                        <p>{props?.AwardData?.attributes?.Short_Description}</p>
                                    </div>
                                    <div className="btn-wrap reveal-fade">
                                        <Link href={props?.AwardData?.attributes?.Button_Link} prefetch={false} >
                                        <a  className="btn btn-primary" >Read More<i className="fas fa-chevron-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
