import React from 'react';
import Slider from 'react-slick';
import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import { useState, useEffect, useRef } from 'react';


export default function VideoGallarySlider() {

  const [data, setdata] = useState([])
  const [dataIsLoaded, setDataIsLoaded] = useState(false)

  var settingsVideoSlider = {
    speed: 600,
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };


  useEffect(async () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + 'webinar-page?populate=*'
      , {
        headers: {
          'Authorization': process.env.NEXT_PUBLIC_API_token
        }
      }
    )
      .then(Res => Res.json())
      .then(message => {
        setdata(message.data)
        setDataIsLoaded(true)
      });

    setTimeout(() => {
      const ImagelightGalleryClass = document.querySelectorAll('.slider-videogallary');

      [].forEach.call(ImagelightGalleryClass, function (item) {

        lightGallery(item, {
          speed: 500,
          closable: true,
          plugins: [lgVideo],
          controls: false,
          arrow: false,
          counter: false,
          addClass:"video-gallary",
        });
      });

    }, 500);
  }, []);


  data?.attributes?.Mentors_Videos.sort((a,b)=>{
    if(a?.Gallery_Item_Image?.data?.attributes?.createdAt > b?.Gallery_Item_Image?.data?.attributes?.createdAt ) return -1;
    if(a?.Gallery_Item_Image?.data?.attributes?.createdAt < b?.Gallery_Item_Image?.data?.attributes?.createdAt ) return 1;
     return 0
    })

    
  return (
    <div className="video-gallary-slider-wrapper">

      <Slider className="video-gallary-slider" {...settingsVideoSlider}>

        {dataIsLoaded && data?.attributes?.Mentors_Videos.map((val) =>
          <div className="slider-videogallary lightgallary-wrap">
            <div className="gallary-item"
              data-sub-html={`<p> ${val?.Gallery_Item_Text} </p>`}
              data-src={val?.Gallery_Item_Video_Src}
              data-poster={val?.Gallery_Item_Image?.data?.attributes?.url}>
              <a href={val?.Gallery_Item_Image?.data?.attributes?.url}>
                <img alt="" src={val?.Gallery_Item_Image?.data?.attributes?.url
                  ? val?.Gallery_Item_Image?.data?.attributes?.url
                  : process.env.NEXT_PUBLIC_NO_IMAGE}  />
                <div className="gallary-text-wrap">
                  <div className="gallary-title-text">
                    <p>{val?.Gallery_Item_Text}</p>
                  </div>
                  <span>{val?.Gallery_Item_Position}</span>
                  <span className="gradiant-tag">{val?.Gallery_Item_Tag}</span>
                </div>

              </a>
            </div>
          </div>
        )}
        </Slider>
    </div>

  );
}

