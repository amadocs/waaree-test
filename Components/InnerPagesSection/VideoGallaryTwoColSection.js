import React, { useState, useEffect } from 'react';
import _ from 'lodash'
import {Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';

export default function VideoGallaryTwoColSection(props){
    const [visibleBlogs, setVisibleBlogs] = useState(2)
    useEffect(async () => {
       setTimeout(() => {
            const ImagelightGalleryClass = document.getElementById('lightgallery');
            const btnId = document.querySelector('.gallery-load-btn');

            const ImagelightGallery =  lightGallery(ImagelightGalleryClass, {
                speed: 500,
                closable:true,
                plugins: [lgVideo],
                addClass:"video-gallary",
            });

            btnId.onclick = function () {
                btnId.classList.add('hide');

                setVisibleBlogs(props.data?.attributes?.Video_Gallery.length)

                // destroyLightGallaryIntialize();
                ImagelightGallery.destroy(true);

                setTimeout(() => {
                    lightGallery(ImagelightGalleryClass,{
                        addClass:"video-gallary",
                        plugins: [lgVideo],
                    });
                }, 100);
            }
        }, 2000);        
    }, []);
        return (
            <>
                <section className="section video-gallary-section gallary-two-col-section" style={{backgroundColor:"#fff"}}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <SectionTitle sectionTitle={props.data?.attributes?.Title} titleTheme="dark-title mb-80" />
                                <div className="gallary-wrapper without-gallary-text">
                                <div className="video-gallary-row two-col-row">
                         <div id="lightgallery" className="lightgallary-wrap">
                        {props.data?.attributes?.Video_Gallery?.slice(0, visibleBlogs).map((val) =>
                            <div className="gallary-item" 
                            key={val.id}
                            data-sub-html={`<p> ${val?.Video_Gallery_Title} </p>`} 
                            data-src={val?.Video_Gallery_Video_Link} 
                            data-poster={val?.Video_Gallery_Image?.data?.attributes?.url}
                            >
    
                                <a href={val?.Video_Gallery_Image?.data?.attributes?.url}>
    
                                    <img priority="false" alt="" src={val?.Video_Gallery_Image?.data?.attributes?.url
                                                    ? val?.Video_Gallery_Image?.data?.attributes?.url
                                                    : process.env.NEXT_PUBLIC_NO_IMAGE} loading='lazy' />
                                </a>
    
                            </div>
                        )}
                    </div>
                    <div className="btn-wrap text-center">
                    <button className="btn btn-primary gallery-load-btn">{props.data?.attributes?.Button_Text}<i className="fa fa-chevron-right"></i></button>
                    </div>
                </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </>
        )

    

}

