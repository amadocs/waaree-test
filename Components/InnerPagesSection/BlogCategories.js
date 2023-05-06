import React from 'react';
import _ from 'lodash'
export default function BlogCategories({ allData, setDisplayData,data }) {

    const handleFilter = (val) => {
        let dummyArray = []
        allData?.forEach((item) => {
            if(item?.attributes?.blog_categories?.data?.filter((x) => x?.attributes?.Title == val.attributes.Title).length > 0){
                dummyArray.push(item)


            }
        })
        setDisplayData(dummyArray)
    }
     return (
        <>
            <div className="blog-categories-wrapper">
                <h5>Categories</h5>
                <ul>
                    {data.map((val) =>
                        <li key={val.id} onClick={() => handleFilter(val)}>
                            <a href="#">{val?.attributes?.Title}</a>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )

}

