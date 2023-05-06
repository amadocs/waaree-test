import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Col} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
import Link from "next/link";
import Slider from 'react-slick';

var settingsBlogSlider = {
    speed:600,
    arrows:true,
    infinite:false,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect:true,
    // swipe:true,
    draggable: true,
    responsive: [
      {
          breakpoint: 768,
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


export default class  RelatedBlogSection extends Component{

    constructor(props) {
        super(props)    
        this.state = {
            // count: [],
            DataisLoaded : false
         
        };  
    };

    // componentDidMount(){
    //     fetch(process.env.NEXT_PUBLIC_API_URL + 'web-setting?populate=*'
    //     ,{
    //       headers:{
    //         'Authorization' :  process.env.NEXT_PUBLIC_API_token
    //     }    
    //     }
    //     )
    //     .then(Res => Res.json())
    //     .then(message =>this.setState({
    //         count: message.data,
    //     }) );
    // }

    dispBlogDate(blogDate) {
        if (blogDate) {
            let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
            let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
            let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
            return (<>{day}{' '}{month}{' '} {year}</>)
        }
    }
    render(){
       return (
            <>
            {this.props.data?.attributes?.Related_Blogs?.blogs?.data.length > 0 && 
                <section className="section related-blog-section" style={{ backgroundColor: "#f0faf2" }}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <div className="blog-inner">
                                    <SectionTitle sectionTitle="Related Blogs" titleTheme="dark-title" />
                                    <Slider className="realted-blog-slider blog-row" {...settingsBlogSlider}>
                                       {
                                         
                                           this.props.data?.attributes?.Related_Blogs?.blogs?.data
                                           .slice(0,this.props.count?.attributes?.Related_Blogs_Display).map((val)=>{
                                               return(
                                                <Col xl={4} md={6} className="blog-col reveal-fade">
                                                <div className="col-inner">
                                                  <div className="blog-image">
                                                <Link href="/blog/[slug]" as={`/blog/${val?.attributes?.slug}`}  prefetch={false}>
                                                     <a>
                                                     <img loading='lazy' src={val?.attributes?.Blog_Banner?.data?.attributes?.url
                                        ? val?.attributes?.Blog_Banner?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt={this.props?.data?.attributes?.Title}  />
                                                    </a>
                                                </Link>
                                                   
                                                  </div>
                                                  <div className="blog-content">
                                                    <span className="blog-date">{this.dispBlogDate(val?.attributes?.Blog_Date)}</span>
                                                    <div className="blog-title">
                                                    <Link href="/blog/[slug]" as={`/blog/${val?.attributes?.slug}`}  prefetch={false}>
                                                    <a>{val?.attributes?.Title}</a>
                                                    </Link>
                                                      
                                                    </div>
                                                    <div className="read-more-link">
                                                    <Link href="/blog/[slug]" as={`/blog/${val?.attributes?.slug}`}  prefetch={false}>
                                                    <a className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
                                                    </Link>
                                                      
                                                    </div>
                                                  </div>
                                                </div>
                                              </Col>
                                               )
                                           })
                                       }
                                        
                                    </Slider>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
    }
            </>
        )
    }
}

