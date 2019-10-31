import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calendar from './components/Calendar';
import Editor from './components/Editor';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render = { () => {
            return (
            <Calendar>
              
            </Calendar>
            );
          }}
          />

          <Route path="/editor/:id" render = {(routerProps) => {
            return (
            <Editor>
              
            </Editor>

            );
          }}
          />
         
        </Switch>
        

        



       
      </div>
    );
  }
}

export default App;
