
import { Component } from 'react';
import Todos from './Todo';
import AddTodo from './AddTodo';

class App extends Component {

  state={
    todo:[
      {id:1,content:'buy some milk'},
      {id:2,content:'buy some oth'}
    ]
  }

  deleteTodo = (id) =>{
    console.log(id);
    const todos= this.state.todo.filter(todo =>{
      return todo.id!==id;
    });
    this.setState({
      todo:todos
    })
  }

  addTodo = (todos) =>{
    todos.id = Math.random();
    let todose =[...this.state.todo,todos];
    this.setState({
      todo:todose
    })
}

  render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todo={this.state.todo} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
  }
}

export default App;
