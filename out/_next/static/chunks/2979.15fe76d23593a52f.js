"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2979],{2979:function(e,n,l){l.r(n);var r=l(5893),s=l(7294),i=(l(6486),l(9111));n.default=function(e){var n,l=e.status,t=e.message,a=e.onValidated,u=(0,s.useState)(null),d=u[0],o=u[1],m=(0,s.useState)(null),c=m[0],v=m[1],f=function(){if(o(null),!c)return o("Please enter a valid email address"),null;var e=a({EMAIL:c});return setTimeout((function(){document.getElementById("newsletterEmail").value="",null!=document.getElementById("mymessage").innerHTML&&(document.getElementById("mymessage").innerHTML="")}),2e3),c&&c.indexOf("@")>-1&&e};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"form-wrap reveal-fade",children:[(0,r.jsx)("h4",{className:"newsletter-title",children:"Signup to our newsletter"}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("div",{className:"input-wrap",children:[(0,r.jsx)("input",{type:"email",id:"newsletterEmail",name:"email",placeholder:"Your Email Address",onChange:function(e){var l;return v(null!==(n=null===e||void 0===e||null===(l=e.target)||void 0===l?void 0:l.value)&&void 0!==n?n:"")},onKeyUp:function(e){return function(e){o(null),13===e.keyCode&&(e.preventDefault(),f())}(e)}}),"sending"===l&&(0,r.jsx)("div",{className:"error-msg",children:"Sending..."}),"error"===l||d?(0,r.jsx)("div",{className:"error-msg",dangerouslySetInnerHTML:{__html:d||function(e){var n,l,r;if(!e)return null;var s,t=null!==(r=null===e||void 0===e?void 0:e.split("-"))&&void 0!==r?r:null;if("0"!==(null===t||void 0===t||null===(n=t[0])||void 0===n?void 0:n.trim()))return(0,i.decode)(e);var a=null!==(s=null===t||void 0===t||null===(l=t[1])||void 0===l?void 0:l.trim())&&void 0!==s?s:null;return a?(0,i.decode)(a):null}(t)}}):null,"success"===l&&"error"!==l&&!d&&(0,r.jsx)("div",{className:"error-msg",id:"mymessage",dangerouslySetInnerHTML:{__html:(0,i.decode)(t)}})]}),(0,r.jsx)("div",{className:"subscribe-btn",children:(0,r.jsxs)("button",{className:"btn btn-primary",onClick:f,children:["Subscribe",(0,r.jsx)("i",{className:"far fa-bell"})]})})]})]})})}}}]);