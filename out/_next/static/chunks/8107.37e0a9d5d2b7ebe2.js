(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8107],{4184:function(t,n){var e;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var s=typeof e;if("string"===s||"number"===s)t.push(e);else if(Array.isArray(e)){if(e.length){var c=o.apply(null,e);c&&t.push(c)}}else if("object"===s)if(e.toString===Object.prototype.toString)for(var i in e)r.call(e,i)&&e[i]&&t.push(i);else t.push(e.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(n,[]))||(t.exports=e)}()},8107:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return v}});var r=e(1438),o=e(2951),s=e(8029),c=e(460),i=e(5893),u=e(7294),a=(e(6486),e(682)),f=e(4051),l=e(1555),p=e(5152),d=e.n(p),h=d()((function(){return e.e(2688).then(e.bind(e,2688))}),{loadableGenerated:{webpack:function(){return[2688]}}}),b=d()((function(){return e.e(9114).then(e.bind(e,9114))}),{loadableGenerated:{webpack:function(){return[9114]}}}),v=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(){return(0,r.Z)(this,e),n.apply(this,arguments)}return(0,o.Z)(e,[{key:"render",value:function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:"section Blog-detail-section",children:(0,i.jsxs)("div",{className:"section-inner",children:[(0,i.jsx)(a.Z,{children:(0,i.jsx)("div",{className:"section-wrap",children:(0,i.jsx)("div",{className:"blog-main-row",children:(0,i.jsx)(f.Z,{children:(0,i.jsx)(l.Z,{lg:12,className:"blog-detail-col",children:(0,i.jsx)("div",{className:"col-inner",children:(0,i.jsx)("div",{className:"blog-wrap",children:(0,i.jsx)(b,{data:this.props.data})})})})})})})}),(0,i.jsx)(h,{})]})})})}}]),e}(u.Component)},1555:function(t,n,e){"use strict";var r=e(4184),o=e.n(r),s=e(7294),c=e(6792),i=e(5893);const u=s.forwardRef(((t,n)=>{const[{className:e,...r},{as:s="div",bsPrefix:u,spans:a}]=function({as:t,bsPrefix:n,className:e,...r}){n=(0,c.vE)(n,"col");const s=(0,c.pi)(),i=[],u=[];return s.forEach((t=>{const e=r[t];let o,s,c;delete r[t],"object"===typeof e&&null!=e?({span:o,offset:s,order:c}=e):o=e;const a="xs"!==t?`-${t}`:"";o&&i.push(!0===o?`${n}${a}`:`${n}${a}-${o}`),null!=c&&u.push(`order${a}-${c}`),null!=s&&u.push(`offset${a}-${s}`)})),[{...r,className:o()(e,...i,...u)},{as:t,bsPrefix:n,spans:i}]}(t);return(0,i.jsx)(s,{...r,ref:n,className:o()(e,!a.length&&u)})}));u.displayName="Col",n.Z=u},682:function(t,n,e){"use strict";var r=e(4184),o=e.n(r),s=e(7294),c=e(6792),i=e(5893);const u=s.forwardRef((({bsPrefix:t,fluid:n,as:e="div",className:r,...s},u)=>{const a=(0,c.vE)(t,"container"),f="string"===typeof n?`-${n}`:"-fluid";return(0,i.jsx)(e,{ref:u,...s,className:o()(r,n?`${a}${f}`:a)})}));u.displayName="Container",u.defaultProps={fluid:!1},n.Z=u},4051:function(t,n,e){"use strict";var r=e(4184),o=e.n(r),s=e(7294),c=e(6792),i=e(5893);const u=s.forwardRef((({bsPrefix:t,className:n,as:e="div",...r},s)=>{const u=(0,c.vE)(t,"row"),a=(0,c.pi)(),f=`${u}-cols`,l=[];return a.forEach((t=>{const n=r[t];let e;delete r[t],null!=n&&"object"===typeof n?({cols:e}=n):e=n;const o="xs"!==t?`-${t}`:"";null!=e&&l.push(`${f}${o}-${e}`)})),(0,i.jsx)(e,{ref:s,...r,className:o()(n,u,...l)})}));u.displayName="Row",n.Z=u},6792:function(t,n,e){"use strict";e.d(n,{SC:function(){return f},pi:function(){return a},vE:function(){return u}});var r=e(7294);e(5893);const o=["xxl","xl","lg","md","sm","xs"],s=r.createContext({prefixes:{},breakpoints:o}),{Consumer:c,Provider:i}=s;function u(t,n){const{prefixes:e}=(0,r.useContext)(s);return t||e[n]||n}function a(){const{breakpoints:t}=(0,r.useContext)(s);return t}function f(){const{dir:t}=(0,r.useContext)(s);return"rtl"===t}},4111:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return r}})},1438:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return r}})},2951:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,{Z:function(){return o}})},460:function(t,n,e){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t){return r(t)}e.d(n,{Z:function(){return i}});var s=e(4111);function c(t,n){return!n||"object"!==((e=n)&&e.constructor===Symbol?"symbol":typeof e)&&"function"!==typeof n?(0,s.Z)(t):n;var e}function i(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=o(t);if(n){var s=o(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return c(this,e)}}},8029:function(t,n,e){"use strict";function r(t,n){return r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},r(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,{Z:function(){return o}})}}]);