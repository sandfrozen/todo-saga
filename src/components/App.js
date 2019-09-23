import React, { useEffect } from "react"
import TodoForm from "./Todo/TodoForm"
import TodoList from "./Todo/TodoList"
import TodoCounter from "./Todo/TodoCounter"
import Date from "./Date"
import Loading from "./Todo/Loading"
import styled from "styled-components"
import { getTodos } from "../actions/todo"
import { connect } from "react-redux"

const background = "#374B57"

const AppContainer = styled.div`
  min-width: 430px;
  max-width: 930px;
  min-height: 430px;
  padding: 4rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  background: ${background};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid #8d9196;
`

const Todos = styled.div`
  max-height: calc(100vh - 435px);
  overflow-y: scroll;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translate(-50%, -12px);
`

let App = ({ getTodos }) => {
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <AppContainer>
      <Header>
        <div>
          <div>
            <Date />
            <TodoCounter />
          </div>
          <TodoForm />
        </div>
      </Header>
      <Todos>
        <TodoList />
      </Todos>
      <Footer>
        <Loading />
      </Footer>
    </AppContainer>
  )
}

const mapDispatchToProps = {
  getTodos: getTodos
}

App = connect(
  null,
  mapDispatchToProps
)(App)

export default App
