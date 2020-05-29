import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state ={
      'message':"Welcome to react world"
    }
  }
  render(){
      return (
        <div className="App">
          <h1>{this.state.message}</h1>
        </div>
      );
  }
}

export default App;
