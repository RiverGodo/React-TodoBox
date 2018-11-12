import React, { Component } from 'react'
import Todo from "./Todo"
import proptypes from "prop-types"
export default class TodoList extends Component {
  render() {
    return (
        <section className="main">
        <input type="checkbox" className="toggle-all"
        onChange= {e=>this.props.toggleAll(e.target.checked)}
        />
        <ul className="todo-list">
            {this.props.todos.map((todo,index)=>
              <Todo todo={todo} key={index} deleteTodo = {this.props.deleteTodo} 
              toggleTodo = {this.props.toggleTodo}
              updateTodo = {this.props.updateTodo}
              />
            )
            }
        </ul>
        </section>
    )
  }
}

TodoList.prototypes = {
  todo:proptypes.array.isRequired,
  deleteTodo:proptypes.func.isRequired,
  toggleTodo:proptypes.func.isRequired,
  toggleAll:proptypes.func.isRequired,
  updateTodo:proptypes.func.isRequired,

}
