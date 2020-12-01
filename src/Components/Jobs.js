import React, {useState} from "react";
import '../index.css';

const Jobs = ({list}) => {
    return (
        <ul>
            {list.map(item => (<li key={item}>{item}</li>))}
        </ul>
    )
}


export default Jobs;
