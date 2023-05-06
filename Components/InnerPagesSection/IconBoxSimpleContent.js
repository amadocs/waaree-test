import React, { Component } from 'react';
import _ from 'lodash'
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
export default class IconBoxSimpleContent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
                <div className="simple-content mb-80">
                    <div className="content-text">
                        <SectionTitle sectionTitle={this.props.data?.attributes?.Icon_Section_Title} titleTheme="green-title" />
                        <p className="h4">{this.props.data?.attributes?.Icon_Section_Description}</p>
                    </div>
                </div>
            </>
        )
    }
  
}

