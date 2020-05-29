import React,{Component} from 'react';
import './App.css';

export default class App extends Component{
  constructor(){
    super()
    this.state ={
      user:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(response=>this.setState({user:response}))
  }
  render(){
      return (
        <div className="App">
          {
            this.state.user.map(data=> <h1>{data.name}</h1>)
          }
        </div>
      );
  }
}


