import React, { Component } from 'react';
import _ from 'lodash'
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const TeamThoughtSlider = dynamic(() =>  import('./TeamThoughtSlider'))

export default class TeamThoughtSection extends Component {

    constructor(props) {
        super(props);
    }
   render(){
        return (
            <section className="section team-thought-section" style={{backgroundColor:"#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle={this.props.data?.attributes?.Team_Thought_Section_Title} titleTheme="dark-title"/>
                            <div className="team-thought-slider-wrap">
                                <TeamThoughtSlider data={this.props.data} />
                            </div>
    
                        </div>
                    </Container>
                    <div className="section-inner-round"></div>
                </div>
            </section>
        )
    }
  
}

