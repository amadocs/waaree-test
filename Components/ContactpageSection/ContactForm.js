import _ from 'lodash'
import React, { Component } from 'react';
import Recaptcha from "react-google-recaptcha"
import axios from "axios"
import {Row, Col } from 'react-bootstrap';


export default class contactForm extends Component{
    constructor(props){
        super(props)
        this.state ={
          contact_us:[],
          page:[],
          fields: {
            Name: '',
            Mobile_Number: '',
            Email: '',
            Message: '',    
          },
          errors: {},
        };
        this.handleChange= this.handleChange.bind(this);
      }

      handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Name
        if (!fields["Name"]) {
          formIsValid = false;
          errors["Name"] = "Enter full name";
        }
      
      
        //Email
        if (!fields["Email"]) {
          formIsValid = false;
          errors["Email"] = "Enter valid email";
        }
      
        if (typeof fields["Email"] !== "undefined") {
          let lastAtPos = fields["Email"].lastIndexOf("@");
          let lastDotPos = fields["Email"].lastIndexOf(".");
      
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              fields["Email"].indexOf("@@") == -1 &&
              lastDotPos > 2 &&
              fields["Email"].length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            errors["Email"] = "Email is not valid";
           
          }
        }

        // Mobile Number
        if (!fields["Mobile_Number"]) {
          formIsValid = false;
          errors["Mobile_Number"] = "Enter Mobile Number";
        }

        if(fields["Mobile_Number"].length > 11){
          formIsValid = false;
          errors["Mobile_Number"] = "Enter Mobile Number in 10 digits";
        }

        if(fields["Mobile_Number"].length < 10){
          formIsValid = false;
          errors["Mobile_Number"] = "Enter Mobile Number in 10 digits";
        }
        
        //Recaptcha
        if(grecaptcha.getResponse() === '')
        {
          
          formIsValid = false;
          errors["Recaptcha"] = "Please verify that you are human"
      

        }

        this.setState({ errors: errors });
        return formIsValid;
      }
      contactSubmit(e) 
      {
        e.preventDefault();
        if(this.handleValidation()){
          axios({
            method: 'post',
            url: process.env.NEXT_PUBLIC_API_URL + "contacts",
            headers:{    
              
              'Authorization' : process.env.NEXT_PUBLIC_API_token
          },
          data:{
            "data":{
              Name: this.state.fields.Name,
              Email: this.state.fields.Email,
              Mobile_Number: this.state.fields.Mobile_Number,
              Message: this.state.fields.Message
            }
          } 
             })
             document.querySelector('.get-quote-success').style.display = "block";
             setTimeout(function(){
              document.querySelector('.get-quote-success').style.display = "none";
             }, 2000)
             this.state.fields["Name"] = ''
             this.state.fields["Mobile_Number"] = ''
             this.state.fields["Email"] = ''
             this.state.fields["Message"] = ''
             grecaptcha.reset();
        }
       
      }     

      handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;  

        this.setState({ fields : this.state.fields});
      }

    render(){
          return(
            <section  className="contact-banner">

                   <div className="mt-5 md-2 alert alert-success get-quote-success" role="alert" style={{display:"none"}}>
                  Thank you for getting in touch!
                  </div>
            <form id="ContactForm"  onSubmit={this.contactSubmit.bind(this)}>

            <div className="form-inner">
                <Row className="form-row">
                    <Col xl={6}>
                        <div className="form-col">
                            <div className="form-inner-row row">
                            <Col md="6" className="form-inner-col reveal-fade" key="Name">
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    name="name"
                                    id="Name"
                                    placeholder="Name" 
                                    onChange={this.handleChange.bind(this, "Name")}
                                    value={this.state.fields["Name"]}  />
                                        <span className="icon-wrap"><i className="fas fa-user"></i></span>
                                        <span className="error-msg">{this.state.errors["Name"]}</span>
                                </div>
                            </Col>

                            <Col md="6" className="form-inner-col reveal-fade" key="mobileNumber">
                                <div className="form-group">
                                    <input 
                                    type="number" 
                                    name="mobileNumber"
                                    id="mobileNumber"
                                    placeholder="Mobile Number"  
                                    onChange={this.handleChange.bind(this, "Mobile_Number")}
                                    value={this.state.fields["Mobile_Number"]}  />
                                        <span className="icon-wrap"><i className="fas fa-mobile-alt"></i></span>
                                        <span className="error-msg">{this.state.errors["Mobile_Number"]}</span>
                                       
                                </div>
                            </Col>

                            <Col md="12" className="form-inner-col reveal-fade" key="Email">
                                <div className="form-group">
                                    <input 
                                    type="email" 
                                    name="Email"
                                    id="Email"
                                    placeholder="Email" 
                                    onChange={this.handleChange.bind(this, "Email")}
                                    value={this.state.fields["Email"]} />
                                        <span className="icon-wrap"><i className="far fa-envelope"></i></span>
                                        <span className="error-msg">{this.state.errors["Email"]}</span>
                                </div>
                            </Col>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className="textarea-col">
                        <div className="form-col reveal-fade">
                            <div className="form-group">
                                <textarea placeholder="Message" 
                                  onChange={this.handleChange.bind(this, "Message")}
                                  value={this.state.fields["Message"]}></textarea>
                                <span className="icon-wrap"><i className="far fa-envelope"></i></span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} className="text-center recaptcha-col reveal-fade">
                        <div className="g-recaptcha" id="rcaptcha" data-sitekey="site key">
                        <Recaptcha
                         
                         className="recaptcha"
                          sitekey="6LcW77EgAAAAABesPFrMHF7v1vust5ajvYEM9Xpa"  
                        
                     />
                         <span className="error-msg">{this.state.errors["Recaptcha"]}</span>
                        </div>

                       
                    </Col>
                    <Col sm={12} className="btn-wrap text-center reveal-fade">
                        <div className="submit-group">
                            <input type="submit" className="btn btn-primary" value="Send Enquiry" />
                        </div>
                    </Col>
                </Row>
   
            </div>
        </form>
            </section>
       

        )
    }
}
