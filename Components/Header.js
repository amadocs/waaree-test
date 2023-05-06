import _ from 'lodash'
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic'
const MoreMenuModel  = dynamic(() =>  import('./MoreMenuModel'))
import { useEffect } from 'react';
import Link from 'next/link';
export default function Header(props) {
    useEffect(async () => {
        var addScript = document.createElement('script');
        addScript.async = true;
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        setTimeout(()=>{
            var noFullpage = document.getElementsByClassName('no-fullpage');
            if (noFullpage.length) {
                var durationTime = 1.5;
                var headerAnimation = gsap.timeline();
                headerAnimation.fromTo(".site-header", { opacity: 0, }, { durationTime, opacity: 1 }, "+=0.05");
                headerAnimation.play();

                var header = document.getElementById("siteHeader");
                var fixedSocialIcon = document.getElementById("FixedSocialIcon");
                var scrollToTopBtnDiv = document.getElementById("scrolltoTopDiv");

                var sticky = header.offsetTop;

                if (window.pageYOffset > sticky) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }

                // Fixed Animation on Scroll
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    fixedSocialIcon.classList.add("scrolled");
                    scrollToTopBtnDiv.classList.add("show");
                } else {
                    fixedSocialIcon.classList.remove("scrolled");
                    scrollToTopBtnDiv.classList.remove("show");
                }
                // Fixed Animation on Scroll

                const footer = document.getElementById('Footer');
                const footerHeight = footer.offsetHeight;
                window.onscroll = function () {
                    if (window.pageYOffset > sticky) {
                        header.classList.add("scrolled");
                    } else {
                        header.classList.remove("scrolled");
                    }

                    // Fixed Animation on Scroll
                    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                        fixedSocialIcon.classList.add("scrolled");
                        scrollToTopBtnDiv.classList.add("show");
                    } else {
                        fixedSocialIcon.classList.remove("scrolled");
                        scrollToTopBtnDiv.classList.remove("show");
                    }
                    // Fixed Animation on Scroll

                    // remove socialFixedIcon in footer
                    if (window.pageYOffset + window.innerHeight > document.documentElement.scrollHeight - footerHeight + 300) {
                        fixedSocialIcon.classList.add("remove");
                    } else {
                        fixedSocialIcon.classList.remove("remove");
                    }
                    // remove socialFixedIcon in footer
                };
            }
    
        },200)

    }, []);

    const googleTranslateElementInit = () => {

        setTimeout(() => {
            
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                
                autoDisplay: false,
                // includedLanguages : "en,ms,ta,zh-CN", // include this for selected languages
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            'google_translate_element');
        }, 200);

    }

    return (
        <>
            <header className="site-header fixed-top reveal-fade" id="siteHeader">

                <Container>
                    <div className="header-wrap">
                        <Navbar expand="xl">
                            <Navbar.Brand href="/">
                            <figure className="logo-default">
                                <img priority="false" src="https://d2ehz7r19zq528.cloudfront.net/Waaree-logo_vufgvr.svg" alt="Logo"  loading='lazy'/>
                                </figure>
                            </Navbar.Brand>
                            {
                           props?.MoreMenu && props?.MoreMenu?.map((moremenu) => {
                                    if (moremenu?.attributes?.Menu_Type === "Header") {
                                        return (
                                            <Navbar.Collapse id="navbarMain" key={moremenu.id}>
                                                <Nav className="ml-auto main-navigation">
                                                    {
                                                        moremenu?.attributes?.Menu_Content && moremenu?.attributes?.Menu_Content.map((menucontent) => {
                                                            return (                                                             
                                                                <Link href={menucontent?.Menu_Url} key={menucontent.id} prefetch={false} >
                                                                 <a className="nav-link">{menucontent.Menu_heading}</a>
                                                                </Link>                                                                                                              
                                                          )
                                                        })
                                                    }
                                                    <MoreMenuModel MoreMenu={props.MoreMenu} SocialIcons={props.social_data} />
                                                </Nav>
                                            </Navbar.Collapse>
                                        )
                                    }
                                })
                            }

                                    <div id="google_translate_element" > </div>
                         
                         
                        </Navbar>
                    </div>
                </Container>
            </header>
        </>
    )
}