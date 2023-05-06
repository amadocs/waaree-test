import _ from 'lodash'
import React from 'react';
import {Col } from 'react-bootstrap';
import Link from 'next/link'
const ProductTypeContentColSolarProduct = (props) => {

    return (
        <>
            {props?.data?.attributes?.Three_Col_Content.map((val) =>

                <Col lg={4} md={6} key={val.id} className="product-content-col reveal-fade stagger-animation">
                    <div className="col-inner product-content-inner">
                        <div className="product-type-content">
                            <div className="product-image">

                                <img priority="false" src={val?.Image?.data?.attributes?.url
                                    ? val?.Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt='' loading='lazy' />

                            </div>
                            <div className="product-content-wrap">
                                <h4 className="product-title">{val?.Title}</h4>
                                <div className="product-content-text">
                                    <ul className="product-data-list">
                                        {
                                            val?.Key_Points?.map((key)=>
                                            <li key={key.id}>{key?.Key_Value_Title}</li>)
                                        }
                                    </ul>
                                </div>
                                <div className="btn-wrap">
                                    <Link href={val?.Product_Link_Url}  prefetch={false}>
                                    <a  className="shop-btn btn-small btn btn-primary" target="_blank">Shop Now<i className="fas fa-cart-arrow-down"></i></a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )

}

export default ProductTypeContentColSolarProduct;