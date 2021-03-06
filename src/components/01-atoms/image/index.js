import React from "react"
import styled from "styled-components"

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image = (props) => <StyledImage {...props}></StyledImage>

export default Image
