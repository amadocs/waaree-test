import React from 'react';
import Link from "next/link";
import _ from 'lodash'
export default class PrivacyPolicyPopup extends React.Component {
  constructor(props){
    super(props)
    this.state ={
        // cookie: '',
            cookieSet: false
        }
    }

      
    componentDidMount(){

      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
        var aiCookie = getCookie("waaree");
        if (aiCookie != "") {
           this.setState({cookieSet: true})
        } else {         
        }

    }

  
    setCookieWaaree = () => {
      $(".alert").alert('close');
      //set cookie
      var cname = "waaree"
      var cvalue = "Waaree";
      var exdays = 7;
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires;
      this.setState({cookieSet: true})
  
      }
  render(){
          if(this.state.cookieSet == true){
            return(
                <> <div></div> </>
            )
      }

          else{

           
          return(
            <>
            {this.props.cookie.length !==0 &&    
              <div className={`cookie-policy-wrap`} id="cookiePolicy">
          <div className="container">
            <div className="row cookie-row">
                <div className="col-lg-7 cookie-text">
                <p>{this.props.cookie?.attributes?.Cookie_Policy}</p>
                </div>
                <div className="col-lg-5 cookie-btn">
                <Link href="/privacy-policy" prefetch={false} ><a className="btn">Cookie Policy.</a></Link>
                    <a href="#" className="btn btn-primary" id="cookieAcceptBtn" data-dismiss="alert" aria-label="Close" >Accept & Close</a>
                </div>
            </div>
          </div>
          </div>
         
        }
        </>
          )
          }
  }
}








// const PrivacyPolicyPopup = () => {


//     const [PrivacyPopupShow, setPrivacyPopupShow] = useState('show');
  
//     const [cookieSet , setcookieSet] = useState(false)
//     const [data, setData] = useState([]);
//     useEffect(async () => {
//     fetch(process.env.NEXT_PUBLIC_API_URL + 'web-setting'
//           ,{
//             headers:{
//               'Authorization' : process.env.NEXT_PUBLIC_API_token
//           }      
//           }
//           )
//           .then(Res => Res.json())
//           .then(message => setData(message.data) );
//             },[]);


//             function getCookie(cname) {
//                 var name = cname + "=";
//                 var decodedCookie = decodeURIComponent(document.cookie);
//                 var ca = decodedCookie.split(';');
//                 for(var i = 0; i <ca.length; i++) {
//                   var c = ca[i];
//                   while (c.charAt(0) == ' ') {
//                     c = c.substring(1);
//                   }
//                   if (c.indexOf(name) == 0) {
//                     return c.substring(name.length, c.length);
//                   }
//                 }
//                 return "";
//               }
//                 // var aiCookie = getCookie("ai");
//                 // if (aiCookie != "") {
//                 //    this.setState({cookieSet: true})
//                 // } else {         
//                 // }

                
//             const handleClose = () => {

//                 var cookieSet = document.getElementById('cookieAcceptBtn')
//                 setcookieSet(true)
//                 //set cookie
//                 // var cname = "ai"
//                 // var cvalue = "AI";
//                 // var exdays = 7;
//                 // var d = new Date();
//                 // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//                 // var expires = "expires="+d.toUTCString();
//                 // document.cookie = cname + "=" + cvalue + ";" + expires;
               
//             }
//             // setPrivacyPopupShow({moreMenuShow:''});
  
// }

// export default PrivacyPolicyPopup;