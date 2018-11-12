import React, { Component } from 'react'
import Proptypes from "prop-types"
export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <span className="todo-count"><strong>{this.props.leftTodos}</strong> items left </span>
        <ul className="filters">
        <li><a href="javascript:;" onClick={()=>this.props.setVisibility("all")} className={this.props.visibility ==  "all" ? "selected" :""}>all</a></li>
        <li><a href="javascript:;" onClick={()=>this.props.setVisibility("active")} className={this.props.visibility ==  "active" ? "selected" :""} >active</a></li>
        <li><a href="javascript:;" onClick={()=>this.props.setVisibility("completed")} className={this.props.visibility ==  "completed" ? "selected" :""} >completed</a></li>
        </ul>
        {this.props.finishedTodos > 0 ? <button className="clear-completed" onClick={()=>this.props.clearCompleted()}>clear completed</button> : null}
        
        </footer>
    )
  }
}
Footer.prototypes = {
  leftTodos:Proptypes.number.isRequired,
  setVisibility:Proptypes.func.isRequired,
  visibility:Proptypes.string.isRequired,
  finishedTodos:Proptypes.number.isRequired,
  clearCompleted:Proptypes.func.isRequired,


}
