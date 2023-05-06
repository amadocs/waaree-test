import React, { Component } from 'react';
import dynamic from 'next/dynamic'
import Link from "next/link";
const AudioPlayerDiv = dynamic(() =>  import( '../InnerPagesSection/AudioPlayer'))
export default class BlogDetailCol extends Component{
    constructor(props) {
        super(props)    
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


  

        console.log(Array.isArray(this.props.data) , "data");
        return (
            <>
                  {
            Array.isArray(this.props.data) == false ?<>
               <div className="blog-single">
                    <div className="blog-inner">
                        <div className="blog-image">
                            <a href="">
                                <img loading='lazy' src={this.props?.data?.attributes?.Blog_Banner?.data?.attributes?.url
                                        ? this.props?.data?.attributes?.Blog_Banner?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt={this.props?.data?.attributes?.Title}  />
                            </a>
                        </div>
                        <div className="blog-title-wrap">
                            <h4>
                            {this.props?.data?.attributes?.Title}
                            </h4>
                            <div className="blog-date-share-wrap">
                                <div className="blog-date">{this.dispBlogDate(this.props?.data?.attributes?.Blog_Date)} at <span>{this.props?.data?.attributes?.Blog_Author}</span></div>
                                <div className="share-btn">
                                    <span>Share This</span>

                                    <ul className="social-icon">
                                        <li>
                                         <a className="social-link facebook" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.waaree.com/blog/` + this.props?.data?.attributes?.slug + '/&t=' + this.props?.data?.attributes?.slug } target="_blank" rel="nofollow">
                                            <i className="fab fa-facebook-f"></i></a>

                                        </li>  
                                        <li>
                                        <a className="social-link twitter" href={`https://twitter.com/intent/tweet?url=https://www.waaree.com/blog/` + this.props?.data?.attributes?.slug  + '/&amp;text=' + this.props?.data?.attributes?.slug  + `&amp;tw_p=tweetbutton&amp;url=https://www.waaree.com/blog/` + this.props?.data?.attributes?.slug} target="_blank" rel="nofollow">
                                            <i className="fab fa-twitter"></i></a>
                                         </li>  
                                        <li>
                                        <a  className="social-link linkedin" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.waaree.com/blog/` + this.props?.data?.attributes?.slug + '/&amp;summary=&amp;source=Waaree Energies' + this.props?.data?.attributes?.slug} target="_blank" rel="nofollow">
                                            <i className="fab fa-linkedin-in"></i></a>

                                        </li>
                                    </ul>
                               
                                </div>
                            </div>
                            {
                                this.props?.data?.attributes?.Audio_Blog?.data == null ? "" : <AudioPlayerDiv data={this.props.data}/>
                            }
                           
                        </div>
                        <div className="blog-detail-content" dangerouslySetInnerHTML={{__html:this.props?.data?.attributes?.Blog_Body}}>
                        </div>

                    </div>
                </div>
            
            </> : <>
            {this.props.data.map((val) =>
                                    <div className="blog-single" key={val.id}>
                                        <div className="blog-inner">
                                            <div className="blog-image">
                                            <Link href="/blog/[slug]" as={`/blog/${val?.attributes?.slug}`} >
                                                <a>
                                                    <img src={val?.attributes?.Blog_Banner?.data?.attributes?.url
                                                            ? val?.attributes?.Blog_Banner?.data?.attributes?.url
                                                            : process.env.NEXT_PUBLIC_NO_IMAGE} />
                                                </a>
                                                </Link>
                                            </div>
                                            <div className="blog-title-wrap">
                                                <h4>
                                                <Link href="/blog/[slug]" as={`/blog/${val?.attributes?.slug}`} >
                                                    <a>{val?.attributes?.Title}</a>
                                                </Link>
                                                </h4>
                                                <div className="blog-date-share-wrap">
                                                    <div className="blog-date">{this.dispBlogDate(val?.attributes?.Blog_Date)} at <span>{val?.attributes?.Blog_Author}</span></div>
                                                    <div className="share-btn">
                                                        <span>Share This</span>
                                                        <ul className="social-icon">
                                                        <li>
                                                        <a className="social-link facebook" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.waaree.com/blog/` + val?.attributes?.slug + '/&t=' +val?.attributes?.slug } target="_blank" rel="nofollow">
                                                            <i className="fab fa-facebook-f"></i></a>
                                                        </li>  
                                                        <li>
                                                        <a className="social-link twitter" href={`https://twitter.com/intent/tweet?url=https://www.waaree.com/blog/` +val?.attributes?.slug  + '/&amp;text=' +val?.attributes?.slug  + `&amp;tw_p=tweetbutton&amp;url=https://www.waaree.com/blog/` +val?.attributes?.slug} target="_blank" rel="nofollow">
                                                            <i className="fab fa-twitter"></i></a>
                                                            </li>  
                                                        <li>
                                                        <a  className="social-link linkedin" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.waaree.com/blog/` +val?.attributes?.slug + '/&amp;summary=&amp;source=Waaree Energies' +val?.attributes?.slug} target="_blank" rel="nofollow">
                                                            <i className="fab fa-linkedin-in"></i></a>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="blog-detail-content">
                                                <p>{val?.attributes?.blog_excerpt}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
            </>
        }
             
            </>
        )
    }
}