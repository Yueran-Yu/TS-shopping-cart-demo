import styled from 'styled-components';
import Button from '@material-ui/core/Button'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  height: 100%;
  color: grey;
  box-shadow: rgb(29, 45, 50, 0.1) 0 4px 12px;

  img {
    max-height: 250px;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 1rem;
  }

  h3 {
    color: #3b3939;
  }
`

export const AddItemBtn = styled(Button)`
  border-radius: 0 0 20px 20px;
  font-family: "Arial Black", serif;
  color: #86550c;
  font-size: 0.8rem;
  line-height: 40px;
`

export const ColorContainer = styled.p<StyledHasColor>`
  min-height: ${({hasColor}) => hasColor ? '50px' : ''};
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
  padding: 0 10px;
  margin-top: 40px;
`

export const ColorText = styled.p<StyledHasColor>`
  font-family: "Andale Mono", sans-serif;
  color: #2b2b2b;
  font-size: 0.8rem;
  position: relative;
  display: ${({hasColor}) => hasColor ? "block" : "none"};

  &::after {
    content: '';
    height: 2px;
    width: 70%;
    bottom: -8px;
    position: absolute;
    left: 0;
    background-color: wheat;
  }
`
export const ColorBox = styled.span<StyledProductColor>`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 5px 6px 3px 6px;
  cursor: pointer;
  background-color: ${({name}) => name};
  outline: ${({selected, hovered}) => selected ? "solid 2px grey" : (hovered ? "solid 2px orange" : "none")};
  outline-offset: 3px;

`