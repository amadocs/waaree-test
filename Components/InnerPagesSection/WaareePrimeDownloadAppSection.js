import React from 'react';
import _ from 'lodash'
import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const DownloadAppCol = dynamic(() =>  import('./DownloadAppCol'))

const WaareePrimeDownloadAppSection = (props) => {
    console.log(props);
    return (
        <section className={`section download-app-section two-col-section ${props.extraClassName}`} style={{backgroundColor:`${props.sectionBgColor} `}}>
            <div className="section-inner ">
                <Container>
                    <div className="section-wrap">
                        <Row className="image-content-row">
                            <Col md={6} className="content-col reveal-fade stagger-animation">
                                <div className='col-inner'>
                                    <DownloadAppCol downloadAppTitle={props.SectiondownloadAppTitle} downloadAppSubTitle={props.SectiondownloadAppSubTitle}
                                    data={props.Waaree_Download_App_Section} Play_Store_Download_Link={props. Play_Store_Download_Link} Apple_Store_Download_Link={props.Apple_Store_Download_Link} Qr_Code_Image={props.Qr_Code_Image} />
                                </div>
                            </Col>
                            <Col md={6} className="image-col reveal-fade stagger-animation">
                                <div className='col-inner'>
                                    <img priority="false" src={props.downloadAppImageSrc} alt="" loading='lazy' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                
            </div>
        </section>
    )
}

export default WaareePrimeDownloadAppSection;