import React from "react";
import styled from "styled-components";

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


const Contact = () => {
    return(
        <Container>
            <Box>
                <h2>Contact</h2>
            </Box>
        </Container>
    );
};

export default Contact;