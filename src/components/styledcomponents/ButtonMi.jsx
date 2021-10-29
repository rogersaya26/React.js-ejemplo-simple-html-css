import styled from "styled-components";

const ButtonMi = styled.button`
  color: #fff;
  font-size: 1.5rem;
  border: 0.2rem solid #e44878;
  border-radius: 0.8rem;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  transition: 0.5s;
  margin-top: 1.5vh;
  &:hover {
    transition: 0.5s;
    background-color: #000;
    border-bottom: 0.8rem solid #ff005c;
    border-right: 0.8rem solid #e44878;
  }
`;

export default ButtonMi;
