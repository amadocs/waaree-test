import React from 'react';
import {Container} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const VideoGallarySlider = dynamic(() =>  import('./VideoGallarySlider'))

export default class VideoGallarySection extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            data: [],
             
        };
    }

    componentDidMount(){
        fetch(process.env.NEXT_PUBLIC_API_URL + 'webinar-page?populate=*'
        ,{
          headers:{
            'Authorization' :  process.env.NEXT_PUBLIC_API_token
        }    
        }
        )
        .then(Res => Res.json())
        .then(message =>this.setState({
            data: message.data,
            DataisLoaded: true
        }) );
    }
    render(){

        const {data} = this.state

        return (
            <>
                <section className="section video-slider-section" style={{backgroundColor:"#fff"}}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <SectionTitle sectionTitle={data?.attributes?.Video_Slider_Section_Title} titleTheme="dark-title mb-80"/>
                                <div className="gallary-wrapper">
                                    <VideoGallarySlider />
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </>
        )
    }
}

