import React from "react";
import styled from 'styled-components';
import tuto from '../images/React-icon.svg'

const SectionStyled = styled.section`

`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
`;

const Skills = () => {
    return(
        <SectionStyled id="skills">
            <header>
                <h2>Compétences</h2>
            </header>
            <Column role='img' aria-label='TypeScript'>
                <img src={tuto} alt='' width='64px' height='64px'/>
                React JS
            </Column>
        </SectionStyled>
    );
};

export default Skills;