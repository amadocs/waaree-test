import React from 'react';
import _ from 'lodash'
import dynamic from 'next/dynamic'
const PopularPosts = dynamic(() =>  import('./PopularPosts'))
const BlogCategories = dynamic(() =>  import('./BlogCategories'))

const BlogRightCol = (props) => {
    return (
        <>
               <div className="blog-right-inner" id="blogRightContent">
                <PopularPosts data={props.data} />
                <BlogCategories allData={props.data} setDisplayData={props.setDisplayData} data={props.Blog_Category} />
            </div>

        </>

    )
}

export default BlogRightCol;