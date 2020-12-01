import React, {useState} from "react";
import Jobs from './Jobs.js';
import '../index.css';
import firebase from 'firebase/app';
import { getAllByDisplayValue, getSuggestedQuery } from "@testing-library/react";

var jobs = ['job 1','job 2','job 3'];




const JobList = () => {
    const printdata = (event) => {
        alert('printing data');
    }

    return (
        <button onClick={(event)=>{printdata(event)}}>JobList</button>
    )
}



export default JobList;