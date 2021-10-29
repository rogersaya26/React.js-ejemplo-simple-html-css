import React from "react";
import ZonaLogos from "./ZonaLogos";
import Colaje from "../images/colaje.jpeg";
import CardProjects from "./CardProjects";
import { StyledBgHabi, ImgBgHabi, StyledTituloHabi } from "./StyledHabilidades";


const Habilidades = () => {
  return (
    <StyledBgHabi>
      <ImgBgHabi src={Colaje} alt="img circuit cybernetic" />
      <StyledTituloHabi>
        <h1>Habilidades</h1>
      </StyledTituloHabi>
     
      <ZonaLogos />
      <CardProjects />
      
    </StyledBgHabi>
  );
};

export default Habilidades;
