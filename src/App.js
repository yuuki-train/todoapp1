import React, { Component } from 'react';
import TodoList from './TodoList';
import './css/App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: [
        {
          id: 1,
          tytle: "Hello, React!",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          tytle: "Hello, Redux!",
          desc: "Reduxも始めました",
          done: false
        },
      ]
    }
  }
  render(){
    return(
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <TodoList 
          todos ={this.state.todos}
          />
      </div>
    );
  }
}

export default App;
