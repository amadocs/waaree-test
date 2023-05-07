"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7093],{7093:function(e,a,s){s.r(a),s.d(a,{default:function(){return b}});var i=s(4111),t=s(1438),l=s(2951),r=s(8029),n=s(460),c=s(5893),m=(s(6486),s(7294)),d=s(4853),o=s(9669),h=s.n(o),u=s(4051),f=s(1555),b=function(e){(0,r.Z)(s,e);var a=(0,n.Z)(s);function s(e){var l;return(0,t.Z)(this,s),(l=a.call(this,e)).state={contact_us:[],page:[],fields:{Name:"",Mobile_Number:"",Email:"",Message:""},errors:{}},l.handleChange=l.handleChange.bind((0,i.Z)(l)),l}return(0,l.Z)(s,[{key:"handleValidation",value:function(){var e=this.state.fields,a={},s=!0;if(e.Name||(s=!1,a.Name="Enter full name"),e.Email||(s=!1,a.Email="Enter valid email"),"undefined"!==typeof e.Email){var i=e.Email.lastIndexOf("@"),t=e.Email.lastIndexOf(".");i<t&&i>0&&-1==e.Email.indexOf("@@")&&t>2&&e.Email.length-t>2||(s=!1,a.Email="Email is not valid")}return e.Mobile_Number||(s=!1,a.Mobile_Number="Enter Mobile Number"),e.Mobile_Number.length>11&&(s=!1,a.Mobile_Number="Enter Mobile Number in 10 digits"),e.Mobile_Number.length<10&&(s=!1,a.Mobile_Number="Enter Mobile Number in 10 digits"),""===grecaptcha.getResponse()&&(s=!1,a.Recaptcha="Please verify that you are human"),this.setState({errors:a}),s}},{key:"contactSubmit",value:function(e){e.preventDefault(),this.handleValidation()&&(h()({method:"post",url:"https://backend.waaree.com/api/contacts",headers:{Authorization:"Bearer e9649faaa3e89a8807bac18f18940576911102cd40ab4d5a78fc7d4343899aa2125fd089a8a3fc56266d8b087f5aa37c9b9a3bda405fd332d32f3fa4672964bdd731cecd3a8352372fa291b83b40244e43bf62c2f6bc77e9d50acc3364e18ff66ff8a1d048cc15cd3518b9aff9eca8211834c9e553faecbfd80b98668d46390d"},data:{data:{Name:this.state.fields.Name,Email:this.state.fields.Email,Mobile_Number:this.state.fields.Mobile_Number,Message:this.state.fields.Message}}}),document.querySelector(".get-quote-success").style.display="block",setTimeout((function(){document.querySelector(".get-quote-success").style.display="none"}),2e3),this.state.fields.Name="",this.state.fields.Mobile_Number="",this.state.fields.Email="",this.state.fields.Message="",grecaptcha.reset())}},{key:"handleChange",value:function(e,a){this.state.fields[e]=a.target.value,this.setState({fields:this.state.fields})}},{key:"render",value:function(){return(0,c.jsxs)("section",{className:"contact-banner",children:[(0,c.jsx)("div",{className:"mt-5 md-2 alert alert-success get-quote-success",role:"alert",style:{display:"none"},children:"Thank you for getting in touch!"}),(0,c.jsx)("form",{id:"ContactForm",onSubmit:this.contactSubmit.bind(this),children:(0,c.jsx)("div",{className:"form-inner",children:(0,c.jsxs)(u.Z,{className:"form-row",children:[(0,c.jsx)(f.Z,{xl:6,children:(0,c.jsx)("div",{className:"form-col",children:(0,c.jsxs)("div",{className:"form-inner-row row",children:[(0,c.jsx)(f.Z,{md:"6",className:"form-inner-col reveal-fade",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("input",{type:"text",name:"name",id:"Name",placeholder:"Name",onChange:this.handleChange.bind(this,"Name"),value:this.state.fields.Name}),(0,c.jsx)("span",{className:"icon-wrap",children:(0,c.jsx)("i",{className:"fas fa-user"})}),(0,c.jsx)("span",{className:"error-msg",children:this.state.errors.Name})]})},"Name"),(0,c.jsx)(f.Z,{md:"6",className:"form-inner-col reveal-fade",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("input",{type:"number",name:"mobileNumber",id:"mobileNumber",placeholder:"Mobile Number",onChange:this.handleChange.bind(this,"Mobile_Number"),value:this.state.fields.Mobile_Number}),(0,c.jsx)("span",{className:"icon-wrap",children:(0,c.jsx)("i",{className:"fas fa-mobile-alt"})}),(0,c.jsx)("span",{className:"error-msg",children:this.state.errors.Mobile_Number})]})},"mobileNumber"),(0,c.jsx)(f.Z,{md:"12",className:"form-inner-col reveal-fade",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("input",{type:"email",name:"Email",id:"Email",placeholder:"Email",onChange:this.handleChange.bind(this,"Email"),value:this.state.fields.Email}),(0,c.jsx)("span",{className:"icon-wrap",children:(0,c.jsx)("i",{className:"far fa-envelope"})}),(0,c.jsx)("span",{className:"error-msg",children:this.state.errors.Email})]})},"Email")]})})}),(0,c.jsx)(f.Z,{xl:6,className:"textarea-col",children:(0,c.jsx)("div",{className:"form-col reveal-fade",children:(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("textarea",{placeholder:"Message",onChange:this.handleChange.bind(this,"Message"),value:this.state.fields.Message}),(0,c.jsx)("span",{className:"icon-wrap",children:(0,c.jsx)("i",{className:"far fa-envelope"})})]})})}),(0,c.jsx)(f.Z,{sm:12,className:"text-center recaptcha-col reveal-fade",children:(0,c.jsxs)("div",{className:"g-recaptcha",id:"rcaptcha","data-sitekey":"site key",children:[(0,c.jsx)(d.Z,{className:"recaptcha",sitekey:"6LcW77EgAAAAABesPFrMHF7v1vust5ajvYEM9Xpa"}),(0,c.jsx)("span",{className:"error-msg",children:this.state.errors.Recaptcha})]})}),(0,c.jsx)(f.Z,{sm:12,className:"btn-wrap text-center reveal-fade",children:(0,c.jsx)("div",{className:"submit-group",children:(0,c.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Send Enquiry"})})})]})})})]})}}]),s}(m.Component)}}]);