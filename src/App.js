import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CreateEventScreen from './Screens/CreateEventScreen';
import SuccessScreen from './Screens/SuccessScreen';
import './App.css';

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/login" component={CreateEventScreen}/>
            <Route path="/success" component={SuccessScreen}/>
        </Switch> 
      </Router> 
  );
}

export default App;
