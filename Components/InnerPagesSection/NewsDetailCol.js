import React, { Component } from 'react';
import _ from 'lodash'
export default class NewsDetailCol extends Component{
    constructor(props) {
        super(props)      
      }

      dispBlogDate(blogDate) {
        if (blogDate) {
            let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
            let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
            let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
            return (<>{day}{'. '}{month}{'. '}{year}</>)
        }
    }

    render(){
        return (
            <>
                <div className="blog-single">
                    <div className="blog-inner">
                        <div className="blog-image">
                            <a href="">
                                <img priority="false" src={this.props?.data?.attributes?.News_Image?.data?.attributes?.url
                                ? this.props?.data?.attributes?.News_Image?.data?.attributes?.url
                                :  process.env.NEXT_PUBLIC_NO_IMAGE} alt="Blog images"  loading='lazy' />
                            </a>
                        </div>
                        <div className="blog-title-wrap">
                            <h4>
                                <a href="#">{this.props?.data?.attributes?.Title}</a>
                            </h4>
                            <div className="blog-date-share-wrap">
                                <div className="blog-date">{this.dispBlogDate(this.props?.data?.attributes?.News_Date)}</div>
                                <div className="share-btn">
                                    <span>Share This</span>

                                    <ul className="social-icon">
                                        <li>
                                        <a className="social-link facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_API_URL}/news/` + this.props?.data?.attributes?.slug + '/&t=' + this.props?.data?.attributes?.slug } target="_blank" rel="nofollow">
                                            <i className="fab fa-facebook-f"></i></a>

                                        </li>  
                                        <li>
                                        <a className="social-link twitter" href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_API_URL}/news/` + this.props?.data?.attributes?.slug  + '/&amp;text=' + this.props?.data?.attributes?.slug  + `&amp;tw_p=tweetbutton&amp;url=${process.env.NEXT_PUBLIC_API_URL}/news/` + this.props?.data?.attributes?.slug} target="_blank" rel="nofollow">
                                            <i className="fab fa-twitter"></i></a>
                                         </li>  
                                        <li>
                                        <a  className="social-link linkedin" href={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_API_URL}/news/` + this.props?.data?.attributes?.slug + '/&amp;summary=&amp;source=Waaree Energies' + this.props?.data?.attributes?.slug} target="_blank" rel="nofollow">
                                            <i className="fab fa-linkedin-in"></i></a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                         </div>
                        <div className="blog-detail-content" dangerouslySetInnerHTML={{__html:this.props?.data?.attributes?.News_Body}}>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}