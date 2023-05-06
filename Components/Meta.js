import _ from 'lodash'
import React, { Component } from 'react';
import Head from 'next/head';
import Script from 'next/script';
export default class Meta extends Component{
    constructor(props) {
        super(props)
    };
// Hotjar Tracking Code for waaree.com
Hotjar(){
    return {
        __html: `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:2495287,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
    };
}

Tracking(){
    return {
        __html: `var w=window;var p = w.location.protocol;if(p.indexOf("http") < 0){p = "http"+":";}var d = document;var f = d.getElementsByTagName('script')[0],s = d.createElement('script');s.type = 'text/javascript'; s.async = false; if (s.readyState){s.onreadystatechange = function(){if (s.readyState=="loaded"||s.readyState == "complete"){s.onreadystatechange = null;try{loadwaprops('3zda8de4ec9114ad561ed55a7f8225d44d','3zaed4b18fd8771e69a809ee3f74f10088','3zca5552a5d2287d247f1fa879827958836bcec024be92029418e53edf0703a83c','3z4b7b94dba7630e0bff753189360402a0',0.0);}catch(e){}}};}else {s.onload = function(){try{loadwaprops('3zda8de4ec9114ad561ed55a7f8225d44d','3zaed4b18fd8771e69a809ee3f74f10088','3zca5552a5d2287d247f1fa879827958836bcec024be92029418e53edf0703a83c','3z4b7b94dba7630e0bff753189360402a0',0.0);}catch(e){}};};s.src =p+'//ma.zoho.com/hub/js/WebsiteAutomation.js'; f.parentNode.insertBefore(s, f);`
    };
}

GoogleAds(){
    return{
        __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-991654591');`
    }
}

GoogleTagManager(){
    return{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-MH9Q9JP');`
    }
}
structuredData(){

    const temp_1 = this.props?.seo_info?.StructuredData
    const data = JSON.stringify(temp_1)

    return{
        __html:data 
    };
}
    render(){
        return ( 
        <>
                    <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="format-detection" content="email=no" />
                        {/* favicon  */}
                    <link rel="apple-touch-icon preconnect" sizes="144x144" href="https://d2ehz7r19zq528.cloudfront.net/favicon_b0af26c2c0.png?updated_at=2022-08-22T08:57:32.885Z" />
                    <link  rel="shortcut icon preconnect" href="https://d2ehz7r19zq528.cloudfront.net/favicon_b0af26c2c0.png?updated_at=2022-08-22T08:57:32.885Z" />
                    <link rel="icon preconnect" id="page_favicon" href="https://d2ehz7r19zq528.cloudfront.net/favicon_b0af26c2c0.png?updated_at=2022-08-22T08:57:32.885Z"  />
                    <title>
                    {
                         this.props?.seo_info?.Seo_Title ?  this.props.seo_info.Seo_Title : "Leading Solar Panels (Solar System) Company in India - Waaree"
                     }
                        </title>
                    {/* <meta name="robots" content="noindex ,follow" /> */}                    
                    <meta name="Description"
                     content={
                         this.props?.seo_info?.Seo_Description ? this.props.seo_info.Seo_Description   :  "Waaree Energies Ltd. is India's largest Solar Manufacturer. We supply premium quality solar systems like solar panels, inverters, batteries, and water pumps"
                        } />
                    
                    {/* Open Graph / Facebook */}
                     <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Waaree Energies Ltd." />

                      {/* dynamic meta content */}
                      <meta name="Keywords" content={
                          this.props?.seo_info?.Seo_Description ? this.props.seo_info.Keywords :  "Solar PV Modules, Solar Panel Manufacturers, Solar Products In India, Solar Power For Homes, Solar Panels India,  Solar Street Light Manufacturer, Solar Street Lighting, solar panel manufacturers in india, Solar Photovoltaic Modules, solar power companies in india,  best solar panels in india, Solar Modules India, solar module manufacturers india, photovoltaic modules, photovoltaic solar modules, best solar modules, polycrystalline solar cell, multi crystalline solar PV modules, mono crystalline solar PV modules, O&amp;M of solar power plants, EPC Solutions,  grid connected PV system" 
                        } />
                    {this.props?.seo_info?.PreventIndexing !=='true' ? this.props.meta : ''}
                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@waareegroup" />
                    {/* <!-- Google Tag Manager --> */}
                    <script defer dangerouslySetInnerHTML={this.GoogleTagManager()} strategy="beforeInteractive" />
                    {/* <!-- End Google Tag Manager --> */}
                    <meta name="google-site-verification" content="RJFfjkPiJiXdEvu0mQkB7jijxjz2rasebhOEQIe8WK4" />
                    </Head>
                   <link rel="canonical preload" href="https://www.waaree.com/" />
                    {/* script for ID+JSON */}
                    {
                        this.props?.seo_info?.StructuredData && <script async rel="preload" type="application/ld+json" dangerouslySetInnerHTML={this.structuredData()} strategy="beforeInteractive" />
                    }
                    <Script defer rel="preload" src="//www.googleadservices.com/pagead/conversion.js" strategy="beforeInteractive" />
                    <script async dangerouslySetInnerHTML={this.Hotjar()} strategy="beforeInteractive"/>      
                    <Script defer src="https://js.convertflow.co/production/websites/40773.js" />
                    <Script defer  src="https://unpkg.com/react@17/umd/react.production.min.js" crossOrigin />
                    <Script defer src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
                    crossOrigin />
                    <Script defer src="https://unpkg.com/react-bootstrap/dist/react-bootstrap.min.js" />              
                <Script defer strategy="beforeInteractive">var Alert = ReactBootstrap.Alert;</Script>
                <link async href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                {/* chatbot */}                                    
                  <div className="fixed-chat-sec">
                  {/* <script async dangerouslySetInnerHTML={{ __html: 'setTimeout(function(){var e,t;e=document,(t=e.createElement("script")).type="text/javascript",t.async=!0,t.setAttribute("data-botid","NweUygg_vmYd"),t.src="https://botbuilder.engagely.ai/engagelyscripts/engagely_bots.js?v="+Date.parse(new Date()),e.getElementsByTagName("body")[0].appendChild(t)},3e3);'}} strategy="beforeInteractive" />                 */}
                </div>
                {/* chatbot ends */}
                   {/* google-site-verification */}        
                    {/* google-site-verification End */}
                    {/* tracking code  */}
                    {/* <script defer rel="preload" dangerouslySetInnerHTML={this.Tracking()}  /> */}
                    {/* tracking code end */}
                    {/* Global site tag (gtag.js) - Google Ads: 991654591 */}
                {/* <script defer rel="preload" dangerouslySetInnerHTML={this.GoogleAds()} /> */}
                {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript><iframe title="Google Tag manager" src="https://www.googletagmanager.com/ns.html?id=GTM-MH9Q9JP"  
                    height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
                {/* <!-- End Google Tag Manager (noscript) --> */}
                <div id="root"></div>
                 </>                 
        )
    }
}
