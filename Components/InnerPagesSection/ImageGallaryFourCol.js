import React, { useState, useEffect } from 'react';
import _ from 'lodash'
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

export default function ImageGallaryFourCol(props){

    const [visibleBlogs, setVisibleBlogs] = useState(4)
    useEffect(async () => {


            setTimeout(() => {
                const ImagelightGalleryClass = document.getElementById('lightgallery');
                const btnId = document.querySelector('.gallery-load-btn');

                const ImagelightGallery =  lightGallery(ImagelightGalleryClass, {
                    speed: 600,
                    closable:true
                });

                btnId.onclick = function () {
                    btnId.classList.add('hide');

                    setVisibleBlogs(props?.data?.attributes?.Project_Gallery.length)
                    // destroyLightGallaryIntialize();
                    ImagelightGallery.destroy(true);

                    setTimeout(() => {
                        lightGallery(ImagelightGalleryClass);
                    }, 100);
                }
                
            }, 1000);
            

    }, []);
    
    props?.data?.attributes?.Project_Gallery.sort((a,b)=>{
        if(a?.Gallery_Image?.data?.attributes?.createdAt > b?.Gallery_Image?.data?.attributes?.createdAt ) return -1;
        if(a?.Gallery_Image?.data?.attributes?.createdAt < b?.Gallery_Image?.data?.attributes?.createdAt ) return 1;
         return 0
        })

        return(
            <>
            <div className="image-gallary-row four-col-row">
            <div id="lightgallery" className="lightgallary-wrap">
                    { props?.data?.attributes?.Project_Gallery.slice(0, visibleBlogs).map((val) =>
                        <div className="gallary-item" 
                        key={val.id} 
                        data-src={val?.Gallery_Image?.data?.attributes?.url} 
                        data-sub-html={`<p> ${val?.Gallery_Item_text} </p>`}>

                            <a href={val?.Gallery_Image?.data?.attributes?.url
                                    ? val?.Gallery_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE}>
                                <img priority="false" alt="" src={val?.Gallery_Image?.data?.attributes?.url
                                    ? val?.Gallery_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} loading='lazy' />
                                <div className="gallary-text">
                                    <p>{val?.Gallery_Item_text}</p>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
                <div className="btn-wrap text-center">
                <button className="btn btn-primary gallery-load-btn">Load More<i className="fa fa-chevron-right"></i></button>
                </div>

            </div>
        </>
        )
}

