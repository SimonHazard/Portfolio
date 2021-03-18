import React from "react";
import styled, { keyframes } from "styled-components";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    padding: 0 15%;
`;

const Wip = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.div` 
    animation: ${rotate} 3s linear infinite;
`;

const cog = <FontAwesomeIcon icon={faCog} size='5x'/>;

const Project = () => {
    return(
        <Container>
            <h2>Projets</h2>
            <Wip>
                <Img >{cog}</Img>
            </Wip>
        </Container>
    );
};

export default Project;