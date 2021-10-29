import styled from "styled-components";



export const StyledBgHabi = styled.div`
  width: 100%;
  height: 250vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  background-color: #000;
  color: #fff;
  @media (max-width:968px) {
    height: 300vh;
  }
`;

export const ImgBgHabi = styled.img`
  width: 100%;
  height: 300vh;
  opacity: .4;
`;

export const StyledTituloHabi = styled.div`
width: 100%;
height: 25vh;
display: flex;
position: absolute;
justify-content: center;
align-items: center;
h1 {
  font-size: 2.5rem;
  border-bottom: .2rem solid#ff005c;
}
`;


