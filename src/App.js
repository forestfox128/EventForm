import React from 'react';
import CreateEventScreen from './Screens/CreateEventScreen';
import Toolbar from './Components/Toolbar/Toolbar';


function App() {
  return (
    <div>
        <Toolbar headerText={"New event"} />
        <CreateEventScreen />
    </div>
  );
}

export default App;
