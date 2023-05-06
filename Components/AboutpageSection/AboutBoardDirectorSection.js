import _ from 'lodash'
import React from 'react';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const BoardDirectorSlider  = dynamic(() =>  import('./aboutsectionInnerComponent/BoardDirectorSlider'))

export default function AboutBoardDirectorSection(props){
         return(
            <section className="section board-director-section" id='ourpeople'>
            <div className="section-inner ">
                <div className="container">
                    <div className="section-wrap">
                        <SectionTitle sectionTitle={props?.pages[3]?.attributes?.Page_Title} titleTheme="dark-title" />
                        <BoardDirectorSlider  data={props.About_Board_Of_Directors} />
                    </div>
                </div>
            </div>
        </section>
        )

}


