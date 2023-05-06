import React, { Component } from 'react';
import _ from 'lodash'
import { Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const CoreValueTab = dynamic(() =>  import('./CoreValueTab'))

export default class CompanyLogoSection extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <section className="section core-value-tab-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle={this.props.data?.attributes?.Life_At_Waaree_Section_Title} titleTheme="dark-title"/>
                            <div className="core-value-tab-wrap">
                                 <CoreValueTab data={this.props.data} />   
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        )
    }
 
}

