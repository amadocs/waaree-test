"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1384],{1384:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var t=a(7568),i=a(414),n=a(5893),s=a(7294),o=a(1664),r=a.n(o),d=a(1358),c=a.n(d);function u(e){if(e){var l=new Date(e).toLocaleDateString("en-US",{day:"numeric"}),a=new Date(e).toLocaleDateString("en-US",{year:"numeric"}),t=new Date(e).toLocaleDateString("en-US",{month:"long"});return(0,n.jsxs)(n.Fragment,{children:[l," ",t," "," ",a]})}}function b(e){var l=(0,s.useState)([]),a=l[0],o=l[1],d=(0,s.useState)(0),b=d[0],v=d[1];(0,s.useEffect)((0,t.Z)((function(){var l,a;return(0,i.__generator)(this,(function(n){return l=function(){var e=(0,t.Z)((function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("https://backend.waaree.com/api/"+"blogs?sort=Blog_Date:desc&limit=".concat(5),{headers:{Authorization:"Bearer e9649faaa3e89a8807bac18f18940576911102cd40ab4d5a78fc7d4343899aa2125fd089a8a3fc56266d8b087f5aa37c9b9a3bda405fd332d32f3fa4672964bdd731cecd3a8352372fa291b83b40244e43bf62c2f6bc77e9d50acc3364e18ff66ff8a1d048cc15cd3518b9aff9eca8211834c9e553faecbfd80b98668d46390d"}}).then((function(e){return e.json()})).then((function(e){o(e.data)}))];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),l(),a=e.blog_count,v(Math.ceil(a/5)),[2]}))})),[5]);var h=(0,s.useState)([]),g=(h[0],h[1],(0,s.useState)("")),f=(g[0],g[1],function(){var e=(0,t.Z)((function(e){return(0,i.__generator)(this,(function(l){switch(l.label){case 0:return[4,fetch("https://backend.waaree.com/api/"+"blogs?sort=Blog_Date:desc&start=".concat(e,"&limit=").concat(5),{headers:{Authorization:"Bearer e9649faaa3e89a8807bac18f18940576911102cd40ab4d5a78fc7d4343899aa2125fd089a8a3fc56266d8b087f5aa37c9b9a3bda405fd332d32f3fa4672964bdd731cecd3a8352372fa291b83b40244e43bf62c2f6bc77e9d50acc3364e18ff66ff8a1d048cc15cd3518b9aff9eca8211834c9e553faecbfd80b98668d46390d"}})];case 1:return[4,l.sent().json()];case 2:return[2,l.sent().data]}}))}));return function(l){return e.apply(this,arguments)}}()),m=function(){var e=(0,t.Z)((function(e){var l,a;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return l=e.selected+1,l=0===e.selected?e.selected:5*(e.selected-1)+5,document.getElementsByClassName("page-link"),setTimeout((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),1e3),[4,f(l)];case 1:return a=t.sent(),o(a),[2]}}))}));return function(l){return e.apply(this,arguments)}}();return(0,n.jsx)(n.Fragment,{children:e.Items.length==e.blog_count?(0,n.jsxs)(n.Fragment,{children:[a.map((function(e){var l,a,t,i,s,o,d,c,b,v,h,g,f,m,p,w,x,j,N,k,_;return(0,n.jsx)("div",{className:"blog-single",children:(0,n.jsxs)("div",{className:"blog-inner",children:[(0,n.jsx)("div",{className:"blog-image",children:(0,n.jsx)(r(),{href:"/blog/[slug]",as:"/blog/".concat(null===e||void 0===e||null===(l=e.attributes)||void 0===l?void 0:l.slug),children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:(null===e||void 0===e||null===(a=e.attributes)||void 0===a||null===(t=a.Blog_Banner)||void 0===t||null===(i=t.data)||void 0===i||null===(s=i.attributes)||void 0===s?void 0:s.url)?null===e||void 0===e||null===(o=e.attributes)||void 0===o||null===(d=o.Blog_Banner)||void 0===d||null===(c=d.data)||void 0===c||null===(b=c.attributes)||void 0===b?void 0:b.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg"})})})}),(0,n.jsxs)("div",{className:"blog-title-wrap",children:[(0,n.jsx)("h4",{children:(0,n.jsx)(r(),{href:"/blog/[slug]",as:"/blog/".concat(null===e||void 0===e||null===(v=e.attributes)||void 0===v?void 0:v.slug),children:(0,n.jsx)("a",{children:null===e||void 0===e||null===(h=e.attributes)||void 0===h?void 0:h.Title})})}),(0,n.jsxs)("div",{className:"blog-date-share-wrap",children:[(0,n.jsxs)("div",{className:"blog-date",children:[u(null===e||void 0===e||null===(g=e.attributes)||void 0===g?void 0:g.Blog_Date)," at ",(0,n.jsx)("span",{children:null===e||void 0===e||null===(f=e.attributes)||void 0===f?void 0:f.Blog_Author})]}),(0,n.jsxs)("div",{className:"share-btn",children:[(0,n.jsx)("span",{children:"Share This"}),(0,n.jsxs)("ul",{className:"social-icon",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"social-link facebook",href:"https://www.facebook.com/sharer/sharer.php?u=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(m=e.attributes)||void 0===m?void 0:m.slug)+"/&t="+(null===e||void 0===e||null===(p=e.attributes)||void 0===p?void 0:p.slug),target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"social-link twitter",href:"https://twitter.com/intent/tweet?url=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(w=e.attributes)||void 0===w?void 0:w.slug)+"/&amp;text="+(null===e||void 0===e||null===(x=e.attributes)||void 0===x?void 0:x.slug)+"&amp;tw_p=tweetbutton&amp;url=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(j=e.attributes)||void 0===j?void 0:j.slug),target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-twitter"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"social-link linkedin",href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(N=e.attributes)||void 0===N?void 0:N.slug)+"/&amp;summary=&amp;source=Waaree Energies"+(null===e||void 0===e||null===(k=e.attributes)||void 0===k?void 0:k.slug),target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-linkedin-in"})})})]})]})]})]}),(0,n.jsx)("div",{className:"blog-detail-content",children:(0,n.jsx)("p",{children:null===e||void 0===e||null===(_=e.attributes)||void 0===_?void 0:_.blog_excerpt})})]})},e.id)})),(0,n.jsx)(c(),{previousLabel:"First",nextLabel:"Last",breakLabel:"...",pageCount:b,marginPagesDisplayed:1,pageRangeDisplayed:1,onPageChange:m,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"first page-item",previousLinkClassName:"page-link",nextClassName:"last page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})," "]}):(0,n.jsx)(n.Fragment,{children:e.Items.map((function(e){var l,a,t,i,s,o,d,c,b,v,h,g,f,m,p,w,x,j,N,k,_;return(0,n.jsx)("div",{className:"blog-single",children:(0,n.jsxs)("div",{className:"blog-inner",children:[(0,n.jsx)("div",{className:"blog-image",children:(0,n.jsx)(r(),{href:"/blog/[slug]",as:"/blog/".concat(null===e||void 0===e||null===(l=e.attributes)||void 0===l?void 0:l.slug),children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:(null===e||void 0===e||null===(a=e.attributes)||void 0===a||null===(t=a.Blog_Banner)||void 0===t||null===(i=t.data)||void 0===i||null===(s=i.attributes)||void 0===s?void 0:s.url)?null===e||void 0===e||null===(o=e.attributes)||void 0===o||null===(d=o.Blog_Banner)||void 0===d||null===(c=d.data)||void 0===c||null===(b=c.attributes)||void 0===b?void 0:b.url:"https://d2ehz7r19zq528.cloudfront.net/no_image_271bce5204_c17d3bf4af.jpg"})})})}),(0,n.jsxs)("div",{className:"blog-title-wrap",children:[(0,n.jsx)("h4",{children:(0,n.jsx)(r(),{href:"/blog/[slug]",as:"/blog/".concat(null===e||void 0===e||null===(v=e.attributes)||void 0===v?void 0:v.slug),children:(0,n.jsx)("a",{children:null===e||void 0===e||null===(h=e.attributes)||void 0===h?void 0:h.Title})})}),(0,n.jsxs)("div",{className:"blog-date-share-wrap",children:[(0,n.jsxs)("div",{className:"blog-date",children:[u(null===e||void 0===e||null===(g=e.attributes)||void 0===g?void 0:g.Blog_Date)," at ",(0,n.jsx)("span",{children:null===e||void 0===e||null===(f=e.attributes)||void 0===f?void 0:f.Blog_Author})]}),(0,n.jsxs)("div",{className:"share-btn",children:[(0,n.jsx)("span",{children:"Share This"}),(0,n.jsxs)("ul",{className:"social-icon",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"social-link facebook",href:"https://www.facebook.com/sharer/sharer.php?u=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(m=e.attributes)||void 0===m?void 0:m.slug)+"/&t="+(null===e||void 0===e||null===(p=e.attributes)||void 0===p?void 0:p.slug),target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"social-link twitter",href:"https://twitter.com/intent/tweet?url=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(w=e.attributes)||void 0===w?void 0:w.slug)+"/&amp;text="+(null===e||void 0===e||null===(x=e.attributes)||void 0===x?void 0:x.slug)+"&amp;tw_p=tweetbutton&amp;url=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(j=e.attributes)||void 0===j?void 0:j.slug),target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-twitter"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"social-link linkedin",href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.waaree.com/blog/"+(null===e||void 0===e||null===(N=e.attributes)||void 0===N?void 0:N.slug)+"/&amp;summary=&amp;source=Waaree Energies"+(null===e||void 0===e||null===(k=e.attributes)||void 0===k?void 0:k.slug),target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-linkedin-in"})})})]})]})]})]}),(0,n.jsx)("div",{className:"blog-detail-content",children:(0,n.jsx)("p",{children:null===e||void 0===e||null===(_=e.attributes)||void 0===_?void 0:_.blog_excerpt})})]})},e.id)}))})})}}}]);