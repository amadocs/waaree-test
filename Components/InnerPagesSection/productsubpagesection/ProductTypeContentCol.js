import _ from 'lodash'
import React from 'react';
import {Col } from 'react-bootstrap';
import Link from 'next/link'
const ProductTypeContentCol = (props) => {
    return (
        <>
            {props?.data.map((val) =>

                <Col lg={4} md={6} className="product-content-col reveal-fade stagger-animation" key={val?.id}>
                    <div className="col-inner product-content-inner">
                        <div className="product-type-content">
                            <div className="product-image">

                                <img priority="false" src={val?.Image?.data?.attributes?.url
                                    ? val?.Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt='' loading='lazy'  />

                            </div>
                            <div className="product-content-wrap">
                                <h4 className="product-title">{val?.Title}</h4>
                                <div className="product-content-text">
                                    <ul className="product-data-list">

                                        {
                                            val?.Key_Points.map((data)=>{
                                                return(
                                                    <li key={data?.id}>{data?.Key_Value_Title}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="btn-wrap">
                                   <Link href={val?.Shop_Now_Button_Link}  prefetch={false}>
                                    <a  className="btn-small btn btn-primary shop-btn">{val?.Shop_Now_Button_Text}<i className="fas fa-cart-arrow-down"></i></a>
                                   </Link>
                                   {
                                    val?.Data_Sheet_Download_File?.data?.attributes?.url && 
                                   <Link href={val?.Data_Sheet_Download_File?.data?.attributes?.url}  prefetch={false}>
                                    <a  className="btn-white btn-small small-btn btn btn-primary" download>{val?.Data_Sheet_Button_Text}<i className="fas fa-arrow-down"></i></a>
                                    </Link>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )

}

export default ProductTypeContentCol;