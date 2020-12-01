import React, {useState} from "react";
import Jobs from './Jobs.js';
import '../index.css';
import firebase from 'firebase/app';

var jobArray = [];

let fetchData = () => {
    firebase.firestore().collection('jobs').get().then((querySnapshot) => { //this is an async method hence then()
        querySnapshot.docs.forEach(doc => { //querySnapshot gives all data
            console.log(doc.data()); //doc.data() for actual data and doc.id for document id (for deletion)
            var job = {'pickUp':doc.data().pickUp, 'dropOff':doc.data().dropOff, 'pay':doc.data().pay};
            jobArray.push(job);
        })
    })
}

//https://firebase.google.com/docs/firestore/query-data/get-data#web_5
const JobList = () => {
    fetchData();
    return (
        <div>
            <Jobs pickUp='test1' dropOff='test2' pay='12.40' />
        </div>
      

    )
}



export default JobList;