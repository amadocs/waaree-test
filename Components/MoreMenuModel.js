import _ from 'lodash'
import React from 'react';
import { Nav, NavDropdown, Container, Col, Row} from 'react-bootstrap';
import { gsap } from "gsap";
import dynamic from 'next/dynamic'
const SocialMediaIcon = dynamic(() =>  import('./SocialMediaIcon'))
import { useState, useEffect } from "react";
import Link from 'next/link';

const MoreMenuModel = (props) => {

    useEffect(() => {
        InnerSubMenuShow();

         // dropdown hover
    const showClassName = "show";
    const dropdownItem = document.querySelectorAll('.more-menu-modal .nav-item.dropdown');

    const moreMenuGallaryItem = document.querySelectorAll('.gallery-column .slide-single');
    [].forEach.call(dropdownItem, function (item) {
        const dropDownMenu = item.querySelector('.dropdown-menu');
        item.onmouseenter = function () {

            item.classList.add(showClassName);
            dropDownMenu.classList.add(showClassName);

            const gallaryId = item.querySelector('.nav-link').getAttribute('id');

            [].forEach.call(moreMenuGallaryItem, function (gallaryitem) {

                const gallaryAttr = gallaryitem.getAttribute('data-gallary');
                if (gallaryId == gallaryAttr) {
                    gallaryitem.classList.add('active');
                } else {
                    gallaryitem.classList.remove('active');
                }
            });

        }
        item.onmouseleave = function () {
            item.classList.remove(showClassName);
            dropDownMenu.classList.remove(showClassName);
        }
    });


    // dropdown hover

    });


    var durationTime = 2.5;
    var circleDurationTime = 1;
    var staggerTime = 0.2;

    var moreMenu = gsap.timeline();

    // const [show, setShow] = useState(false);
    const [moreMenuShow, setMoreMenuShow] = useState('');
    const moreMenuhandleClose = () => {
        setMoreMenuShow({ moreMenuShow: '' });
        moreMenu.progress(1).reverse();
    }

    const moreMenuhandleShow = () => {
        setMoreMenuShow('show');
        moreMenu.to(".more-menu-modal .navbar-nav > .nav-item > a", { staggerTime, opacity: 1, scale: 1, rotate: 0, stagger: 0.1 });
        moreMenu.to(".gallery-slider-wrap", { durationTime, opacity: 1 }, "+=0.1"
        );
        moreMenu.play();
    }
   
    const InnerSubMenuShow = () => {
        const dropdownInnerMenuItem = document.querySelectorAll('.toggle-div');
        const dropdownClass = document.querySelectorAll('.inner-menu-wrap');
        [].forEach.call(dropdownInnerMenuItem, function (item) {
            item.onclick = function () {
                if (item.parentNode.classList.contains('show')) {
                    item.parentNode.classList.remove('show');
                    // dropdownClass.parentNode.classList.remove('show');
                } else {
                    [].forEach.call(dropdownClass, function (itemDropdown) {
                        itemDropdown.classList.remove('show');
                            item.parentNode.classList.add('show');
                    });
                }
            }
        });     

    }
    return (
        <>
            <div className="nav-item more-menu">
                <Nav.Link onClick={moreMenuhandleShow} className="more-menu"><div className="more-menu-btn"><div className="toggle-icon"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></div>More</div></Nav.Link>
                <div className={`more-menu-modal ${moreMenuShow}`}>
                    <div className="dropdown-menu-wrap">
                        <div className="close-btn-wrap">
                            <a href="#" className="close-btn" onClick={moreMenuhandleClose}><span className="close-icon" id="closeMoreMenu"></span>Close</a>
                        </div>
                        <Container>
                            <div className="more-menu-inner">
                                <Row>
                                {
                                   props.MoreMenu.map((moremenu)=>{
                                        if(moremenu?.attributes?.Menu_Type === "Header"){
                                            return(
                                                <Col md={6} className="main-mobile-menu d-block d-xl-none" key={moremenu.id}>
                                                <div className="menu-title"><h4>Main Menu</h4></div>
                                                <Nav>
                                                {
                                                     moremenu?.attributes?.Menu_Content.map((menucontent)=>{
                                                        return(
                                                                <Nav.Link key={menucontent.id}
                                                                href={menucontent.Menu_Url}>                                                        
                                                                {menucontent.Menu_heading}</Nav.Link>                                                        
                                                        )                                                        
                                                    })
                                                }
                                                </Nav>
                                                </Col>
                                            )
                                        }
                                    })
                                }   
                              <Col md={6} className="menu-column">
                                        <div className="menu-wrapper">
                                            <div className="menu-title"><h4>More Menu</h4></div>
                                            {
                                   props.MoreMenu.map((moremenu)=>{
                                        if(moremenu?.attributes?.Menu_Type === "Main"){

                                            return(
                                                <Nav
                                                 key={moremenu.id}
                                                 >
                                               {
                                                  moremenu?.attributes?.Menu_Content.map((menucontent,id)=>{
                                                    if(menucontent?.Menu_items.length !== 0){                                                                                                     
                                                        return(
                                                            <NavDropdown 
                                                            key={menucontent.id}
                                                            id={id}
                                                            title={menucontent.Menu_heading}
                                                            renderMenuOnMount={true}
                                                           
                                                            >   
                                                            <div className="dropdown-inner">
                                                                { menucontent?.Menu_items.map((menuitems)=>{

                                                                    if(menuitems?.Sub_Menu.length !== 0){
                                                                        return(    
                                                                            <div className="nav-item inner-menu-wrap" key={menuitems.id}>  
                                                                            <NavDropdown.Item  href={menuitems?.Url} >{menuitems.Label}</NavDropdown.Item>
                                                                            <span className="toggle-div"></span>
                                                                            <div className="inner-menu">
                                                                            {
                                                                                menuitems?.Sub_Menu.map((val)=>{
                                                                                    return(
                                                                                        <Link key={val.id} href={val?.Url} prefetch={false} >
                                                                                            <a onClick={moreMenuhandleClose}>
                                                                                            {val?.Label}
                                                                                            </a>
                                                                                        </Link> 
                                                                                    )
                                                                                })
                                                                            }
                                                                            </div>
                                                                            </div>
                                                                            ) 
                                                                    }

                                                                    else{
                                                                        return(                                                                                
                                                                            <NavDropdown.Item key={menuitems.id} href={menuitems?.Url} >{menuitems.Label}</NavDropdown.Item>
                                                                    ) 
                                                                    }                                                                            
                                                                    })
                                                                }
                                                            </div>
                                                            </NavDropdown>
                                                        )  
                                                    }
                                                    else{
                                                        return(
                                                            <div key={menucontent.id}  className="nav-item">
                                                            <Nav.Link  id={id} href={menucontent?.Menu_Url}>{menucontent.Menu_heading}</Nav.Link>  
                                                            </div>
                                                            )
                                                    }                                    
                                                   })
                                               }
                                                </Nav>
                                            )                                        
                                        }                                     
                                    })
                                }
                            </div>
                        </Col>

                        <Col md={6} className="gallery-column">
                                {
                                        props.MoreMenu.map((moremenu)=>{
                                            if(moremenu?.attributes?.Menu_Type === "Main"){

                                            return(
                                                <div key={moremenu.id} className="gallery-slider-wrap reveal-fade" >
                                                <div className="slide-single active" data-gallary="companyMenu">
                                                    <img priority="false" src={moremenu?.attributes?.Menu_Content[0]?.Menu_Image
                                                     ? moremenu?.attributes?.Menu_Content[0]?.Menu_Image?.data?.attributes?.url
                                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                                                </div>

                                                    {
                                                          moremenu?.attributes?.Menu_Content.map((menucontent,id)=>{
                                                          return(
                                                                <div key={menucontent.id} className="slide-single " data-gallary={id}>
                                                                    <img priority="false" src={menucontent?.Menu_Image
                                                                    ? menucontent?.Menu_Image?.data?.attributes?.url
                                                                    : process.env.NEXT_PUBLIC_NO_IMAGE} alt="" loading='lazy' />
                                                                </div>                                                                           
                                                            )                                                            
                                                        })
                                                    }
                                                </div>
                                            )
                                            }                                        
                                        })
                                    }
                        </Col>

                        <Col md={12} xl={6} className="social-column">
                                        <div className="social-icon-wrap">
                                            <SocialMediaIcon SocialIcons={props.SocialIcons}/>
                                        </div>
                                    </Col> 
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreMenuModel;
