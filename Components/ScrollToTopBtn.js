import React from 'react';
import _ from 'lodash'
const ScrollToTopBtn = () =>{

    const InnerScrollToTop = () =>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; 
    }
    
    return(
      <div className="scroll-top-btn" id="scrolltoTopDiv">
          <a id="scrollToTop" onClick={InnerScrollToTop}><i className="fas fa-chevron-up"></i></a>
      </div>
    )
}

export default ScrollToTopBtn;