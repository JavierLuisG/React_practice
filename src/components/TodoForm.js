import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending the data...');
    }

    render() {
        return (
            <div className='card'>
                <form className='card-body' onSubmit={this.handleSubmit}>
                    <div className='form-group my-2'>
                        <input
                            type='text'
                            name='title'
                            onChange={this.handleInput}
                            className='form-control'
                            placeholder='Title'
                        />
                    </div>
                    <div className='form-group my-2'>
                        <input
                            type='text'
                            name='responsible'
                            className='form-control'
                            placeholder='Responsible'
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className='form-group my-2'>
                        <input
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Description'
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className='form-group my-2'>
                        <select name='priority' className='form-control'>
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary mt-3'>Save</button>
                </form>
            </div>
        )
    }   
}

export default TodoForm;