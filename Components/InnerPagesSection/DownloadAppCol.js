import React,{Component} from 'react';
import _ from 'lodash'
import { Row, Col } from 'react-bootstrap';

export default class DownloadAppCol  extends Component{
    constructor(props) {
        super(props);
    }
    render(){
       return (
            <div className="download-app-content">
                <h3 className='section-title'>{this.props.downloadAppTitle}</h3>
                <span className="sub-title">{this.props.downloadAppSubTitle}</span>
                <Row className="download-btn-row">
                    <Col sm={6} className="download-app-col reveal-fade stagger-animation">
                        <div className="download-app-btn">
                            <a href={this.props?.Play_Store_Download_Link} target="_blank">
                                <img priority="false" src={this.props.data?.attributes?.Play_Store_Download_Image?.data?.attributes?.url
                                        ? this.props.data?.attributes?.Play_Store_Download_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Download app icon" loading='lazy'  />
                            </a>
                            <a href={this.props?.Apple_Store_Download_Link} target="_blank">
                                <img priority="false" src={this.props.data?.attributes?.Apple_Store_Download_Image?.data?.attributes?.url
                                        ?this.props.data?.attributes?.Apple_Store_Download_Image?.data?.attributes?.url
                                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="android download app icon" loading='lazy' />
                            </a>
                        </div>
                    </Col>
                    <Col sm={6} className="qr-code-col reveal-fade stagger-animation">
                        <img priority="false" src={this.props?.Qr_Code_Image?.data?.attributes?.url
                                ? this.props?.Qr_Code_Image?.data?.attributes?.url
                                : process.env.NEXT_PUBLIC_NO_IMAGE} alt="QR code" loading='lazy' />
                    </Col>
                </Row>
            </div>
        )
    }
    }
