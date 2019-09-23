import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

const CounterParagraph = styled.p`
  color: #61dbfb;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

let TodoCounter = ({ activeTodos }) => (
  <CounterParagraph>Active todos: {activeTodos}</CounterParagraph>
)

const mapStateToProps = state => ({
  activeTodos: state.todo.todos.filter(t => t.completed === false).length
})

TodoCounter = connect(
  mapStateToProps,
  null
)(TodoCounter)

export default TodoCounter
