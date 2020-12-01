import React, {useState} from "react";
import '../index.css';

const Jobs = ({pickUp, dropOff, pay}) => {
    return (
        <div>
            <h1>Job</h1>
            <div>
                <label>Pickup from {pickUp}</label>
            </div>
            <div>
                <label>Drop-off from {dropOff}</label>
            </div>
            <div>
                <label>Pays ${pay}</label>
            </div>
        </div>

    )
}


export default Jobs;
