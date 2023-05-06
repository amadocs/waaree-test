import React, { Component } from 'react';
import _ from 'lodash'
import { Col } from 'react-bootstrap';
import Link from 'next/link'

export default class WaareePrimeHelpCol extends Component {
    constructor(props) {
        super(props);
   }
    render(){
        return (
            <>
            {this.props.data?.attributes?.Waaree_Prime_Help_Section.map((val) =>
            <Col lg={6} className="help-col-single" key={val.id}>
                <img priority="false" src={val?.Help_Section_Background_Image?.data?.attributes?.url
                        ?  val?.Help_Section_Background_Image?.data?.attributes?.url
                        : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                    <div className="col-inner">
                        <h3 className="reveal-fade">{val?.Title}</h3>

                        {
                          val?.Help_Section_Download_File?.data ? 
                          <div className={`btn-wrap reveal-fade ${val?.Help_Section_Button_Type_ClassName}`}>
                            <Link href={val?.Help_Section_Download_File?.data?.attributes?.url}  prefetch={false}>
                          <a  className={`btn btn-primary ${val?.Help_Section_Button_Style}`} download>{val?.Help_Section_Button_Text}<i className="fas fa-chevron-right"></i></a>
                            </Link>
                      </div>

                         
                          :  <div className={`btn-wrap reveal-fade ${val?.Help_Section_Button_Type_ClassName}`}>
                            <Link href={val?.Help_Section_Button_Link}  prefetch={false}>
                          <a  className={`btn btn-primary ${val?.Help_Section_Button_Style}`} target="_blank">{val?.Help_Section_Button_Text}<i className="fas fa-chevron-right"></i></a>
                            </Link>
                      </div>
                        }
                       
                    </div>
            </Col>
            )}
            </>
        )
    }
  
}

