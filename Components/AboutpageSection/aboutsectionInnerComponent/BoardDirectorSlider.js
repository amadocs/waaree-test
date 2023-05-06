import _ from 'lodash'
import React from 'react';
import Slider from 'react-slick';
import Link from "next/link";

export default function BoardDirectorSlider(props){

  var settingsBoardDirector = {
    speed: 600,
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return(

    <Slider className="board-director-slider" {...settingsBoardDirector}>
    {props.data.length !== 0 &&  props.data.map((val) =>
      <div className="slide-single reveal-fade" key={val.id}>
        <div className="slide-inner">
          <div className="board-member-image">
            <Link href={`/Board-Of-Directors/${val?.attributes?.slug}`} prefetch={false} >
            <a>
              <img priority="false" src={val?.attributes?.Board_Of_Director_Image?.data?.attributes?.url
                    ? val?.attributes?.Board_Of_Director_Image?.data?.attributes?.url
                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt={val?.attributes?.slug} loading='lazy' />
            </a>
                    </Link>
          </div>
          <div className="board-member-detail">
            <h5 className="member-title">{val?.attributes?.Title}</h5>
            <span className="member-position">{val?.attributes?.Position}</span>
            <div className="read-more-link">
              <Link href="/Board-Of-Directors/[slug]" as={`/Board-Of-Directors/${val?.attributes?.slug}`} prefetch={false} >
              <a className="read-more">View More<i className="fas fa-chevron-right"></i></a>
              </Link>
         
            </div>
          </div>
        </div>
      </div>
    )}
  </Slider>
  )
}

