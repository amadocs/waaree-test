(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1894],{4184:function(e,t){var s;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var l=typeof s;if("string"===l||"number"===l)e.push(s);else if(Array.isArray(s)){if(s.length){var r=i.apply(null,s);r&&e.push(r)}}else if("object"===l)if(s.toString===Object.prototype.toString)for(var a in s)n.call(s,a)&&s[a]&&e.push(a);else e.push(s.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(t,[]))||(e.exports=s)}()},1894:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(1438),i=s(2951),l=s(8029),r=s(460),a=s(5893),o=s(7294),c=(s(6486),s(682)),u=s(4051),d=s(1555),f=s(5152),m=s.n(f)()((function(){return s.e(2688).then(s.bind(s,2688))}),{loadableGenerated:{webpack:function(){return[2688]}}}),v=function(e){(0,l.Z)(s,e);var t=(0,r.Z)(s);function s(e){var i;return(0,n.Z)(this,s),(i=t.call(this,e)).state={visibleTestimonial:6},i}return(0,i.Z)(s,[{key:"render",value:function(){var e=this;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"section testimonial-listing-section",children:(0,a.jsxs)("div",{className:"section-inner",children:[(0,a.jsx)(c.Z,{children:(0,a.jsx)("div",{className:"section-wrap reveal-fade stagger-animation",children:(0,a.jsxs)("div",{className:"testimonial-listing-wrapper",children:[(0,a.jsx)("div",{className:"testimonial-listing",children:this.props.data.slice(0,this.state.visibleTestimonial).map((function(e){var t,s,n,i,l,r,o,c,f,m;return(0,a.jsx)("div",{className:"testimonial-single ",children:(0,a.jsx)("div",{className:"testimonial-single-wrap",children:(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(d.Z,{lg:2,md:4,className:"testimonial-image-col",children:(0,a.jsx)("div",{className:"col-inner",children:(0,a.jsx)("div",{className:"testimonial-image",children:(0,a.jsx)("img",{priority:"false",src:(null===e||void 0===e||null===(t=e.attributes)||void 0===t||null===(s=t.Testimonial_Logo)||void 0===s||null===(n=s.data)||void 0===n||null===(i=n.attributes)||void 0===i?void 0:i.url)?null===e||void 0===e||null===(l=e.attributes)||void 0===l||null===(r=l.Testimonial_Logo)||void 0===r||null===(o=r.data)||void 0===o||null===(c=o.attributes)||void 0===c?void 0:c.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg",alt:"",loading:"lazy"})})})}),(0,a.jsx)(d.Z,{lg:10,md:8,className:"testimonial-content-col",children:(0,a.jsxs)("div",{className:"col-inner",children:[(0,a.jsxs)("h4",{className:"testimonial-company-title green-title",children:["\u201c ",null===e||void 0===e||null===(f=e.attributes)||void 0===f?void 0:f.Title]}),(0,a.jsx)("div",{className:"content-text",children:(0,a.jsx)("p",{children:null===e||void 0===e||null===(m=e.attributes)||void 0===m?void 0:m.Testimonial_Text})})]})})]})})})}))}),(0,a.jsx)("div",{className:"btn-wrap text-center",children:(0,a.jsxs)("button",{className:"btn btn-primary load-more",onClick:function(){document.querySelector(".load-more").classList.add("hide"),e.setState({visibleTestimonial:e.state.visibleTestimonial.length,DataisLoaded:!0})},children:["Load More ",(0,a.jsx)("i",{className:"fa fa-chevron-right"})]})})]})})}),(0,a.jsx)(m,{})]})})})}}]),s}(o.Component)},1555:function(e,t,s){"use strict";var n=s(4184),i=s.n(n),l=s(7294),r=s(6792),a=s(5893);const o=l.forwardRef(((e,t)=>{const[{className:s,...n},{as:l="div",bsPrefix:o,spans:c}]=function({as:e,bsPrefix:t,className:s,...n}){t=(0,r.vE)(t,"col");const l=(0,r.pi)(),a=[],o=[];return l.forEach((e=>{const s=n[e];let i,l,r;delete n[e],"object"===typeof s&&null!=s?({span:i,offset:l,order:r}=s):i=s;const c="xs"!==e?`-${e}`:"";i&&a.push(!0===i?`${t}${c}`:`${t}${c}-${i}`),null!=r&&o.push(`order${c}-${r}`),null!=l&&o.push(`offset${c}-${l}`)})),[{...n,className:i()(s,...a,...o)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,a.jsx)(l,{...n,ref:t,className:i()(s,!c.length&&o)})}));o.displayName="Col",t.Z=o},682:function(e,t,s){"use strict";var n=s(4184),i=s.n(n),l=s(7294),r=s(6792),a=s(5893);const o=l.forwardRef((({bsPrefix:e,fluid:t,as:s="div",className:n,...l},o)=>{const c=(0,r.vE)(e,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,a.jsx)(s,{ref:o,...l,className:i()(n,t?`${c}${u}`:c)})}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},4051:function(e,t,s){"use strict";var n=s(4184),i=s.n(n),l=s(7294),r=s(6792),a=s(5893);const o=l.forwardRef((({bsPrefix:e,className:t,as:s="div",...n},l)=>{const o=(0,r.vE)(e,"row"),c=(0,r.pi)(),u=`${o}-cols`,d=[];return c.forEach((e=>{const t=n[e];let s;delete n[e],null!=t&&"object"===typeof t?({cols:s}=t):s=t;const i="xs"!==e?`-${e}`:"";null!=s&&d.push(`${u}${i}-${s}`)})),(0,a.jsx)(s,{ref:l,...n,className:i()(t,o,...d)})}));o.displayName="Row",t.Z=o},6792:function(e,t,s){"use strict";s.d(t,{SC:function(){return u},pi:function(){return c},vE:function(){return o}});var n=s(7294);s(5893);const i=["xxl","xl","lg","md","sm","xs"],l=n.createContext({prefixes:{},breakpoints:i}),{Consumer:r,Provider:a}=l;function o(e,t){const{prefixes:s}=(0,n.useContext)(l);return e||s[t]||t}function c(){const{breakpoints:e}=(0,n.useContext)(l);return e}function u(){const{dir:e}=(0,n.useContext)(l);return"rtl"===e}}}]);