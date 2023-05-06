import React from 'react';
import _ from 'lodash'
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { useEffect} from 'react';

export default function CoreValueTab(props){
    useEffect(async () => {   
        setTimeout(() => {
            var tabFirstChild = document.querySelector('.custom-tab-nav .nav-item:first-child a');
            tabFirstChild.click();    
        }, 1400);
         },[]);
       return (
            <Tab.Container id="coreValueTab" >
                <Row>
                    <Col lg={6}>
                        <Nav variant="pills" className="flex-column custom-tab-nav">
    
                            {props.data?.attributes?.Core_Value.map((val) =>
                                <Nav.Item className="reveal-fade stagger-animation" key={val.id} >
                                    <Nav.Link eventKey={val.id}>
                                        <div className="icon-wrap">
                                            <img priority="false" src={val?.CoreValue_Icon?.data?.attributes?.url} alt="Icons" className="icon-default" loading='lazy'  />
                                            <img priority="false" src={val?.Core_Value_Hover_Icon?.data?.attributes?.url} alt="Icons" className="hover-icon" loading='lazy'  />
                                        </div>
                                        <div className="title-wrap">
                                            <h4 className="tab-title-text">{val?.Title}</h4>
                                        </div>
    
                                    </Nav.Link>
                                    <div className="tab-title-content">
                                        {val?.Core_Value_Content}
                                    </div>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Col>
                    <Col lg={6} className="tab-content-col reveal-fade stagger-animation">
                        <Tab.Content>
                            {props.data?.attributes?.Core_Value.map((val) =>
                                <Tab.Pane eventKey={val.id} key={val.id}>
                                    <div className="tab-content-wrap">
                                        <div className="core-value-tab-content">
                                            <div className="top-image-wrap image-wrap">
                                                <img priority="false" src={val?.Core_Value_Inner_Image1?.data?.attributes?.url} alt="Images" loading='lazy' />
                                            </div>
                                            <div className="bottom-image-wrap image-wrap">
                                                <img priority="false" src={val?.Core_Value_Inner_Image2?.data?.attributes?.url} alt="Images" loading='lazy' />
                                                <div className="tab-title-box">
                                                    <h4>{val?.Title}</h4>
                                                </div>
                                                <div className="green-round"></div>
                                                <div className="yellow-round"></div>
                                            </div>
    
                                        </div>
                                    </div>
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container >
        )


 
}

