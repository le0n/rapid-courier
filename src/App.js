import './App.css';
import 'firebase/firestore';
import 'firebase/auth';
import React from 'react';
import SignIn from './Components/SignIn';
import JobList from './Components/JobList';
import {Route, Switch} from 'react-router-dom';



const App = () => {
  return (
    <main className='main'>
      <Switch>
        <Route path='/' component={SignIn} exact />
        <Route path='/jobs' component={JobList} />
      </Switch>
    </main>
  )
}

export default App;
