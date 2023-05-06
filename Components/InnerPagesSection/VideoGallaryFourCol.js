import React, { useState, useEffect } from 'react';
import _ from 'lodash'
import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';

export default function VideoGallaryFourCol(props){

    const [visibleBlogs, setVisibleBlogs] = useState(4)

    useEffect(async () => {

        setTimeout(() => {
            const ImagelightGalleryClass = document.getElementById('lightgallery');
            const btnId = document.querySelector('.gallery-load-btn');

            const ImagelightGallery =  lightGallery(ImagelightGalleryClass, {
                speed: 500,
                plugins: [lgVideo],
                addClass:"video-gallary",
                closable:true,
                showCloseIcon: true,
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

    props.data?.attributes?.Video_Gallery.sort((a,b)=>{
        if(a?.Video_Gallery_Image?.data?.attributes?.createdAt > b?.Video_Gallery_Image?.data?.attributes?.createdAt ) return -1;
        if(a?.Video_Gallery_Image?.data?.attributes?.createdAt < b?.Video_Gallery_Image?.data?.attributes?.createdAt ) return 1;
         return 0
        })

        return (
            <>
                <div className="video-gallary-row four-col-row test">
               
                    <div id="lightgallery" className="lightgallary-wrap">
                    {props.data?.attributes?.Video_Gallery.slice(0, visibleBlogs).map((val) =>
                            <div className="gallary-item" 
                            key={val.id} 
                            data-src={props.data?.attributes?.Video_Section_Video_LInk
                                ? props.data?.attributes?.Video_Section_Video_LInk
                                : process.env.NEXT_PUBLIC_NO_IMAGE } 
                            data-sub-html={`<p> ${val.Video_Gallery_Title} </p>`} 
                            data-poster={val?.Video_Gallery_Image?.data?.attributes?.url} >

                                <a href={val?.Video_Gallery_Image?.data?.attributes?.url
                                    ? val?.Video_Gallery_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE }>
                                    <img priority="false" alt="" 
                                    src={val?.Video_Gallery_Image?.data?.attributes?.url
                                    ? val?.Video_Gallery_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE } loading='lazy' />
                                    <div className="gallary-text">
                                        <p>{val.Video_Gallery_Title}</p>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                    
                    <div className="btn-wrap text-center">
                    <button className="btn btn-primary gallery-load-btn">{props.data?.attributes?.Button_Text}<i className="fa fa-chevron-right"></i></button>
                    </div>
    
                </div>
            </>
        )
    
}
