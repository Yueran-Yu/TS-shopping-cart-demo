import styled from 'styled-components'
import IconButton from "@material-ui/core/IconButton"

export const Wrapper = styled.div`
  margin: 70px 60px;
`

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 10px;
  height: 50px;
  width: 50px;
`

export const CloseBtn = styled(IconButton)`
  position: absolute;
  right: 10px;
  padding: 15px;
  margin-top: 10px;
  background-color: #dddde3;
`
