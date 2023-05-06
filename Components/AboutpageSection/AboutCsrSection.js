import _ from 'lodash'
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Link from 'next/link'

export default function AboutCsrSection(props){
return(
    <section className="section suitanable-living-section" style={{ backgroundColor: "#f0faf2" }}>
    <div className="section-inner">
        <Container>
            <div className="section-wrap">
                <Row className="suitanable-row">
                    <div className="col-lg-6 suitanable-content-column">
                        <div className="column-inner">
                            <h2 className="section-title dark-title reveal-fade">{props?.Data?.attributes?.Title}</h2>
                            <div className="content-text reveal-fade" dangerouslySetInnerHTML={{__html:props?.Data?.attributes?.Short_Description}}>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 suitanable-image-column">
                        <div className="image-col-inner">
                        {
                            props?.Data?.attributes?.Sustainable_Living_Image?.data.map((csrimage)=>{
                                return(
                                    <div className="image-wrap reveal-fade" key={csrimage.id}>
                                        <img priority="false" src={csrimage?.attributes?.url ?
                                        csrimage?.attributes?.url
                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt={csrimage?.attributes?.url} loading='lazy' />
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="col-12 btn-wrap text-center reveal-fade">
                        <Link href={props?.Data?.attributes?.Button_Link} prefetch={false} >
                            <a  className="btn btn-primary">Read More<i className="fas fa-chevron-right"></i></a>
                        </Link>
                    </div>
                </Row>
            </div>
        </Container>
    </div>
</section>
)
}
