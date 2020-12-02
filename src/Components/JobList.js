import React, {Component, useState, useEffect} from "react";
import '../index.css';
import firebase from 'firebase/app';



const fetchData = async () => {
    var collectionRef = firebase.firestore().collection('jobs');
    const  querySnapshot = await collectionRef.get();
    return querySnapshot.docs.map(doc => [doc.id, doc.data()]); //returns a promise
}


const JobList = () => {
    const [jobArray, setJobArray] = useState([]); //stores the array of jobs
    const [jobNumber, setJobNumber] =useState(100); //stores the number of 
    
    const acceptJob = (event) => {
        var jobId = event.currentTarget.value;
        firebase.firestore().collection('jobs').doc(jobId).delete().then(() => {
            console.log('deleted Job ID '+jobId);
            setJobNumber(jobNumber - 1);
            console.log(jobNumber);
        }).catch((error) => {
            console.log('Error deleting document :'+error);
        });
    }
    
    const executeFetchData = async () => {
        let data = await fetchData();
        setJobArray(data); //sets jobArray to the fetched array
    }


    useEffect(() => {
        executeFetchData();
    }, [jobNumber]); //useEffect only triggers if jobNumber changes
    return (
        <ul className='job-list'>
            {jobArray.map(job => (<li className='list-items' key={job[0]}>
                <div>
                    <h3>Job</h3>
                    <p>Pickup from {job[1].pickUp}</p>
                    <p>Drop-off at {job[1].dropOff}</p>
                    <p>Pays ${job[1].pay}</p>
                    <button key={job[0]} value={job[0]} onClick={(
                        event => acceptJob(event))}>Accept</button>
                </div>
                </li>))}
        </ul>
    )
}


export default JobList;