(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2072],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=s.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},2072:function(e,t,n){"use strict";n.r(t);var r=n(7568),s=n(414),i=n(5893),o=n(7294),l=(n(6486),n(682)),a=n(4051),c=n(1555),u=n(5152),d=n.n(u)()((function(){return n.e(2688).then(n.bind(n,2688))}),{loadableGenerated:{webpack:function(){return[2688]}}});t.default=function(e){var t=(0,o.useState)(5),n=t[0],u=t[1];(0,o.useEffect)((0,r.Z)((function(){return(0,s.__generator)(this,(function(e){return setTimeout((function(){document.querySelector(".filter-btn-list li:first-child a").click()}),1200),[2]}))})),[]);var f=(0,o.useState)(""),v=f[0],p=f[1],m=function(e){var t=document.querySelectorAll(".filter-btn");[].forEach.call(t,(function(e){e.classList.remove("active")})),e.target.classList.add("active"),p(e.currentTarget.text)};return(0,i.jsx)("section",{className:"section clientele-logo-section",children:(0,i.jsxs)("div",{className:"section-inner",children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)("div",{className:"section-wrap",children:(0,i.jsxs)("div",{className:"company-logo-filter",children:[(0,i.jsx)("div",{className:"filter-btn-wrap",children:(0,i.jsx)("ul",{className:"filter-btn-list",children:e.data.map((function(e){var t;return(0,i.jsx)("li",{className:"reveal-fade stagger-animation",children:(0,i.jsx)("a",{onClick:m,className:"filter-btn btn",children:null===e||void 0===e||null===(t=e.attributes)||void 0===t?void 0:t.Clientele_Logo_Type})},e.id)}))})}),(0,i.jsxs)("div",{className:"company-logo-listing",children:[(0,i.jsx)(a.Z,{className:"company-logo-row",children:e.data.map((function(e){var t,r;if((null===e||void 0===e||null===(t=e.attributes)||void 0===t?void 0:t.Clientele_Logo_Type)===v)return(0,i.jsx)(i.Fragment,{children:null===e||void 0===e||null===(r=e.attributes)||void 0===r?void 0:r.Clientele_Content.slice(0,n).map((function(e){var t,n,r;return(0,i.jsx)(c.Z,{lg:3,md:4,sm:6,className:"col-20",children:(0,i.jsx)("div",{className:"col-inner",children:(0,i.jsx)("img",{priority:"false",src:null===e||void 0===e||null===(t=e.Clientele_Logo_Image)||void 0===t||null===(n=t.data)||void 0===n||null===(r=n.attributes)||void 0===r?void 0:r.url,alt:"Clientele Logo",loading:"lazy"})})},e.id)}))})}))}),(0,i.jsx)("div",{className:"load-more-btn btn-wrap text-center reveal-fade",children:(0,i.jsxs)("button",{className:"btn btn-primary load-more",onClick:function(){var t,n;document.querySelector(".load-more").classList.add("hide"),u(null===(t=e.data)||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.Clientele_Content.length)},children:["Load More",(0,i.jsx)("i",{className:"fa fa-chevron-right"})]})})]})]})})}),(0,i.jsx)(d,{})]})})}},1555:function(e,t,n){"use strict";var r=n(4184),s=n.n(r),i=n(7294),o=n(6792),l=n(5893);const a=i.forwardRef(((e,t)=>{const[{className:n,...r},{as:i="div",bsPrefix:a,spans:c}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,o.vE)(t,"col");const i=(0,o.pi)(),l=[],a=[];return i.forEach((e=>{const n=r[e];let s,i,o;delete r[e],"object"===typeof n&&null!=n?({span:s,offset:i,order:o}=n):s=n;const c="xs"!==e?`-${e}`:"";s&&l.push(!0===s?`${t}${c}`:`${t}${c}-${s}`),null!=o&&a.push(`order${c}-${o}`),null!=i&&a.push(`offset${c}-${i}`)})),[{...r,className:s()(n,...l,...a)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,l.jsx)(i,{...r,ref:t,className:s()(n,!c.length&&a)})}));a.displayName="Col",t.Z=a},682:function(e,t,n){"use strict";var r=n(4184),s=n.n(r),i=n(7294),o=n(6792),l=n(5893);const a=i.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...i},a)=>{const c=(0,o.vE)(e,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,l.jsx)(n,{ref:a,...i,className:s()(r,t?`${c}${u}`:c)})}));a.displayName="Container",a.defaultProps={fluid:!1},t.Z=a},4051:function(e,t,n){"use strict";var r=n(4184),s=n.n(r),i=n(7294),o=n(6792),l=n(5893);const a=i.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},i)=>{const a=(0,o.vE)(e,"row"),c=(0,o.pi)(),u=`${a}-cols`,d=[];return c.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const s="xs"!==e?`-${e}`:"";null!=n&&d.push(`${u}${s}-${n}`)})),(0,l.jsx)(n,{ref:i,...r,className:s()(t,a,...d)})}));a.displayName="Row",t.Z=a},6792:function(e,t,n){"use strict";n.d(t,{SC:function(){return u},pi:function(){return c},vE:function(){return a}});var r=n(7294);n(5893);const s=["xxl","xl","lg","md","sm","xs"],i=r.createContext({prefixes:{},breakpoints:s}),{Consumer:o,Provider:l}=i;function a(e,t){const{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function c(){const{breakpoints:e}=(0,r.useContext)(i);return e}function u(){const{dir:e}=(0,r.useContext)(i);return"rtl"===e}},7568:function(e,t,n){"use strict";function r(e,t,n,r,s,i,o){try{var l=e[i](o),a=l.value}catch(c){return void n(c)}l.done?t(a):Promise.resolve(a).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function l(e){r(o,s,i,l,a,"next",e)}function a(e){r(o,s,i,l,a,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);