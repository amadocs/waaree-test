import React from 'react';
import {Col} from 'react-bootstrap';
import dynamic from 'next/dynamic'
const CounterAnimation = dynamic(() =>  import('../CounterAnimation'))
import { useState, useEffect } from "react";


const IconCounterSingle = () => {

    const [data,setdata] = useState([])

    useEffect(async () => {
        fetch(process.env.NEXT_PUBLIC_API_URL + 'webinar-page?populate=*'
        ,{
          headers:{
            'Authorization' :  process.env.NEXT_PUBLIC_API_token
        }    
        }
        )
        .then(Res => Res.json())
        .then(message =>setdata(message.data) );

        setTimeout(() => {
            CounterAnimation();
        }, 1000);
      
    }, []);
    return (
        <>
                {data?.attributes?.Icon_Counter.map((val) =>

                    <Col lg={4} className="counter-single reveal-fade stagger-animation" key={val.id}>
                        <div className='col-inner'>
                            <div className='icon-wrap'>
                                <img src={val?.Icon_Counter_Image?.data?.attributes?.url
                                        ? val?.Icon_Counter_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Icon counter images"  />
                            </div>
                            <div className="counter-content">
                                <h3 className="counter-title">
                                    <span className="coun-anim">{val?.Icon_Counter_Number}</span>
                                    {val?.Icon_Counter_Number_Values}
                                </h3>
                                <span className="counter-text">{val?.Icon_Counter_Text}</span>
                            </div>
                        </div>
                    </Col>
                )}
        </>

    )
}

export default IconCounterSingle;