import React, {useState} from "react";
import Jobs from './Jobs.js';
import '../index.css';
import firebase from 'firebase/app';
import { getAllByDisplayValue, getSuggestedQuery } from "@testing-library/react";

var jobs = ['job 1','job 2','job 3'];

var jobArray = [];


//https://firebase.google.com/docs/firestore/query-data/get-data#web_5
const JobList = () => {
    const printdata = (event) => {
        firebase.firestore().collection('jobs').get().then((querySnapshot) => { //this is an async method hence then()
            querySnapshot.docs.forEach(doc => { //querySnapshot gives all data
                console.log(doc.data()); //doc.data() for actual data and doc.id for document id (for deletion)
            })
        } )
    }

    return (
        <div>
            <button onClick={(event)=>{printdata(event)}}>Retrieve JobList</button>
            <Jobs pickUp='test1' dropOff='test2' pay='12.40' />
        </div>
      

    )
}



export default JobList;