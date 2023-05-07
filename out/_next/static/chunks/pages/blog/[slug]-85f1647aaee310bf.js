(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2492],{9937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(7602)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=u.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a({},o,e));if((o=a({},o,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");o.suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(n,o);delete o.ssr}return n(o)},t.noSSR=i;var a=n(6495).Z,o=n(2648).Z,u=(o(n(7294)),o(n(4302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,u=(0,n(2648).Z)(n(7294)),i=n(6319),l=n(1688).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=function(){if(!s){var t=new b(e,a);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=u.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=u.default.lazy(a.loader));var s=null;if(!c){var f=a.webpack?a.webpack():a.modules;f&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,u=f[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var i=o.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,a=l}finally{try{t||null==u.return||u.return()}finally{if(r)throw a}}}))}var p=a.suspense?function(e,t){return r(),u.default.createElement(a.lazy,o({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),u.default.useMemo((function(){return n.loading||n.error?u.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?u.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",u.default.forwardRef(p)}(f,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){_(s).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};_(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var v=p;t.default=v},7602:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return h},default:function(){return m}});var r=n(5893),a=(n(6486),n(7294),n(5152)),o=n.n(a),u=o()((function(){return Promise.all([n.e(1664),n.e(8853),n.e(6038),n.e(8868),n.e(9274),n.e(2195)]).then(n.bind(n,2195))}),{loadableGenerated:{webpack:function(){return[2195]}}}),i=o()((function(){return Promise.all([n.e(1664),n.e(558)]).then(n.bind(n,558))}),{loadableGenerated:{webpack:function(){return[558]}}}),l=o()((function(){return Promise.all([n.e(1664),n.e(9646)]).then(n.bind(n,9646))}),{loadableGenerated:{webpack:function(){return[9646]}}}),s=o()((function(){return Promise.all([n.e(1664),n.e(7228)]).then(n.bind(n,7228))}),{loadableGenerated:{webpack:function(){return[7228]}}}),d=o()((function(){return Promise.all([n.e(1664),n.e(4309)]).then(n.bind(n,4309))}),{loadableGenerated:{webpack:function(){return[4309]}}}),c=o()((function(){return n.e(3896).then(n.bind(n,487))}),{loadableGenerated:{webpack:function(){return[487]}}}),f=o()((function(){return n.e(6193).then(n.bind(n,6193))}),{loadableGenerated:{webpack:function(){return[6193]}}}),b=o()((function(){return Promise.all([n.e(6038),n.e(6546),n.e(2431)]).then(n.bind(n,9553))}),{loadableGenerated:{webpack:function(){return[9553]}}}),p=o()((function(){return n.e(1442).then(n.bind(n,1442))}),{loadableGenerated:{webpack:function(){return[1442]}}}),_=o()((function(){return n.e(6191).then(n.bind(n,6191))}),{loadableGenerated:{webpack:function(){return[6191]}}}),v=o()((function(){return Promise.all([n.e(1664),n.e(2055),n.e(6014)]).then(n.bind(n,6014))}),{loadableGenerated:{webpack:function(){return[6014]}}}),h=!0;function m(e){var t,n,a,o,h,m,y,g,w,k,x,j,S,P=e.data,E=e.pages,O=e.contact_icons,M=e.cookies,C=e.More_Menu,G=e.footer_contact,T=e.social_icons,D=e.blog_category,N=e.blog;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{seo_info:null===(t=P[0])||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.Seo_Info,meta:function(){var e,t,n,a=[],o=null===(e=P[0])||void 0===e||null===(t=e.attributes)||void 0===t||null===(n=t.Seo_Info)||void 0===n?void 0:n.meta;return null===o||void 0===o||o.map((function(e){a.push((0,r.jsx)("meta",{name:e.Meta_Name,content:e.Meta_Content},e.id))})),a}()}),(0,r.jsx)(b,{}),(0,r.jsx)(u,{MoreMenu:C,social_data:T}),(0,r.jsxs)("main",{className:"no-fullpage",children:[(0,r.jsx)(c,{bgSrc:(null===(a=E[0])||void 0===a||null===(o=a.attributes)||void 0===o?void 0:o.Banner_Image)?null===(g=null===(h=E[0])||void 0===h||null===(m=h.attributes)||void 0===m||null===(y=m.Banner_Image)||void 0===y?void 0:y.data[0])||void 0===g||null===(w=g.attributes)||void 0===w?void 0:w.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg",pageTitle:null===(k=E[0])||void 0===k||null===(x=k.attributes)||void 0===x?void 0:x.Page_Title,bannerText:null===(j=E[0])||void 0===j||null===(S=j.attributes)||void 0===S?void 0:S.Short_Description}),(0,r.jsx)(_,{data:P[0],blog_category:D,blog:N}),(0,r.jsx)(v,{data:P[0],count:M}),(0,r.jsx)(i,{Contact:G,Web:M,MoreMenu:C,Social_Data:T}),(0,r.jsx)(s,{social_data:T}),(0,r.jsx)(l,{contact_data:O}),(0,r.jsx)(f,{})]}),(0,r.jsx)(d,{cookie:M})]})}},5152:function(e,t,n){e.exports=n(638)},3250:function(e,t,n){"use strict";var r=n(7294);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=r.useState,u=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),a=r[0].inst,d=r[1];return i((function(){a.value=n,a.getSnapshot=t,s(a)&&d({inst:a})}),[e,n,t]),u((function(){return s(a)&&d({inst:a}),e((function(){s(a)&&d({inst:a})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},1688:function(e,t,n){"use strict";e.exports=n(3250)}},function(e){e.O(0,[9774,2888,179],(function(){return t=9937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);