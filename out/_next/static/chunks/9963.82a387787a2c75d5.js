(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9963],{4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var u=o.apply(null,n);u&&t.push(u)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&t.push(l);else t.push(n.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},9963:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(1438),o=n(2951),i=n(8029),u=n(460),l=n(5893),s=(n(6486),n(7294)),a=n(682),c=n(4051),f=n(5152),d=n.n(f),v=d()((function(){return n.e(6198).then(n.bind(n,6198))}),{loadableGenerated:{webpack:function(){return[6198]}}}),p=d()((function(){return Promise.all([n.e(1664),n.e(4016)]).then(n.bind(n,4016))}),{loadableGenerated:{webpack:function(){return[4016]}}}),b=d()((function(){return Promise.all([n.e(1664),n.e(695)]).then(n.bind(n,695))}),{loadableGenerated:{webpack:function(){return[695]}}}),h=function(t){(0,i.Z)(n,t);var e=(0,u.Z)(n);function n(t){return(0,r.Z)(this,n),e.call(this,t)}return(0,o.Z)(n,[{key:"dispBlogDate",value:function(t){if(t){var e=new Date(t).toLocaleDateString("en-US",{day:"numeric"}),n=new Date(t).toLocaleDateString("en-US",{year:"numeric"}),r=new Date(t).toLocaleDateString("en-US",{month:"long"});return(0,l.jsxs)(l.Fragment,{children:[e," ",r," "," ",n]})}}},{key:"render",value:function(){var t,e,n,r,o,i,u,s,f,d,h=this;return(0,l.jsxs)("div",{className:"section blog-section",style:{backgroundColor:"#f0faf2"},children:[(0,l.jsx)("div",{className:"section-inner",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)("div",{className:"section-wrap",children:(0,l.jsxs)("div",{className:"blog-inner",children:[(0,l.jsx)(v,{sectionTitle:null===(t=this.props)||void 0===t||null===(e=t.blog)||void 0===e||null===(n=e.attributes)||void 0===n?void 0:n.Title,titleTheme:"dark-title"}),(0,l.jsx)(c.Z,{className:"blog-row",children:null===(r=this.props)||void 0===r?void 0:r.data.map((function(t){var e,n,r,o,i,u,s,a,c,f,d;return(0,l.jsx)(b,{blogBg:(null===t||void 0===t||null===(e=t.attributes)||void 0===e||null===(n=e.Blog_Banner)||void 0===n||null===(r=n.data)||void 0===r||null===(o=r.attributes)||void 0===o?void 0:o.url)?null===t||void 0===t||null===(i=t.attributes)||void 0===i||null===(u=i.Blog_Banner)||void 0===u||null===(s=u.data)||void 0===s||null===(a=s.attributes)||void 0===a?void 0:a.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg",blogDate:h.dispBlogDate(null===t||void 0===t||null===(c=t.attributes)||void 0===c?void 0:c.Blog_Date),blogTitle:null===t||void 0===t||null===(f=t.attributes)||void 0===f?void 0:f.Title,blogLink:"/blog/".concat(null===t||void 0===t||null===(d=t.attributes)||void 0===d?void 0:d.slug)},t.id)}))}),(0,l.jsx)("div",{className:"view-all-btn text-center reveal-fade",children:(0,l.jsx)(p,{buttonText:null===(o=this.props)||void 0===o||null===(i=o.blog)||void 0===i||null===(u=i.attributes)||void 0===u?void 0:u.Button_Text,buttonHref:null===(s=this.props)||void 0===s||null===(f=s.blog)||void 0===f||null===(d=f.attributes)||void 0===d?void 0:d.Button_Link})})]})})})}),(0,l.jsxs)("div",{className:"inner-round-shape top-right custom-round",children:[(0,l.jsx)("div",{className:"green-round big reveal-fade"}),(0,l.jsx)("div",{className:"yellow-round small reveal-fade"})]})]})}}]),n}(s.Component)},682:function(t,e,n){"use strict";var r=n(4184),o=n.n(r),i=n(7294),u=n(6792),l=n(5893);const s=i.forwardRef((({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const a=(0,u.vE)(t,"container"),c="string"===typeof e?`-${e}`:"-fluid";return(0,l.jsx)(n,{ref:s,...i,className:o()(r,e?`${a}${c}`:a)})}));s.displayName="Container",s.defaultProps={fluid:!1},e.Z=s},4051:function(t,e,n){"use strict";var r=n(4184),o=n.n(r),i=n(7294),u=n(6792),l=n(5893);const s=i.forwardRef((({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=(0,u.vE)(t,"row"),a=(0,u.pi)(),c=`${s}-cols`,f=[];return a.forEach((t=>{const e=r[t];let n;delete r[t],null!=e&&"object"===typeof e?({cols:n}=e):n=e;const o="xs"!==t?`-${t}`:"";null!=n&&f.push(`${c}${o}-${n}`)})),(0,l.jsx)(n,{ref:i,...r,className:o()(e,s,...f)})}));s.displayName="Row",e.Z=s},6792:function(t,e,n){"use strict";n.d(e,{SC:function(){return c},pi:function(){return a},vE:function(){return s}});var r=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],i=r.createContext({prefixes:{},breakpoints:o}),{Consumer:u,Provider:l}=i;function s(t,e){const{prefixes:n}=(0,r.useContext)(i);return t||n[e]||e}function a(){const{breakpoints:t}=(0,r.useContext)(i);return t}function c(){const{dir:t}=(0,r.useContext)(i);return"rtl"===t}},4111:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},1438:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},2951:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,{Z:function(){return o}})},460:function(t,e,n){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t){return r(t)}n.d(e,{Z:function(){return l}});var i=n(4111);function u(t,e){return!e||"object"!==((n=e)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!==typeof e?(0,i.Z)(t):e;var n}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}},8029:function(t,e,n){"use strict";function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return o}})}}]);