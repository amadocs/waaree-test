import React, { Component } from 'react';
import _ from 'lodash'
import {  Container,  Col, Row, } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from 'next/dynamic'
const RoundSvgSectionTop = dynamic(() =>  import('./RoundSvgSectionTop'))

export default class SitemapSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="section sitemap-section">
                <div className="section-inner">

                    <Container>
                        <div className="footer-bottom">
                            {
                                this.props.MoreMenu.length !== 0 && this.props.MoreMenu.map((moremenu) => {
                                    if (moremenu?.attributes?.Menu_Type === "Footer") {
                                        return (
                                            <Row key={moremenu.id}>
                                                {
                                                    moremenu?.attributes?.Menu_Content.map((menucontent) => {
                                                        return (

                                                            <Col lg={4} className="stagger-animation reveal-fade" key={menucontent.id}>
                                                                <div className="footer-col-inner" >
                                                                    <h4 className="green-title content-small-title">{menucontent.Menu_heading}</h4>
                                                                </div>
                                                                <ul className="footer-menu">
                                                                    {
                                                                        menucontent?.Menu_items.map((menuitems) => {
                                                                            return (
                                                                                <li key={menuitems.id}>
                                                                                    <Link href={menuitems.Url}  prefetch={false}>{menuitems.Label}</Link>
                                                                                </li>
                                                                            )

                                                                        })
                                                                    }
                                                                </ul>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        )
                                    }
                                })
                            }
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        )
    }
}