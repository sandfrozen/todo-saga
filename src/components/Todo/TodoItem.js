import React from "react"
import { connect } from "react-redux"
import { changeTodo, removeTodo } from "../../actions/todo"
import { FaCheckCircle, FaTimes } from "react-icons/fa"
import styled from "styled-components"

const Todo = styled.div`
  position: relative;
  display: block;
  padding: 1rem 0;
  border-top: 1px solid #8d9196;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    border-bottom: 1px solid #8d9196;
  }
`

const CheckIcon = styled(FaCheckCircle)`
  position: relative;
  top: 3px;
  margin-right: 1rem;
  cursor: pointer;

  color: ${props => (props.completed ? "green" : "gray")};

  &:hover {
    fill: lightgreen;
  }
`

const RemoveIcon = styled(FaTimes)`
  position: absolute;
  top: 38%;
  right: 0;
  cursor: pointer;
  color: gray;

  &:hover {
    fill: darkred;
  }
`

const TodoTitle = styled.p`
  display: inline;
  color: white;
  font-size: 1.2rem;

  color: ${props => (props.completed ? "green" : "white")};
  text-decoration: ${props => (props.completed ? "line-through" : "none")};

  &:hover {
    color: ${props => (props.completed ? "green" : "lightgreen")};
  }
`

let TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <Todo
      key={todo.id}
      onClick={() => (!todo.completed ? changeTodo(todo) : undefined)}
    >
      <CheckIcon completed={todo.completed} />
      <TodoTitle completed={todo.completed}> {todo.title} </TodoTitle>
      {todo.completed ? (
        <RemoveIcon onClick={() => removeTodo(todo.id)}> remove</RemoveIcon>
      ) : null}
    </Todo>
  )
}

const mapDispatchToProps = {
  changeTodo: changeTodo,
  removeTodo: removeTodo
}

TodoItem = connect(
  null,
  mapDispatchToProps
)(TodoItem)

export default TodoItem
