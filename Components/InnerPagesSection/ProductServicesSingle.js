import React from 'react';
import _ from 'lodash'
import {Col } from 'react-bootstrap';

const ProductServicesSingle = (props) => {
    return (
        <>

            {props?.data.map((val) =>

                <Col sm={6} className="icon-box-single reveal-fade stagger-animation" key={val?.id}>
                    <div className="col-inner" >
                            <div className="icon-wrap">
                                <img priority="false" src={val?.Service_Image?.data?.attributes?.url
                                        ? val?.Service_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Product service images" loading='lazy' />
                            </div>
                            <div className="box-title">
                                <h4>{val?.Service_Title}</h4>
                                <span>{val?.Service_Short_Description}</span>
                            </div>
                    </div>
                </Col>
            )}

        </>
    )
}

export default ProductServicesSingle;