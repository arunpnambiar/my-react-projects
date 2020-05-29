import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';

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
          <CardList user={this.state.user}/>
        </div>
      );
  }
}


