import { useState } from 'react';
import _ from 'lodash'
import { decode } from 'html-entities';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }
  
    const isFormValidated = onValidated({ EMAIL: email });

    
 
    // On success return true
    setTimeout(()=>{
      var text = document.getElementById('newsletterEmail');
      text.value = '';


      if(document.getElementById('mymessage').innerHTML != null){
        document.getElementById('mymessage').innerHTML = ''
      }
 
    },2000)

      return email && email.indexOf("@") > -1 && isFormValidated ;
    
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }

  }
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     
     return decode(message);
    }

    const formattedMessage = result?.[1]?.trim() ?? null;
     return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="form-wrap reveal-fade">
  
        <h4 className="newsletter-title">Signup to our newsletter</h4>
        <div className="form-group">
        <div className="input-wrap">
            <input
             type="email" id="newsletterEmail" name="email" placeholder="Your Email Address" 
             onChange={(event) => setEmail(event?.target?.value ?? '')}
             onKeyUp={(event) => handleInputKeyEvent(event)}
             />
                    {status === "sending" && <div className='error-msg'>Sending...</div>}
                {status === "error" || error ? (
                  <div className='error-msg'
                    dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
                  />
                ) : null }
                {status === "success" && status !== "error" && !error && (
                  <div className='error-msg' id="mymessage" dangerouslySetInnerHTML={{ __html: decode(message) }} />
                )}
        </div>
        <div className="subscribe-btn">
                 <button className="btn btn-primary" onClick={handleFormSubmit}>Subscribe<i className="far fa-bell"></i></button>
            </div>
    </div>  
      </div>
    </>
  );
}

export default NewsletterForm