import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calendar from './components/Calendar';
import Editor from './components/Editor';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dates:'',
      mood:'',
      message:'',
      allMoods:[]
    }
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.getInfoDate = this.getInfoDate.bind(this);
    this.getInfoMood = this.getInfoMood.bind(this);
    this.getinfoMessage = this.getinfoMessage.bind(this);
  }

  componentDidMount(){

    const ls = JSON.parse(localStorage.getItem('lsMood'));
    if (ls !==null){
      this.setState({
        allMoods: ls
      })
    }
  }

  getInfoDate (event){
    const dateValue = event.currentTarget.value;
    this.setState({
      dates: dateValue
    })
  }

  getInfoMood (event){
    const moodValue = event.currentTarget.value;
    this.setState({
      mood: moodValue
    })
  }

  getinfoMessage (event) {
    const messageValue = event.currentTarget.value;
    this.setState({
      message: messageValue
    })
  }

  getLocalStorage (){
    localStorage.setItem('lsMood', JSON.stringify(this.state));
    this.setState(prevState => {
      const {date, mood, message} = this.state;
      return {
        allMoods: [date, mood, message]         
      };
    })
  }


  render() {
    const {getInfoDate, getInfoMood, getinfoMessage, date, mood, message, allMoods } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render = { () => {
            return (
            <Calendar
            allMoods = {allMoods}
            />
            );
          }}
          />

          <Route path="/editor/:id" render = {(routerProps) => {
            return (
              <Editor
              getInfoDate = {getInfoDate}
              getInfoMood = {getInfoMood}
              getinfoMessage = {getinfoMessage}
              getLocalStorage = {this.getLocalStorage}
            
              />

            );
          }}
          />
         
        </Switch>
        

        



       
      </div>
    );
  }
}

export default App;
