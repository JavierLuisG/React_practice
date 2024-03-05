import logo from './logo.svg';
import './App.css';
import todos from './todos.json';
import React, { Component } from 'react';

class App extends Component {
  // Como react muestra los datos traidos? -> almacenandolos temporalmente en memoria
  constructor() {
    super();
    this.state = {
      todos: todos.todos
    }
  }
  render() {
    const todosCard = this.state.todos.map((todo, i) => {
      return (
        <div key={i} className='card'>
          <div className='card-header'>
            <h3>{todo.title}</h3>
          </div>          
          <div className='card-body'>
            <p>{todo.description}</p>
          </div>          
        </div>        
      )
    })
    
    return (
      <div className="App">
        <nav className='navbar navbar-dark bg-dark'>
          <a href='' className='text-white'>
            Tareas
          </a>
        </nav>         
        {todosCard}       
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }  
}

export default App;
