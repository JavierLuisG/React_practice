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
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }
  
  handleRemoveTodo(index) {
    if (window.confirm('Are you sure you want to delete if?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }    
  }

  render() {
    const todosCard = this.state.todos.map((todo, i) => {
      return (
        <div className='col-md-4'>
          <div key={i} className='card mt-4'>
            <div className='card-header'>
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill text-bg-primary ml-2">
                {todo.priority}
              </span>
            </div>          
            <div className='card-body'>
              <p>{todo.description}</p>
              <p><strong>{todo.responsible}</strong></p>
            </div>   
            <div className='card-footer'>
              <button className='btn btn-danger' onClick={this.handleRemoveTodo.bind(this, i)}>
                Delete
              </button>              
            </div>       
          </div>
        </div>        
      )
    })
    
    return (
      <div className="App">
        <nav className='navbar navbar-dark bg-dark'>
          <a href='' className='text-white ms-3'>
            Task
            <span className='badge rounded-pill text-bg-light ms-2'>
              { this.state.todos.length }
            </span>
          </a>
        </nav>         

        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-3'>
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
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
