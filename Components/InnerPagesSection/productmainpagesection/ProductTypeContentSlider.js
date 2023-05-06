import _ from 'lodash'
import React from 'react';
import Slider from 'react-slick';
import Link from "next/link";

const ProductTypeContentSlider = (props) => {
    var settingsProductType = {
        speed: 600,
        arrows: true,
        infinite: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
         <Slider className="product-content-slider reveal-fade stagger-animation" {...settingsProductType}>
            {props?.data?.map((val) =>
                <div className="product-content-inner" key={val?.id}>
                    <div className="product-type-content">
                        <div className="product-image">
                        <Link href="/products/[slug]/[id]" as={`/products/${val?.attributes?.product_category?.data?.attributes?.slug}/${val?.attributes?.slug}`}  prefetch={false}>
                            <a>
                            <img priority="false" src={val?.attributes?.Icon_Image?.data?.attributes?.url
                             ? val?.attributes?.Icon_Image?.data?.attributes?.url
                             : process.env.NEXT_PUBLIC_NO_IMAGE} alt='' loading='lazy'  />
                            </a>
                            </Link>
                          
                        </div>
                        <div className="product-content-wrap">
                            <h4 className="product-title">{val?.attributes?.Title}</h4>
                            <div className="product-content-text">
                                <p>{val?.attributes?.Short_Description}</p>
                            </div>
                            <div className="read-more-link">
                            <Link href={`/products/[slug]/[id]`} as={`/products/${val?.attributes?.product_category?.data?.attributes?.slug}/${val?.attributes?.slug}`}  prefetch={false}>
                                <a  className="read-more">Learn More<i className="fas fa-chevron-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Slider>

    );
}
export default ProductTypeContentSlider;