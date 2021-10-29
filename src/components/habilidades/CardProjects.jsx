import React from "react";
import {
  StyledProjectsZona,
  StyledTituloProjects,
  StyledCardZona,
  StyledCardContainer,
  StyledCardImg,
  StyledCardTxt,
} from "./StyledCardProjects";
import Theme2 from '../images/theme-2.png'
import Theme3 from '../images/theme-3.png'

const CardProjects = () => {
  return (
    <StyledProjectsZona>
      <StyledTituloProjects>
        <h1>Proyectos</h1>
      </StyledTituloProjects>
      <StyledCardZona>
      <StyledCardContainer>
        <StyledCardImg src={Theme2} alt="Imgen Muestra" />
        <StyledCardTxt>
          <p> Netbeans Java8</p>
        </StyledCardTxt>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImg src={Theme3} alt="Imgen Muestra" />
        <StyledCardTxt>
          <p> Netbeans Java8</p>
        </StyledCardTxt>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCardImg src={Theme2} alt="Imgen Muestra" />
        <StyledCardTxt>
          <p> Netbeans Java8</p>
        </StyledCardTxt>
      </StyledCardContainer>

      </StyledCardZona>
    </StyledProjectsZona>
  );
};

export default CardProjects;
