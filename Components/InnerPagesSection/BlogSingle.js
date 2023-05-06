import React from 'react';
import { useEffect, useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
function dispBlogDate(blogDate) {
        if (blogDate) {
            let day = (new Date(blogDate)).toLocaleDateString('en-US', {day: 'numeric'});
            let year = (new Date(blogDate)).toLocaleDateString('en-US', {year: 'numeric'});
            let month = (new Date(blogDate)).toLocaleDateString('en-US', {month: 'long'});
            return (<>{day}{' '}{month}{' '} {year}</>)
        }
    }


export default function BlogSingle(props){
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    let limit = 5;


    useEffect(async () => {
   
        const getComments = async () => {
          const res = await  fetch(process.env.NEXT_PUBLIC_API_URL + `blogs?sort=Blog_Date:desc&limit=${limit}`
          ,{
            headers:{
              'Authorization' :  process.env.NEXT_PUBLIC_API_token
          }    
          }
          ).then(Res => Res.json())
          .then(message =>{setItems(message.data)} ); 
          
        };
    
        getComments();
   
        const total = props.blog_count
        setpageCount(Math.ceil(total / limit));
        
      }, [limit]);

      const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)

        if (searchInput !== '') {
            const filteredData = props.data.filter((item) => {
                return Object.values(item.attributes.Title).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(items)
        }
    }

      const fetchComments = async (currentPage) => {
        const res = await  fetch(process.env.NEXT_PUBLIC_API_URL + `blogs?sort=Blog_Date:desc&start=${currentPage}&limit=${limit}`
        ,{
          headers:{
            'Authorization' :  process.env.NEXT_PUBLIC_API_token
        }    
        }
        )
        const data = await res.json();  
        return data.data;
      };
    
      const handlePageClick = async (data) => {

       var currentPage = data.selected + 1

        if(data.selected === 0) 
            currentPage =  data.selected 
        else
            currentPage =  ((data.selected - 1) * 5) + 5

        const paginationItem = document.getElementsByClassName('page-link');
          setTimeout(function() {
 
            document.body.scrollTop = 0 ;
            document.documentElement.scrollTop = 0; 
        }, 1000);
      // }
        const commentsFormServer = await fetchComments(currentPage);
    
        setItems(commentsFormServer);
      };
    return(
        <>
{
    props.Items.length == props.blog_count ? <>
      {items.map((val) =>
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
                                                    <div className="blog-date">{dispBlogDate(val?.attributes?.Blog_Date)} at <span>{val?.attributes?.Blog_Author}</span></div>
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
            <ReactPaginate
                previousLabel={"First"}
                nextLabel={"Last"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"first page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"last page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                /> </>: <>
                
                {props.Items.map((val) =>
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
                                                    <div className="blog-date">{dispBlogDate(val?.attributes?.Blog_Date)} at <span>{val?.attributes?.Blog_Author}</span></div>
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