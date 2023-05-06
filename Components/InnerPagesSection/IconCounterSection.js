import React, { Component } from 'react';
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import CounterAnimation from '../CounterAnimation';
import IconCounterSingle from './IconCounterSingle';

// import dynamic from 'next/dynamic'
// const SectionTitle = dynamic(() =>  import('../HomepageSection/SectionInnerComponent/SectionTitle'))
// const RoundSvgSectionTop = dynamic(() =>  import( './RoundSvgSectionTop'))
// const CounterAnimation = dynamic(() =>  import( '../CounterAnimation'))
// const IconCounterSingle = dynamic(() =>  import( './IconCounterSingle'))

export default class IconCounterSection extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            data: [],
         
         
        };
    }

    componentDidMount(){
        fetch(process.env.NEXT_PUBLIC_API_URL + 'webinar-page?populate=*'
        ,{
          headers:{
            'Authorization' :  process.env.NEXT_PUBLIC_API_token
        }    
        }
        )
        .then(Res => Res.json())
        .then(message =>this.setState({
            data: message.data,
        }) );
    }
    render(){
        const {data} = this.state

        return (
            <>
          
                <section className="section join-community-section" style={{backgroundColor:"#f0faf2"}}>
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <h2 className="section-title green-title text-center mb-80" dangerouslySetInnerHTML={{__html: data?.attributes?.Icon_Counter_Section_Title}}>
                                
                                </h2>
                                <Row className="counter-row p-inner-50">
                                <IconCounterSingle />                               
                                </Row>
                            </div>
                        </Container>
                        <RoundSvgSectionTop />
                    </div>
                </section>
            </>
        )
    }
   
}

