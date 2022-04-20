import styled from 'styled-components';
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  height: 100%;
  color: grey;
  box-shadow: rgb(29, 45, 50, 0.1) 0 4px 12px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }

  h3 {
    color: #3b3939;

  }
`