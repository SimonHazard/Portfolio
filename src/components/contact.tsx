import React from "react";
import styled, { keyframes } from "styled-components";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    padding: 0 25%;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid #212F45 2px;
    background-color: #1B3A4B;
    margin-bottom: 3%;
    border-radius: 5px;
`;

const Wip = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
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

const cog = <FontAwesomeIcon icon={faCog} size='2x'/>;

const Contact = () => {
    return(
        <Container>
            <Box>
                <h2>Contact</h2>
            <Wip>
                <Img >{cog}</Img>
            </Wip>
            </Box>
        </Container>
    );
};

export default Contact;