import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff9ee;
  border-bottom: 20px;
  padding: 0 15px 15px 15px;
  margin-top: 10px;

  div {
    flex: 1;
  }

  .information, .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`