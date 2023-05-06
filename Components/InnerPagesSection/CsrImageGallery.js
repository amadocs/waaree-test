import React, { useState, useEffect }   from 'react';
import _ from 'lodash'
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';

export default function CsrImageGallary(props){
  
    const [visibleBlogs, setVisibleBlogs] = useState(4)
    useEffect(async () => {

            setTimeout(() => {
                const ImagelightGalleryClass = document.getElementById('lightgallery');
                const btnId = document.querySelector('.gallery-load-btn');

                const ImagelightGallery =  lightGallery(ImagelightGalleryClass, {
                    speed: 500,

                    closable:true
                });

                btnId.onclick = function () {
                    
                    btnId.classList.add('hide');
                    setVisibleBlogs(props.data?.attributes?.Image_Gallery.length)
                   

                    // destroyLightGallaryIntialize();
                    ImagelightGallery.destroy(true);

                    setTimeout(() => {
                        lightGallery(ImagelightGalleryClass);
                    }, 100);


                }
            }, 500);
            

    }, []);

    
    props.data?.attributes?.Image_Gallery.sort((a,b)=>{
        if(a?.Gallery_Image?.data?.attributes?.createdAt > b?.Gallery_Image?.data?.attributes?.createdAt ) return -1;
        if(a?.Gallery_Image?.data?.attributes?.createdAt < b?.Gallery_Image?.data?.attributes?.createdAt ) return 1;
         return 0
        })
       
        return(
            <>
            <div className="image-gallary-row">
            <div id="lightgallery" className="lightgallary-wrap">
                 <div className="first-item gallry-text-item green-bg" >
                     <div className="gallary-text-inner">
                         <h4 className="gallary-title">{props.data?.attributes?.Gallery_Title}</h4>
                         <div className="content-text">
                             <p>{props.data?.attributes?.Gallery_Content}</p>
                         </div>
                     </div>
                 </div>
                 {props.data?.attributes?.Image_Gallery.slice(0, visibleBlogs).map((val) =>
                     <div className="gallary-item" 
                     key={val.id} 
                     data-src={val?.Gallery_Image?.data?.attributes?.url
                        ? val?.Gallery_Image?.data?.attributes?.url
                        : process.env.NEXT_PUBLIC_NO_IMAGE }
                     data-sub-html={`<p> ${val.Gallery_Item_text} </p>`}>

                         <a href={val?.Gallery_Image?.data?.attributes?.url
                            ? val?.Gallery_Image?.data?.attributes?.url
                            : process.env.NEXT_PUBLIC_NO_IMAGE }>
                             <img priority="false" alt="Gallery Image" 
                             src={val?.Gallery_Image?.data?.attributes?.url
                            ? val?.Gallery_Image?.data?.attributes?.url
                            : process.env.NEXT_PUBLIC_NO_IMAGE }  loading='lazy'   />
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



