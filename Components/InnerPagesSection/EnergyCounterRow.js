import React from 'react';
import _ from 'lodash'
import {useEffect } from "react";
import dynamic from 'next/dynamic'
const CounterAnimation = dynamic(() =>  import('../CounterAnimation'))

const EnergyCounterRow = () => {

    useEffect(() => {
        CounterAnimation();
    });

    return (
        <>
            {EnergyCounterRowData.map((val) =>
                <div className="energy-counter-single reveal-fade stagger-animation">
                    <div className="counter-inner">
                        <h4 className="counter-title">
                            <span className="coun-anim">{val.counterNumber}</span> <span>{val.counterText}<sub>{val.subText}</sub></span>
                        </h4>
                        <span>{val.counterSubText}</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default EnergyCounterRow;