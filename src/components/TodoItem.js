import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { item } = this.props;
    let className = "TodoItem";
    if (item.isComplete) {
      className += " isComplete";
    }
    return (
      <div className={className}>
        <h2>{this.props.item.title}</h2>
      </div>
    );
  }
}

export default TodoItem;
