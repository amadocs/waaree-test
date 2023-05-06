import React , { Component } from 'react';
import _ from 'lodash'
export default class ApplyNowLabelBanner extends Component  {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <>
                <div className="apply-now-banner" style={{ backgroundImage: `url(${this.props.data?.attributes?.Apply_Now_Background_Image?.data?.attributes?.url
                                    ? this.props.data?.attributes?.Apply_Now_Background_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE})`}}>
                    <div className="apply-banner-wrap">
                        <div className="icon-wrap">
                            <img priority="false" src={this.props.data?.attributes?.Apply_Now_Icon_Image?.data?.attributes?.url
                                    ? this.props.data?.attributes?.Apply_Now_Icon_Image?.data?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="Apply banner"  loading='lazy' />
                        </div>
                        <h4>{this.props.data?.attributes?.Apply_Now_Title}</h4>
                    </div>
                </div>
            </>
        )
    }


}


