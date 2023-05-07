(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2061],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var i=s.apply(null,t);i&&e.push(i)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var a in t)r.call(t,a)&&t[a]&&e.push(a);else e.push(t.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(n,[]))||(e.exports=t)}()},2061:function(e,n,t){"use strict";t.r(n);var r=t(5893),s=(t(6486),t(7294),t(682)),o=t(5607),i=t(5152),a=t.n(i)()((function(){return Promise.all([t.e(1664),t.e(6354)]).then(t.bind(t,6354))}),{loadableGenerated:{webpack:function(){return[6354]}}});n.default=function(e){return(0,r.jsxs)("section",{className:"section investor-accordion-section",children:[(0,r.jsx)("div",{className:"section-inner",children:(0,r.jsx)(s.Z,{children:(0,r.jsx)("div",{className:"section-wrap",children:(0,r.jsx)("div",{className:"investor-accordion",children:(0,r.jsx)(o.Z,{defaultActiveKey:"0",id:"investorAccordion",children:(0,r.jsx)(a,{Investor:e.Investor})})})})})}),(0,r.jsxs)("div",{className:"inner-sec-round small-round-shape top-left custom-round",children:[(0,r.jsx)("div",{className:"green-round big reveal-fade"}),(0,r.jsx)("div",{className:"yellow-round small reveal-fade"})]})]})}},5607:function(e,n,t){"use strict";t.d(n,{Z:function(){return A}});var r=t(4184),s=t.n(r),o=t(7294),i=t(7150),a=t(6792),c=t(6518);function l(e,n){return Array.isArray(e)?e.includes(n):e===n}const u=o.createContext({});u.displayName="AccordionContext";var d=u,f=t(5893);const p=o.forwardRef((({as:e="div",bsPrefix:n,className:t,children:r,eventKey:i,...u},p)=>{const{activeEventKey:v}=(0,o.useContext)(d);return n=(0,a.vE)(n,"accordion-collapse"),(0,f.jsx)(c.Z,{ref:p,in:l(v,i),...u,className:s()(t,n),children:(0,f.jsx)(e,{children:o.Children.only(r)})})}));p.displayName="AccordionCollapse";var v=p;const m=o.createContext({eventKey:""});m.displayName="AccordionItemContext";var x=m;const y=o.forwardRef((({as:e="div",bsPrefix:n,className:t,...r},i)=>{n=(0,a.vE)(n,"accordion-body");const{eventKey:c}=(0,o.useContext)(x);return(0,f.jsx)(v,{eventKey:c,children:(0,f.jsx)(e,{ref:i,...r,className:s()(t,n)})})}));y.displayName="AccordionBody";var h=y;const N=o.forwardRef((({as:e="button",bsPrefix:n,className:t,onClick:r,...i},c)=>{n=(0,a.vE)(n,"accordion-button");const{eventKey:u}=(0,o.useContext)(x),p=function(e,n){const{activeEventKey:t,onSelect:r,alwaysOpen:s}=(0,o.useContext)(d);return o=>{let i=e===t?null:e;s&&(i=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==r||r(i,o),null==n||n(o)}}(u,r),{activeEventKey:v}=(0,o.useContext)(d);return"button"===e&&(i.type="button"),(0,f.jsx)(e,{ref:c,onClick:p,...i,"aria-expanded":u===v,className:s()(t,n,!l(v,u)&&"collapsed")})}));N.displayName="AccordionButton";var E=N;const j=o.forwardRef((({as:e="h2",bsPrefix:n,className:t,children:r,onClick:o,...i},c)=>(n=(0,a.vE)(n,"accordion-header"),(0,f.jsx)(e,{ref:c,...i,className:s()(t,n),children:(0,f.jsx)(E,{onClick:o,children:r})}))));j.displayName="AccordionHeader";var C=j;const g=o.forwardRef((({as:e="div",bsPrefix:n,className:t,eventKey:r,...i},c)=>{n=(0,a.vE)(n,"accordion-item");const l=(0,o.useMemo)((()=>({eventKey:r})),[r]);return(0,f.jsx)(x.Provider,{value:l,children:(0,f.jsx)(e,{ref:c,...i,className:s()(t,n)})})}));g.displayName="AccordionItem";var b=g;const w=o.forwardRef(((e,n)=>{const{as:t="div",activeKey:r,bsPrefix:c,className:l,onSelect:u,flush:p,alwaysOpen:v,...m}=(0,i.Ch)(e,{activeKey:"onSelect"}),x=(0,a.vE)(c,"accordion"),y=(0,o.useMemo)((()=>({activeEventKey:r,onSelect:u,alwaysOpen:v})),[r,u,v]);return(0,f.jsx)(d.Provider,{value:y,children:(0,f.jsx)(t,{ref:n,...m,className:s()(l,x,p&&`${x}-flush`)})})}));w.displayName="Accordion";var A=Object.assign(w,{Button:E,Collapse:v,Item:b,Header:C,Body:h})},6518:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(4184),s=t.n(r),o=t(1505),i=t(7294),a=t(3594),c=t(2646);var l=function(...e){return e.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(...t){e.apply(this,t),n.apply(this,t)}}),null)},u=t(4509),d=t(2785),f=t(5893);const p={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function v(e,n){const t=n[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=p[e];return t+parseInt((0,o.Z)(n,r[0]),10)+parseInt((0,o.Z)(n,r[1]),10)}const m={[a.Wj]:"collapse",[a.Ix]:"collapsing",[a.d0]:"collapsing",[a.cn]:"collapse show"},x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:v},y=i.forwardRef((({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:o,className:a,children:p,dimension:x="height",getDimensionValue:y=v,...h},N)=>{const E="function"===typeof x?x():x,j=(0,i.useMemo)((()=>l((e=>{e.style[E]="0"}),e)),[E,e]),C=(0,i.useMemo)((()=>l((e=>{const n=`scroll${E[0].toUpperCase()}${E.slice(1)}`;e.style[E]=`${e[n]}px`}),n)),[E,n]),g=(0,i.useMemo)((()=>l((e=>{e.style[E]=null}),t)),[E,t]),b=(0,i.useMemo)((()=>l((e=>{e.style[E]=`${y(E,e)}px`,(0,u.Z)(e)}),r)),[r,y,E]),w=(0,i.useMemo)((()=>l((e=>{e.style[E]=null}),o)),[E,o]);return(0,f.jsx)(d.Z,{ref:N,addEndListener:c.Z,...h,"aria-expanded":h.role?h.in:null,onEnter:j,onEntering:C,onEntered:g,onExit:b,onExiting:w,childRef:p.ref,children:(e,n)=>i.cloneElement(p,{...n,className:s()(a,p.props.className,m[e],"width"===E&&"collapse-horizontal")})})}));y.defaultProps=x;var h=y},682:function(e,n,t){"use strict";var r=t(4184),s=t.n(r),o=t(7294),i=t(6792),a=t(5893);const c=o.forwardRef((({bsPrefix:e,fluid:n,as:t="div",className:r,...o},c)=>{const l=(0,i.vE)(e,"container"),u="string"===typeof n?`-${n}`:"-fluid";return(0,a.jsx)(t,{ref:c,...o,className:s()(r,n?`${l}${u}`:l)})}));c.displayName="Container",c.defaultProps={fluid:!1},n.Z=c},6792:function(e,n,t){"use strict";t.d(n,{SC:function(){return u},pi:function(){return l},vE:function(){return c}});var r=t(7294);t(5893);const s=["xxl","xl","lg","md","sm","xs"],o=r.createContext({prefixes:{},breakpoints:s}),{Consumer:i,Provider:a}=o;function c(e,n){const{prefixes:t}=(0,r.useContext)(o);return e||t[n]||n}function l(){const{breakpoints:e}=(0,r.useContext)(o);return e}function u(){const{dir:e}=(0,r.useContext)(o);return"rtl"===e}}}]);