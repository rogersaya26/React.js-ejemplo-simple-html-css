import React from "react";
import styled from "styled-components";
import ReactLogo from "../images/ReactLogo.png";
import NodeLogo from "../images/NodeLogo.png";
import JavaScriptLogo from '../images/JavaScriptLogo.png'
import JavaLogo from "../images/JavaLogo.png";
import GitLogo from "../images/GitLogo.png";
import MysqlLogo from "../images/MysqlLogo.png";
import SqlServerLogo from "../images/SqlServerLogo.png";
import SpringLogo from "../images/SpringLogo.png";

const StyledZonaLogos = styled.div`
  width: 80%;
  height: 60vh;
  margin-top: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 1vh;
  }
  @media (max-width: 968px) {
    width: 90%;
  }
`;

const DivLogo = styled.div`
  width: 80px;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 6vh 6vw;
`;

const ZonaLogos = () => {
  return (
    <StyledZonaLogos>
      <DivLogo>
        <img src={ReactLogo} alt="Logo React.js" />
        <h2>React.js</h2>
      </DivLogo>
      <DivLogo>
        <img src={JavaScriptLogo} alt="Logo JavaScript Logo" />
        <h2>JavaScript</h2>
      </DivLogo>
      <DivLogo>
        <img src={NodeLogo} alt="Logo Node Logo" />
        <h2>Node.js</h2>
      </DivLogo>
      <DivLogo>
        <img src={JavaLogo} alt="Logo Java Logo" />
        <h2>Java</h2>
      </DivLogo>
      <DivLogo>
        <img src={SpringLogo} alt="Logo SpringBootLogo Logo" />
        <h2>SpringBoot</h2>
      </DivLogo>
      <DivLogo>
        <img src={MysqlLogo} alt="Logo MySql Logo" />
        <h2>MySql</h2>
      </DivLogo>
      <DivLogo>
        <img src={SqlServerLogo} alt="Logo SqlServer Logo" />
        <h2>SqlServer</h2>
      </DivLogo>
      <DivLogo>
        <img src={GitLogo} alt="Logo Git Logo" />
        <h2>Git</h2>
      </DivLogo>
    </StyledZonaLogos>
  );
};

export default ZonaLogos;
