import logo from './logo.svg';
import './App.css';
import todos from './todos.json';
import React, { Component } from 'react';
import TodoForm from './components/TodoForm';

class App extends Component {
  // Como react muestra los datos traidos? -> almacenandolos temporalmente en memoria
  constructor() {
    super();
    this.state = {
      todos: todos.todos
    };
  }
  
  render() {
    const todosCard = this.state.todos.map((todo, i) => {
      return (
        <div className='col-md-4'>
          <div key={i} className='card mt-4'>
            <div className='card-header'>
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill text-bg-danger ml-2">
                {todo.priority}
              </span>
            </div>          
            <div className='card-body'>
              <p>{todo.description}</p>
              <p><strong>{todo.responsible}</strong></p>
            </div>          
          </div>
        </div>        
      )
    })
    
    return (
      <div className="App">
        <nav className='navbar navbar-dark bg-dark'>
          <a href='' className='text-white ms-3'>
            Tareas
            <span className='badge rounded-pill text-bg-light ms-2'>
              { this.state.todos.length }
            </span>
          </a>
        </nav>         

        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-3'>
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm />
            </div>
            <div className='col-md-9'>
              <div className='row'>
                { todosCard }
              </div>
            </div>            
          </div>
        </div>  
      </div>
    );
  }  
}

export default App;
