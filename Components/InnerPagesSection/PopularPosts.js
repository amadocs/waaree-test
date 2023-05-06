import React, { Component } from 'react';
import _ from 'lodash'
import Link from "next/link";

export default class PopularPosts extends Component{

    constructor(props) {
        super(props);
    }
   
    
    dispBlogDate(blogDate) {
        if (blogDate) {
            let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
            let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
            let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
            return (<>{day}{' '}<span>{month}{' '} {year}</span></>)
        }
    }

    render(){

               
        return (
            <>
                <div className="popular-post-wrapper">
                    <h5>Popular Posts</h5>
                    {this.props.data.map((val) =>
                    {
                            if(val?.attributes?.Popular_Posts === true){
                                return(
                                    <div className="populer-post-single" key={val.id}>
                                    <div className="post-image">
                                    <Link href="/blog/[slug]" as={`/blog/${val?.attributes?.slug}`} prefetch={false}>
                                         <a>
                                            <img src={val?.attributes?.Blog_Banner?.data?.attributes?.url} alt="Popular post images"  loading='lazy' />
                                        </a>
                                    </Link>
                                        
                                    </div>
                                    <div className="post-content">
                                        <h6 className="post-name">
                                        <Link href="/blog/[slug]" as={`/blog/${val?.attributes?.slug}`} prefetch={false}>
                                            <a>{val?.attributes?.Title}</a>
                                            </Link>
                                            </h6>
                                        <span className="post-date">{this.dispBlogDate(val?.attributes?.Blog_Date)}</span>
                                    </div>
                                </div>
                                )
                            }   
                    }                                           
                    )}
                </div>
            </>
    
        )
    }

}

