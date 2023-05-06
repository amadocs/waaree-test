import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle  = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
import { useState, useEffect } from 'react';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import lgVideo from 'lightgallery/plugins/video';


const VideoFilterSection = () => {


    const [visibleBlogs, setVisibleBlogs] = useState(4)

    const [data, setdata] = useState([])
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    useEffect(async () => {
        fetch(process.env.NEXT_PUBLIC_API_URL + 'webinar-page?populate=*'
            , {
                headers: {
                    'Authorization': process.env.NEXT_PUBLIC_API_token
                }
            }
        )
            .then(Res => Res.json())

            .then(message => {
                setdata(message.data)
                setDataIsLoaded(true)
            });

        setTimeout(() => {
            const ImagelightGalleryClass = document.getElementById('Filterlightgallery');
            const btnId = document.querySelector('.gallery-load-btn');
            const filterListBtn = document.querySelectorAll('.filter-btn');

            const ImagelightGallery = lightGallery(ImagelightGalleryClass, {
                speed: 500,
                closable: true,
                plugins: [lgVideo],
                addClass:"video-gallary",
                controls: false,
                counter:false,
            });

            btnId.onclick = function () {
                btnId.classList.add('hide');

                setVisibleBlogs(data?.attributes?.Workshop_Videos.length)

                // destroyLightGallaryIntialize();
                ImagelightGallery.destroy(true);

                setTimeout(() => {
                    lightGallery(ImagelightGalleryClass,{
                        addClass:"video-gallary",
                        plugins: [lgVideo],
                    });
                }, 300);
            };

            
            [].forEach.call(filterListBtn, function (item) {
                item.onclick = function (e) {

                    
                [].forEach.call(filterListBtn, function (item2) {
                    item2.classList.remove('active');
                });
                item.classList.add('active');
                    e.target.classList.add('active');

                    setValue(e.currentTarget.text)

                    var allBtn = document.getElementById('defaultactive');

                    if (e.currentTarget == allBtn) {
                        setValue('')
                    }  

                   
                    
                    setTimeout(() => {
                        ImagelightGallery.refresh();
                    }, 100);
                }
                
            });

           

        }, 1000);
    }, []);

    const [value, setValue] = useState('');

    // const handleChange = (e) => {
    //     const filterListBtn = document.querySelectorAll('.filter-btn');
    //     [].forEach.call(filterListBtn, function (item) {
    //         item.classList.remove('active');
    //     });

    //     e.target.classList.add('active');
    //     setValue(e.currentTarget.text)

    //     var allBtn = document.getElementById('defaultactive');

    //     if (e.currentTarget == allBtn) {
    //         setValue('')
    //     }

    // }



    return (
        <>
            <section className="section video-gallary-section video-filter-section" style={{ backgroundColor: "#f0faf2" }}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle={data?.attributes?.Workshop_Section_Title} titleTheme="dark-title mb-80" />
                            <div className="video-filter-btn">
                                <div className="filter-btn-wrap">
                                    <ul className='filter-btn-list'>
                                        <li>
                                            <a className="filter-btn btn active" id="defaultactive">All</a>
                                        </li>
                                        {
                                            data?.attributes?.Workshop_Videos.map((val) =>
                                                <li key={val?.id}>
                                                    <a className="filter-btn btn">{val?.Workshop_Video_Category_Title}</a>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="gallary-wrapper without-gallary-text">
                                <div className="video-gallary-row four-col-row">
                                    <div id="Filterlightgallery" className="lightgallary-wrap">
                                        {dataIsLoaded && data?.attributes?.Workshop_Videos.map((val) => {
                                            if (value.length != 0 && val?.Workshop_Video_Category_Title === value) {

                                                return (
                                                    <>
                                                        {
                                                            val?.Video_Gallery.slice(0, visibleBlogs).map((val) =>
                                                                <div className="gallary-item" 
                                                                    key={val.id}
                                                                    data-sub-html={`<p> ${val?.Video_Gallery_Title} </p>`}
                                                                    data-src={val?.Video_Gallery_Video_Link}
                                                                    data-poster={val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        ? val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        : process.env.NEXT_PUBLIC_NO_IMAGE}>

                                                                    <a href={val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        ? val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        : process.env.NEXT_PUBLIC_NO_IMAGE}>

                                                                        <img alt="" src={val?.Video_Gallery_Image?.data?.attributes?.url
                                                                            ? val?.Video_Gallery_Image?.data?.attributes?.url
                                                                            : process.env.NEXT_PUBLIC_NO_IMAGE}  />
                                                                        <div className="gallary-text">
                                                                            <p>{val?.Video_Gallery_Title}</p>
                                                                        </div>
                                                                    </a>

                                                                </div>
                                                            )
                                                        }
                                                    </>
                                                )

                                            }




                                            else if (value.length == "") {
                                                return (
                                                    <>
                                                        {
                                                            val?.Video_Gallery.slice(0, visibleBlogs).map((val) =>
                                                                <div className="gallary-item"
                                                                    key={val.id}
                                                                    data-sub-html={`<p> ${val?.Video_Gallery_Title} </p>`}
                                                                    data-src={val?.Video_Gallery_Video_Link}
                                                                    data-poster={val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        ? val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        : process.env.NEXT_PUBLIC_NO_IMAGE}>

                                                                    <a href={val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        ? val?.Video_Gallery_Image?.data?.attributes?.url
                                                                        : process.env.NEXT_PUBLIC_NO_IMAGE}>

                                                                        <img alt="" src={val?.Video_Gallery_Image?.data?.attributes?.url
                                                                            ? val?.Video_Gallery_Image?.data?.attributes?.url
                                                                            : process.env.NEXT_PUBLIC_NO_IMAGE} />
                                                                        <div className="gallary-text">
                                                                            <p>{val?.Video_Gallery_Title}</p>
                                                                        </div>
                                                                    </a>

                                                                </div>
                                                            )
                                                        }
                                                    </>
                                                )
                                            }
                                        }
                                        )}
                                    </div>
                                    <div className="btn-wrap text-center">
                                        <button className="btn btn-primary gallery-load-btn">Load More<i className="fa fa-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <div className="section-inner-round"></div>
                </div>
            </section>
        </>
    )
}

export default VideoFilterSection;