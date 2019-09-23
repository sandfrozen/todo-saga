import React, { useState } from "react"
import { connect } from "react-redux"
import { addTodo } from "../../actions/todo"
import styled from "styled-components"

const TodoFormContainer = styled.div`
  display: flex;
`

const TodoInput = styled.input`
  margin-right: 1rem;
  padding: 1rem 0 1rem 1rem;
  background-color: white;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  flex-grow: 1;
`

const AddButton = styled.button`
  padding: 1rem 1.5rem;
  color: white;
  background-color: #61dbfb;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
`

let TodoForm = ({ count, loading, addTodo }) => {
  const [title, setTitle] = useState("")

  function onClickAdd() {
    if (title !== "") {
      addTodo(title)
      setTitle("")
    }
  }

  if (count < 10) {
    return (
      <TodoFormContainer>
        <TodoInput
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="Enter todo title"
        />
        <AddButton disabled={loading} onClick={onClickAdd}>
          add
        </AddButton>
      </TodoFormContainer>
    )
  } else {
    return <div>You have 10 todo's. Remove any to add new one!</div>
  }
}

const mapStateToProps = state => ({
  count: state.todo.todos.length,
  loading: state.todo.loading
})

const mapDispatchToProps = {
  addTodo: addTodo
}

TodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)

export default TodoForm
