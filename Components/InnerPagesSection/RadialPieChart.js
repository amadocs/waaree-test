import React, { Component } from 'react';
import _ from 'lodash'
import {CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import dynamic from 'next/dynamic'
const AnimatedProgressProvider   = dynamic(() =>  import('./progressAnimation/AnimatedProgressProvider'))

export default class RadialPieChart extends Component {

    constructor(props) {
        super(props);   
    }

    render(){
    return (
        <>
            <div className="radial-chart-wrapper">

                {this.props.data?.attributes?.Association_Chart.map((val) =>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={val?.Round_Percentage}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        key={val.id}
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren value={value} className="radial-chart-single">
                                    <div className="progressbar-inner">
                                        <span className="progressbar-text">{val?.Round_Text}</span>
                                        <h4>{`${roundedValue}%`}</h4>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                )}

            </div>


        </>

    )
     }
}

