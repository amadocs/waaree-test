import React, { Component} from 'react';
import _ from 'lodash'
export default class ScrollToId extends Component{

    componentDidMount(){
        var scrollToIdDiv = document.querySelectorAll('.scrollToId');
        if (scrollToIdDiv.length) {
          [].forEach.call(scrollToIdDiv, function (item) {
      
            // console.log(item);
            item.onclick = function () {
      
              setTimeout(function () {
                if (item.hash !== "") {
                  var hash = item.hash;
                  var offsetTop = document.querySelector(hash);
                  offsetTop.scrollIntoView();
                }
              }, 800);
      
      
            }
          });
        }
        window.onload = () =>{
            setTimeout(function () {
                if (window.location.hash !== "") {
                  var hashInit = window.location.hash;
                  var offsetTopInit = document.querySelector(hashInit);
                  if(offsetTopInit.length){
                      offsetTopInit.scrollIntoView();
                  }
                 
                }
              }, 2000);
        }
  
    }

    
    render(){
        return(
            <></>
        )
    }


     
}

