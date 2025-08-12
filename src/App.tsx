import React from 'react';
import './App.css';
import {Props} from './dataschema/props';
import MessageParentComponent from './components/messagecomponent';
function App(props: Props) {
  return (
    <div className="App">
      <h1>{props.info}</h1>
      <br/>
      <MessageParentComponent />
    </div>
  );
}

export default App;
