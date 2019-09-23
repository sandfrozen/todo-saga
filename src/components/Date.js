import React from "react"
import styled from "styled-components"
var moment = require("moment")

const DateParagraph = styled.p`
  margin-bottom: 0.5rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
`

const Date = () => (
  <DateParagraph>{moment().format("dddd, MMMM Do YYYY")}</DateParagraph>
)

export default Date
