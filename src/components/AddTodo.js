import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from "prop-types"

export default class AddTodo extends Component {
  handleKeyUp(e){
    let content = e.target.value.trim();
    if (!content) return;
    if (e.keyCode === 13){
      this.props.addTodo({content,complete:false})
      e.target.value = ""
    }

  }
  render() {
    return (
        <header className="header">
        <h1>todos</h1>
        <input type="text" placeholder="what need to be done?" className="new-todo" 
        onKeyUp = {this.handleKeyUp.bind(this)}/>
        
        </header>
    )
  }
}
