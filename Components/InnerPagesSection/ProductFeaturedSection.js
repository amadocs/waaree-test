import React from 'react';
import _ from 'lodash'
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))

const ProductFeaturedSection = (props) => {
    return (
        <section className="section product-feature-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle={props?.data?.attributes?.Product_Features_Title} 
                        titleTheme="dark-title mb-80 text-center" />
                        <div className="product-feature-wrap">
                            <div className="product-feature">
                                <div className="left-side-feature feature-list fadeIn-left">
                                    {
                                        props?.data?.attributes?.Product_Features.map((val,i)=>{
                                        
                                            if(i%2 == 0){
                                                return(
                                                    <div className="feature-single reveal-fade" key={val.id}>
                                                    <div className="icon-wrap">
                                                        <img priority="false" src={val?.Gallery_Image?.data?.attributes?.url 
                                                            ?val?.Gallery_Image?.data?.attributes?.url 
                                                            :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                                                    </div>
                                                    <span className="feature-text">{val?.Gallery_Item_text}</span>
                                                    <span className="icon-line"></span>
                                                </div>
                                                )
                                          
                                            }
                                        })
                                    }
                                
                                </div>
                                <div className="product-image reveal-fade stagger-animation">
                                    <img priority="false" src={props?.data?.attributes?.Product_Features_Image?.data?.attributes?.url
                                        ?props?.data?.attributes?.Product_Features_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy'/>
                                </div>
                                <div className="right-side-feature feature-list fadeIn-right">
                                {
                                        props?.data?.attributes?.Product_Features.map((val,i)=>{
                                            
                                            if(i%2 != 0){
                                            return(
                                                <div className="feature-single reveal-fade"  key={val.id}>
                                                <div className="icon-wrap">
                                                    <img priority="false" src={val?.Gallery_Image?.data?.attributes?.url 
                                                        ?val?.Gallery_Image?.data?.attributes?.url 
                                                        :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy'/>
                                                </div>
                                                <span className="feature-text">{val?.Gallery_Item_text}</span>
                                                <span className="icon-line"></span>
                                            </div>
                                            )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )

}

export default ProductFeaturedSection;