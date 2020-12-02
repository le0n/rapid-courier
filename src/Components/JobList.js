import React, {useState, useEffect} from "react";
import '../index.css';
import firebase from 'firebase/app';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Box from '@material-ui/core/Box';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



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
    
    const fetchData = async () => {
        var collectionRef = firebase.firestore().collection('jobs');
        const  querySnapshot = await collectionRef.get();
        return querySnapshot.docs.map(doc => [doc.id, doc.data()]); //returns a promise
    }

    
    
    useEffect(() => {
        const executeFetchData = async () => {
        let data = await fetchData();
        setJobArray(data); //sets jobArray to the fetched array
        }
        executeFetchData();
    }, [jobNumber]); //useEffect only triggers if jobNumber changes

    return (
        <Container>
            <AppBar position='static' style={{ background: '#e0e0e0'}}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    color: 'black'
                }}>
                    <ChevronRightIcon style={{fontSize:100}} display='inline'/>
                    <Typography variant='h2' component='h2' display='inline'>
                         Rapid Courier
                    </Typography>
                </div>
            </AppBar>
            <ul className='job-list'>
                {jobArray.map(job => (<li className='list-items' key={job[0]}>
                    <Card className='job-card'>
                        <CardContent>
                            <Box component='div' display='block'>
                                <Typography variant='h5' component='h2'>
                                    Job
                                </Typography>
                                <Box component='div' display='flex'>
                                    <ArrowUpwardIcon/>
                                    <Typography variant='body1' component='p'>
                                        Pickup from {job[1].pickUp}
                                    </Typography>
                                </Box>
                                <Box component='div' display='flex'>
                                    <ArrowDownwardIcon/>
                                    <Typography variant='body1' component='p'>
                                        Drop-off at {job[1].dropOff}
                                    </Typography>
                                </Box>
                                <Box component='div' display='flex'>
                                    <AttachMoneyIcon/>
                                    <Typography variant='body1' component='p'>
                                       Pays ${job[1].pay}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <Divider/>
                        <CardActions>
                            <Button 
                                key={job[0]} 
                                value={job[0]} 
                                onClick={(event => acceptJob(event))}>
                                    Accept</Button>
                        </CardActions>
                    </Card>
                    </li>))}
            </ul>
        </Container>
    )
}


export default JobList;