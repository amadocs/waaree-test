import _ from 'lodash'
import React,{Component} from 'react';
import { Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('./SectionInnerComponent/SectionTitle'))
const ButtonDiv  = dynamic(() =>  import( './SectionInnerComponent/ButtonDiv'))
const BlogSingle  = dynamic(() =>  import('./SectionInnerComponent/BlogSingle'))

export default class HomeBlogSection extends Component{
    constructor(props) {
        super(props);  
    }

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
            <div className="section blog-section" style={{backgroundColor: "#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="blog-inner">
                                <SectionTitle sectionTitle={this.props?.blog?.attributes?.Title} titleTheme="dark-title" />
                                <Row className="blog-row">

                                {this.props?.data.map((val) =>
                                <BlogSingle key={val.id}
                                blogBg={val?.attributes?.Blog_Banner?.data?.attributes?.url
                                    ? val?.attributes?.Blog_Banner?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE}
                                blogDate={this.dispBlogDate(val?.attributes?.Blog_Date)}
                                blogTitle={val?.attributes?.Title}
                                blogLink={`/blog/${val?.attributes?.slug}`}
                                />
                                )}
                                </Row>
                                <div className="view-all-btn text-center reveal-fade">
                                    <ButtonDiv buttonText={this.props?.blog?.attributes?.Button_Text}  buttonHref={this.props?.blog?.attributes?.Button_Link}  />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="inner-round-shape top-right custom-round">
                    <div className="green-round big reveal-fade"></div>
                    <div className="yellow-round small reveal-fade"></div>
                </div>
            </div>
        )
    }
}