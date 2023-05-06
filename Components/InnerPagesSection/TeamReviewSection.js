import React from 'react';
import _ from 'lodash'
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const TeamReviewSlider  = dynamic(() =>  import('./TeamReviewSlider'))

const TeamReviewSection = (props) => {

    return (
        <section className="section team-review-section" style={{backgroundColor:"#0e4a25"}}>
            <div className="section-inner">
                <div className="section-wrap">
                    <div className="team-review-slider-wrapper">
                        <div className="team-slider-main">
                            <Container>
                                <TeamReviewSlider data={props.Csr_Team_Review} />
                            </Container>
                        </div>
                        <div className="big-round-shape">
                            <div className="inner-round-shape"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default TeamReviewSection;