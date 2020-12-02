import React, {Component, useState, useEffect} from "react";
import Jobs from './Jobs.js';
import '../index.css';
import firebase from 'firebase/app';


//https://firebase.google.com/docs/firestore/query-data/get-data#web_5

const fetchData = async () => {
    var collectionRef = firebase.firestore().collection('jobs');
    const  querySnapshot = await collectionRef.get();
    return querySnapshot.docs.map(doc => [doc.id, doc.data()]); //returns a promise
}
const JobList = () => {
    const [jobArray, setJobArray] = useState([]);
    
    const executeFetchData = async () => {
        let data = await fetchData();
        console.log(data);
    }
    

    //console.log(executeFetchData());
    //fetchData().then((data) => console.log(data));

    useEffect(() => {
        //fetchData().then((data) => console.log(data));
        //setJobArray(['0',{'pickup':'111 st Oxleyu'}]);
        console.log(executeFetchData());
    });
    return (
        <ul>
            {jobArray.map(job => (<li key={jobArray[0]}>{jobArray[1].pickUp}</li>))}
        </ul>
    )
}


export default JobList;