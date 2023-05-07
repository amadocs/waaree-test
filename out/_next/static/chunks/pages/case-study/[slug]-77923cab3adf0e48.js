(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2237],{34:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/case-study/[slug]",function(){return n(5773)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,a=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=u({},a,e));if((a=u({},a,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.suspense&&(delete a.ssr,delete a.loading);a.loadableGenerated&&delete(a=u({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,i(n,a);delete a.ssr}return n(a)},t.noSSR=i;var u=n(6495).Z,a=n(2648).Z,o=(a(n(7294)),a(n(4302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,u=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,o=(0,n(2648).Z)(n(7294)),i=n(6319),l=n(1688).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return function(e,t){var n=function(){if(!s){var t=new p(e,u);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=o.default.useContext(i.LoadableContext);e&&Array.isArray(u.modules)&&u.modules.forEach((function(t){e(t)}))},u=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);u.suspense&&(u.lazy=o.default.lazy(u.loader));var s=null;if(!c){var f=u.webpack?u.webpack():u.modules;f&&d.push((function(e){var t=!0,r=!1,u=void 0;try{for(var a,o=f[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,u=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw u}}}))}var _=u.suspense?function(e,t){return r(),o.default.createElement(u.lazy,a({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return o.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),o.default.useMemo((function(){return n.loading||n.error?o.default.createElement(u.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?o.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return _.preload=function(){return n()},_.displayName="LoadableComponent",o.default.forwardRef(_)}(f,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}_.preloadAll=function(){return new Promise((function(e,t){b(s).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};b(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var v=_;t.default=v},5773:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return v},default:function(){return h}});var r=n(5893),u=(n(6486),n(7294),n(5152)),a=n.n(u),o=a()((function(){return Promise.all([n.e(1664),n.e(8853),n.e(6038),n.e(8868),n.e(9274),n.e(2195)]).then(n.bind(n,2195))}),{loadableGenerated:{webpack:function(){return[2195]}}}),i=a()((function(){return Promise.all([n.e(1664),n.e(558)]).then(n.bind(n,558))}),{loadableGenerated:{webpack:function(){return[558]}}}),l=a()((function(){return Promise.all([n.e(1664),n.e(9646)]).then(n.bind(n,9646))}),{loadableGenerated:{webpack:function(){return[9646]}}}),s=a()((function(){return Promise.all([n.e(1664),n.e(7228)]).then(n.bind(n,7228))}),{loadableGenerated:{webpack:function(){return[7228]}}}),d=a()((function(){return Promise.all([n.e(1664),n.e(4309)]).then(n.bind(n,4309))}),{loadableGenerated:{webpack:function(){return[4309]}}}),c=a()((function(){return n.e(3896).then(n.bind(n,487))}),{loadableGenerated:{webpack:function(){return[487]}}}),f=a()((function(){return n.e(6193).then(n.bind(n,6193))}),{loadableGenerated:{webpack:function(){return[6193]}}}),p=a()((function(){return Promise.all([n.e(6038),n.e(6546),n.e(2431)]).then(n.bind(n,9553))}),{loadableGenerated:{webpack:function(){return[9553]}}}),_=a()((function(){return n.e(1442).then(n.bind(n,1442))}),{loadableGenerated:{webpack:function(){return[1442]}}}),b=a()((function(){return n.e(6639).then(n.bind(n,6639))}),{loadableGenerated:{webpack:function(){return[6639]}}}),v=!0;function h(e){var t,n,u,a,v,h,m,y,g,w,k,x,j,S=e.data,E=e.pages,P=e.contact_icons,O=e.cookies,M=e.More_Menu,C=e.footer_contact,T=e.social_icons;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{seo_info:null===(t=S[0])||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.Seo_Info,meta:function(){var e,t,n,u=[],a=null===(e=S[0])||void 0===e||null===(t=e.attributes)||void 0===t||null===(n=t.Seo_Info)||void 0===n?void 0:n.meta;return null===a||void 0===a||a.map((function(e){u.push((0,r.jsx)("meta",{name:e.Meta_Name,content:e.Meta_Content},e.id))})),u}()}),(0,r.jsx)(p,{}),(0,r.jsx)(o,{MoreMenu:M,social_data:T}),(0,r.jsxs)("main",{className:"no-fullpage",children:[(0,r.jsx)(c,{bgSrc:(null===(u=E[0])||void 0===u||null===(a=u.attributes)||void 0===a?void 0:a.Banner_Image)?null===(y=null===(v=E[0])||void 0===v||null===(h=v.attributes)||void 0===h||null===(m=h.Banner_Image)||void 0===m?void 0:m.data[0])||void 0===y||null===(g=y.attributes)||void 0===g?void 0:g.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg",pageTitle:null===(w=E[0])||void 0===w||null===(k=w.attributes)||void 0===k?void 0:k.Page_Title,bannerText:null===(x=E[0])||void 0===x||null===(j=x.attributes)||void 0===j?void 0:j.Short_Description}),(0,r.jsx)(b,{data:S[0]}),(0,r.jsx)(i,{Contact:C,Web:O,MoreMenu:M,Social_Data:T}),(0,r.jsx)(s,{social_data:T}),(0,r.jsx)(l,{contact_data:P}),(0,r.jsx)(f,{})]}),(0,r.jsx)(d,{cookie:O})]})}},5152:function(e,t,n){e.exports=n(638)},3250:function(e,t,n){"use strict";var r=n(7294);var u="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=r.useState,o=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),u=r[0].inst,d=r[1];return i((function(){u.value=n,u.getSnapshot=t,s(u)&&d({inst:u})}),[e,n,t]),o((function(){return s(u)&&d({inst:u}),e((function(){s(u)&&d({inst:u})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},1688:function(e,t,n){"use strict";e.exports=n(3250)}},function(e){e.O(0,[9774,2888,179],(function(){return t=34,e(e.s=t);var t}));var t=e.O();_N_E=t}]);