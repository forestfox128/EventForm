import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CreateEventScreen from './Screens/CreateEventScreen';
import SuccessScreen from './Screens/SuccessScreen';
import Toolbar from './Components/Toolbar/Toolbar';


function App() {
  return (
    <div>
        <Toolbar headerText={"New event"} />
        <Router>
          <Switch>
            <Route path="/login" component={CreateEventScreen} />
            <Route path="/success" component={SuccessScreen} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
