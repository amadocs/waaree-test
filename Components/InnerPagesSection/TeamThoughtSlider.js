import React from 'react';
import _ from 'lodash'
import Slider from 'react-slick';

const TeamThoughtSlider = (props) => {

    var settingsTeamThought = {
        speed: 1000,
        arrows: true,
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
          ]
    };
    return (
        <>
            <Slider className="team-thought-slider" {...settingsTeamThought}>

                {props.data?.attributes?.Team_Thoughts_Section.map((val) =>

                    <div className="slide-inner" key={val.id}>
                        <div className="people-image">
                            <img priority="false" src={val?.Team_Member_Image?.data?.attributes?.url
                                    ? val?.Team_Member_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                        </div>
                        <div className="team-quotes"><blockquote>{val?.Team_Member_Quotes}</blockquote></div>
                        <div className="team-people-name">
                            <h5>
                                <a>{val?.Team_Member_Name}</a>
                            </h5>
                            <span className="team-position">{val?.Team_Member_Position}</span>
                        </div>
                    </div>
                )}
            </Slider>
        </>
    )
}

export default TeamThoughtSlider;