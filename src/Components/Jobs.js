import React, {useState} from "react";
import '../index.css';



const Jobs1 = ({list}) => {
    return (
        <ul>
            {list.map(item => (<li key={item}>{item}</li>))}
        </ul>
    )
}

const Jobs = (props) => {
    return (
        <div className='job'>
            <h1>Jobs</h1>
            <p>pick up: {props.pickUp} </p>
            <p>drop-off: {props.dropOff} </p>  
            <p>Pay: ${props.pay}</p>
        </div>
    )
}


export default Jobs;
