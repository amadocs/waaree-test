(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3249],{5620:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[slug]/[id]",function(){return n(7422)}])},638:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6856).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=i.default,u=(null==e?void 0:e.suspense)?{}:{loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};o(t,Promise)?u.loader=function(){return t}:"function"===typeof t?u.loader=t:"object"===typeof t&&(u=r({},u,t));if((u=r({},u,e)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");u.suspense&&(delete u.ssr,delete u.loading);u.loadableGenerated&&delete(u=r({},u,u.loadableGenerated)).loadableGenerated;if("boolean"===typeof u.ssr&&!u.suspense){if(!u.ssr)return delete u.ssr,l(n,u);delete u.ssr}return n(u)},e.noSSR=l;var r=n(6495).Z,u=n(2648).Z,i=(u(n(7294)),u(n(4302)));function l(t,e){return delete e.webpack,delete e.modules,t(e)}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},6319:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var o=(0,n(2648).Z)(n(7294)).default.createContext(null);e.LoadableContext=o},4302:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9658).Z,r=n(7222).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(6495).Z,i=(0,n(2648).Z)(n(7294)),l=n(6319),a=n(1688).useSyncExternalStore,d=[],s=[],c=!1;function f(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}var p=function(){function t(e,n){o(this,t),this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;e.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function v(t){return function(t,e){var n=function(){if(!d){var e=new p(t,r);d={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return d.promise()},o=function(){n();var t=i.default.useContext(l.LoadableContext);t&&Array.isArray(r.modules)&&r.modules.forEach((function(e){t(e)}))},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},e);r.suspense&&(r.lazy=i.default.lazy(r.loader));var d=null;if(!c){var f=r.webpack?r.webpack():r.modules;f&&s.push((function(t){var e=!0,o=!1,r=void 0;try{for(var u,i=f[Symbol.iterator]();!(e=(u=i.next()).done);e=!0){var l=u.value;if(-1!==t.indexOf(l))return n()}}catch(a){o=!0,r=a}finally{try{e||null==i.return||i.return()}finally{if(o)throw r}}}))}var v=r.suspense?function(t,e){return o(),i.default.createElement(r.lazy,u({},t,{ref:e}))}:function(t,e){o();var n=a(d.subscribe,d.getCurrentValue,d.getCurrentValue);return i.default.useImperativeHandle(e,(function(){return{retry:d.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(r.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:d.retry}):n.loaded?i.default.createElement((e=n.loaded)&&e.__esModule?e.default:e,t):null;var e}),[t,n])};return v.preload=function(){return n()},v.displayName="LoadableComponent",i.default.forwardRef(v)}(f,t)}function b(t,e){for(var n=[];t.length;){var o=t.pop();n.push(o(e))}return Promise.all(n).then((function(){if(t.length)return b(t,e)}))}v.preloadAll=function(){return new Promise((function(t,e){b(d).then(t,e)}))},v.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var n=function(){return c=!0,e()};b(s,t).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var h=v;e.default=h},7422:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return C},default:function(){return E}});var o=n(1438),r=n(2951),u=n(8029),i=n(460),l=n(5893),a=(n(6486),n(7294)),d=n(5152),s=n.n(d),c=s()((function(){return Promise.all([n.e(1664),n.e(8853),n.e(6038),n.e(8868),n.e(9274),n.e(2195)]).then(n.bind(n,2195))}),{loadableGenerated:{webpack:function(){return[2195]}}}),f=s()((function(){return Promise.all([n.e(1664),n.e(4419)]).then(n.bind(n,558))}),{loadableGenerated:{webpack:function(){return[558]}}}),p=s()((function(){return Promise.all([n.e(1664),n.e(9646)]).then(n.bind(n,9646))}),{loadableGenerated:{webpack:function(){return[9646]}}}),v=s()((function(){return Promise.all([n.e(1664),n.e(7228)]).then(n.bind(n,7228))}),{loadableGenerated:{webpack:function(){return[7228]}}}),b=s()((function(){return Promise.all([n.e(1664),n.e(3269)]).then(n.bind(n,4309))}),{loadableGenerated:{webpack:function(){return[4309]}}}),h=s()((function(){return n.e(3896).then(n.bind(n,487))}),{loadableGenerated:{webpack:function(){return[487]}}}),_=s()((function(){return n.e(6193).then(n.bind(n,6193))}),{loadableGenerated:{webpack:function(){return[6193]}}}),y=s()((function(){return Promise.all([n.e(6038),n.e(6546),n.e(2431)]).then(n.bind(n,9553))}),{loadableGenerated:{webpack:function(){return[9553]}}}),m=s()((function(){return n.e(7514).then(n.bind(n,1442))}),{loadableGenerated:{webpack:function(){return[1442]}}}),g=s()((function(){return n.e(9582).then(n.bind(n,9582))}),{loadableGenerated:{webpack:function(){return[9582]}}}),w=s()((function(){return n.e(6896).then(n.bind(n,6896))}),{loadableGenerated:{webpack:function(){return[6896]}}}),x=s()((function(){return n.e(4159).then(n.bind(n,4159))}),{loadableGenerated:{webpack:function(){return[4159]}}}),k=s()((function(){return n.e(4676).then(n.bind(n,4676))}),{loadableGenerated:{webpack:function(){return[4676]}}}),j=s()((function(){return Promise.all([n.e(1664),n.e(4011)]).then(n.bind(n,4011))}),{loadableGenerated:{webpack:function(){return[4011]}}}),P=s()((function(){return n.e(9083).then(n.bind(n,9083))}),{loadableGenerated:{webpack:function(){return[9083]}}}),O=s()((function(){return n.e(3947).then(n.bind(n,3947))}),{loadableGenerated:{webpack:function(){return[3947]}}}),S=s()((function(){return Promise.all([n.e(1664),n.e(6703)]).then(n.bind(n,6703))}),{loadableGenerated:{webpack:function(){return[6703]}}}),C=!0,E=function(t){(0,u.Z)(n,t);var e=(0,i.Z)(n);function n(t){return(0,o.Z)(this,n),e.call(this,t)}return(0,r.Z)(n,[{key:"data",value:function(){var t,e,n,o,r,u=[],i=null===(n=null===(t=this.props)||void 0===t||null===(e=t.products)||void 0===e?void 0:e.data[0])||void 0===n||null===(o=n.attributes)||void 0===o||null===(r=o.Seo_Info)||void 0===r?void 0:r.meta;return null===i||void 0===i||i.map((function(t){u.push((0,l.jsx)("meta",{name:t.Meta_Name,content:t.Meta_Content},t.id))})),u}},{key:"render",value:function(){var t,e,n,o,r,u,i,a,d,s,C,E,T,G,M,Z,R,D,F,L,N,I,B,V,z,A,W,X,q,H,U,Y,J,K,Q,$,tt,et,nt,ot,rt,ut,it,lt,at,dt,st,ct,ft,pt,vt,bt,ht,_t,yt,mt,gt,wt,xt,kt,jt,Pt,Ot,St,Ct,Et,Tt,Gt,Mt,Zt,Rt,Dt,Ft,Lt,Nt,It,Bt,Vt,zt,At,Wt,Xt,qt,Ht,Ut,Yt,Jt;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{seo_info:null===(n=null===(t=this.props)||void 0===t||null===(e=t.products)||void 0===e?void 0:e.data[0])||void 0===n||null===(o=n.attributes)||void 0===o?void 0:o.Seo_Info,meta:this.data()}),(0,l.jsx)(y,{}),(0,l.jsx)(c,{MoreMenu:this.props.More_Menu,social_data:this.props.social_icons}),(0,l.jsxs)("main",{className:"no-fullpage",children:[(0,l.jsx)(h,{bgSrc:(null===(u=null===(r=this.props.page)||void 0===r?void 0:r.data[0])||void 0===u||null===(i=u.attributes)||void 0===i?void 0:i.Banner_Image)?null===(E=null===(d=null===(a=this.props.page)||void 0===a?void 0:a.data[0])||void 0===d||null===(s=d.attributes)||void 0===s||null===(C=s.Banner_Image)||void 0===C?void 0:C.data[0])||void 0===E||null===(T=E.attributes)||void 0===T?void 0:T.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg",pageTitle:null===(Z=null===(G=this.props)||void 0===G||null===(M=G.products)||void 0===M?void 0:M.data[0])||void 0===Z||null===(R=Z.attributes)||void 0===R?void 0:R.Title,bannerText:null===(L=null===(D=this.props)||void 0===D||null===(F=D.products)||void 0===F?void 0:F.data[0])||void 0===L||null===(N=L.attributes)||void 0===N?void 0:N.Short_Description}),(0,l.jsx)(g,{data:null===(I=this.props)||void 0===I||null===(B=I.products)||void 0===B?void 0:B.data[0]}),(null===(A=null===(V=this.props)||void 0===V||null===(z=V.products)||void 0===z?void 0:z.data[0])||void 0===A||null===(W=A.attributes)||void 0===W?void 0:W.Product_Icon_Box_Data.length)?(0,l.jsx)(w,{data:null===(X=this.props)||void 0===X||null===(q=X.products)||void 0===q?void 0:q.data[0]}):"",(null===(Y=null===(H=this.props)||void 0===H||null===(U=H.products)||void 0===U?void 0:U.data[0])||void 0===Y||null===(J=Y.attributes)||void 0===J?void 0:J.Product_Features.length)?(0,l.jsx)(x,{data:null===(K=this.props)||void 0===K||null===(Q=K.products)||void 0===Q?void 0:Q.data[0]}):"",(null===(et=null===($=this.props)||void 0===$||null===(tt=$.products)||void 0===tt?void 0:tt.data[0])||void 0===et||null===(nt=et.attributes)||void 0===nt?void 0:nt.Product_Advantages.length)?(0,l.jsx)(k,{data:null===(ot=this.props)||void 0===ot||null===(rt=ot.products)||void 0===rt?void 0:rt.data[0]}):"",(0,l.jsx)(j,{btnText:null===(lt=null===(ut=this.props)||void 0===ut||null===(it=ut.products)||void 0===it?void 0:it.data[0])||void 0===lt||null===(at=lt.attributes)||void 0===at?void 0:at.Product_Footer_Section_Button_Text,btnLink:null===(ct=null===(dt=this.props)||void 0===dt||null===(st=dt.products)||void 0===st?void 0:st.data[0])||void 0===ct||null===(ft=ct.attributes)||void 0===ft?void 0:ft.Product_Footer_Section_Button_Link,contentText:null===(bt=null===(pt=this.props)||void 0===pt||null===(vt=pt.products)||void 0===vt?void 0:vt.data[0])||void 0===bt||null===(ht=bt.attributes)||void 0===ht?void 0:ht.Product_Footer_Section_Text}),(0,l.jsx)(P,{fullWidth:"full-width",videoSrc:null===(mt=null===(_t=this.props)||void 0===_t||null===(yt=_t.products)||void 0===yt?void 0:yt.data[0])||void 0===mt||null===(gt=mt.attributes)||void 0===gt?void 0:gt.Product_Full_Width_Video_Url,videCoverBgSrc:(null===(kt=null===(wt=this.props)||void 0===wt||null===(xt=wt.products)||void 0===xt?void 0:xt.data[0])||void 0===kt||null===(jt=kt.attributes)||void 0===jt||null===(Pt=jt.Product_Full_Width_Image)||void 0===Pt||null===(Ot=Pt.data)||void 0===Ot||null===(St=Ot.attributes)||void 0===St?void 0:St.url)?null===(Tt=null===(Ct=this.props)||void 0===Ct||null===(Et=Ct.products)||void 0===Et?void 0:Et.data[0])||void 0===Tt||null===(Gt=Tt.attributes)||void 0===Gt||null===(Mt=Gt.Product_Full_Width_Image)||void 0===Mt||null===(Zt=Mt.data)||void 0===Zt||null===(Rt=Zt.attributes)||void 0===Rt?void 0:Rt.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg",videoCoverText:null===(Lt=null===(Dt=this.props)||void 0===Dt||null===(Ft=Dt.products)||void 0===Ft?void 0:Ft.data[0])||void 0===Lt||null===(Nt=Lt.attributes)||void 0===Nt?void 0:Nt.Product_Full_Width_Video_Text}),(null===(Vt=null===(It=this.props)||void 0===It||null===(Bt=It.products)||void 0===Bt?void 0:Bt.data[0])||void 0===Vt||null===(zt=Vt.attributes)||void 0===zt?void 0:zt.Col_Content.length)?(0,l.jsx)(O,{productContentCol:(0,l.jsx)(S,{data:null===(Xt=null===(At=this.props)||void 0===At||null===(Wt=At.products)||void 0===Wt?void 0:Wt.data[0])||void 0===Xt||null===(qt=Xt.attributes)||void 0===qt?void 0:qt.Col_Content}),productsectionTitle:null===(Yt=null===(Ht=this.props)||void 0===Ht||null===(Ut=Ht.products)||void 0===Ut?void 0:Ut.data[0])||void 0===Yt||null===(Jt=Yt.attributes)||void 0===Jt?void 0:Jt.Other_Products_Title}):"",(0,l.jsx)(f,{Contact:this.props.footer_contact,Web:this.props.cookies,MoreMenu:this.props.More_Menu,Social_Data:this.props.social_icons}),(0,l.jsx)(v,{social_data:this.props.social_icons}),(0,l.jsx)(p,{contact_data:this.props.contact_icons}),(0,l.jsx)(_,{})]}),(0,l.jsx)(b,{cookie:this.props.cookies})]})}}]),n}(a.Component)},5152:function(t,e,n){t.exports=n(638)},3250:function(t,e,n){"use strict";var o=n(7294);var r="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},u=o.useState,i=o.useEffect,l=o.useLayoutEffect,a=o.useDebugValue;function d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!r(t,n)}catch(o){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),o=u({inst:{value:n,getSnapshot:e}}),r=o[0].inst,s=o[1];return l((function(){r.value=n,r.getSnapshot=e,d(r)&&s({inst:r})}),[t,n,e]),i((function(){return d(r)&&s({inst:r}),t((function(){d(r)&&s({inst:r})}))}),[t]),a(n),n};e.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:s},1688:function(t,e,n){"use strict";t.exports=n(3250)},4111:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return o}})},1438:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return o}})},2951:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,{Z:function(){return r}})},460:function(t,e,n){"use strict";function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function r(t){return o(t)}n.d(e,{Z:function(){return l}});var u=n(4111);function i(t,e){return!e||"object"!==((n=e)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!==typeof e?(0,u.Z)(t):e;var n}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var u=r(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return i(this,n)}}},8029:function(t,e,n){"use strict";function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,{Z:function(){return r}})}},function(t){t.O(0,[9774,2888,179],(function(){return e=5620,t(t.s=e);var e}));var e=t.O();_N_E=e}]);