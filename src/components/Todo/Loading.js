import React from "react"
import { connect } from "react-redux"
import { FaSpinner } from "react-icons/fa"
import styled, { keyframes } from "styled-components"

const LoadingDiv = styled.div`
  color: gray;
  letter-spacing: 0.6em;
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const FaSpinnerAnimated = styled(FaSpinner)`
  animation: ${rotate} 1s linear infinite;
`

let Loading = ({ loading }) =>
  loading && (
    <LoadingDiv>
      Loading.. <FaSpinnerAnimated />
    </LoadingDiv>
  )

const mapStateToProps = state => ({
  loading: state.todo.loading
})

Loading = connect(
  mapStateToProps,
  null
)(Loading)

export default Loading
