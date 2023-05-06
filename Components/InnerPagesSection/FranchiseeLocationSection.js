import React,{ useState,useEffect }  from 'react';
import _ from 'lodash'
import { Container, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
const FranchiseeLocationColSingle = dynamic(() =>  import( './FranchiseeLocationColSingle'))

const FranchiseeLocationSection = (props) => {

    const [City, setCity] = useState([]);
    const [States, setStates] = useState([]);
    const [FranchiseeLocation, setFranchiseeLocation]  = useState([]);
    const [ShowCity,setShowCity] = useState([])
    
    useEffect(async () => {
        setCity(props.Partner_City_Data)
        setShowCity(props.Partner_City_Data)
        setStates(props.Partner_State_Data)
        setFranchiseeLocation(props.Partner_Location) 
         setSentData(props.Partner_Location)
      },[]);  



      const [value,setValue]=useState('');
      const [data,setData]=useState('');
      const [sentData, setSentData] = useState([]);

      //city
      const handleSelect=(e)=>{

        setValue(e.target.value)
        let temp = FranchiseeLocation.filter((location, index) => {
          if (location?.attributes?.franchisee_location_city?.data?.attributes?.Franchisee_Location_City_Name == e.target.value) {
            return location
          }

        
        })
        setSentData(temp)
      }


      //state
      const handleChange=(e)=>{
        setData(e.target.value);
        // setValue("Select City")
        let temp = FranchiseeLocation.filter((location, index) => {
          if (location?.attributes?.franchisee_location_city?.data?.attributes?.franchisee_location_state?.data?.attributes?.State_Name == e.target.value) {
            return location
          }

        
        })
        setSentData(temp)
        let temp_2 = City.filter((city)=>{
          if (city?.attributes?.franchisee_location_state?.data?.attributes?.State_Name == e.target.value) {
            return city
          }
        })
        setShowCity(temp_2)
        check()
      }
     

      function check(){
        if(document.getElementById('stateselect').value!='')
          document.getElementById('cityselect').disabled=false;
          
        else
          document.getElementById('cityselect').disabled=true;
      }

    return (
        <section className="section franchisee-location-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Franchisee Location" titleTheme="dark-title" />
                        <Row className='franchisee-loc-row'>
                            <Col lg={4} md={6} className="location-dropdown-col">
                                <div className='col-inner'>                                
                                <div className="custom-dropdown-wrapper reveal-fade">
                                <select  id="stateselect" 
                                onChange={handleChange}                             
                                >
                                <option>Select State</option>
                                {
                                    
                                    States.map((val) =>{
                                       return(
                                            <option key={val.id}>{val?.attributes?.State_Name}</option>
                                       )
                                    })
                                }
                                </select>
                                </div>                                
                                <div className="custom-dropdown-wrapper reveal-fade">
                                <select disabled id="cityselect"                                                    
                                onChange= {handleSelect} >
                                <option>Select City</option>
                                
                                {
                                   ShowCity.map((el) => {
                                       return(
                                        <option key={el.id}>{el?.attributes?.Franchisee_Location_City_Name}</option>
                                       )                                       
                                   })                                  
                                }
                                  </select>
                                </div>

                   <div className='location-info-wrapper reveal-fade'>    
                                     
                                     
                                      <div className='franchisee-location'>
                                          {
                                              FranchiseeLocation.map((val)=>{
                                                  if(value === "" & val?.attributes?.franchisee_location_city?.data?.attributes?.franchisee_location_state?.data?.attributes?.State_Name === data){
                                                          return(                                                         
                                                                  <FranchiseeLocationColSingle 
                                                                  key={val.id}
                                                                  locationTitle={val?.attributes?.Franchisee_Location_Name} 
                                                                  locationAddress={val?.attributes?.Franchisee_Location_Address} 
                                                                  mobileNumber={val?.attributes?.Franchisee_Location_Contact_Number} 
                                                                  emailId={val?.attributes?.Franchisee_Location_Email}   />
                                                              )
                                                  
                                                     
                                                  }
                                                  else if(val?.attributes?.franchisee_location_city?.data?.attributes?.Franchisee_Location_City_Name === value){

                                                    return(
                                                            
                                                      <FranchiseeLocationColSingle 
                                                      key={val.id}
                                                      locationTitle={val?.attributes?.Franchisee_Location_Name} 
                                                      locationAddress={val?.attributes?.Franchisee_Location_Address} 
                                                      mobileNumber={val?.attributes?.Franchisee_Location_Contact_Number} 
                                                      emailId={val?.attributes?.Franchisee_Location_Email}   />                                            
                                                  )                                                
                                                  }                                             
                                              })
                                          }   
                                             </div>                                        
                                             </div>                                                                              
                                    </div>
                               
                            </Col>
                            <Col lg={8} md={6} className="map-col reveal-fade">
                                <div className="col-inner">

                                <iframe title="Google Map" classname="ifframe" src="https://www.google.com/maps/d/embed?mid=1xUGDFcBBJ3SxR5b5qRTZiPmTqdG4k2g&ehbc=2E312F" width="640" height="600"></iframe>
                                </div>
                            </Col>
                        </Row>
                   </div>
                </Container>
            </div>
        </section>
    )
}
export default FranchiseeLocationSection;
