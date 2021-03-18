import React from "react";
import styled from 'styled-components';
import react from '../images/React-icon.svg'
import typescript from '../images/Typescript.svg'
import html from '../images/HTML5.svg'
import css from '../images/CSS3.svg'
import csharp from '../images/Csharp.svg'
import storybook from '../images/storybook.svg'
import jest from '../images/jest.svg'
import emotion from '../images/emotion.png'



const SectionStyled = styled.section`
    padding: 0 15%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px){
        flex-wrap: wrap;
    }
`;

const Skills = () => {
    return(
        <SectionStyled id="skills">
            <header>
                <h2>Compétences</h2>
            </header>
            <Row>
            <Column role='img' aria-label='React'>
                <img src={react} alt='' width='64px' height='64px'/>
                <p>React JS</p>
            </Column>
            <Column role='img' aria-label='TypeScript'>
                <img src={typescript} alt='' width='64px' height='64px'/>
                <p>TypeScript</p>
            </Column>
            <Column role='img' aria-label='HTML'>
                <img src={html} alt='' width='64px' height='64px'/>
                <p>HTML</p>
            </Column>
            <Column role='img' aria-label='CSS'>
                <img src={css} alt='' width='64px' height='64px'/>
                <p>CSS</p>
            </Column>
            <Column role='img' aria-label='CSharp'>
                <img src={csharp} alt='' width='64px' height='64px'/>
                <p>C#</p>
            </Column>
            <Column role='img' aria-label='Storybook'>
                <img src={storybook} alt='' width='64px' height='64px'/>
                <p>Storybook</p>
            </Column>
            <Column role='img' aria-label='Jest'>
                <img src={jest} alt='' width='64px' height='64px'/>
                <p>Jest</p>
            </Column>
            <Column role='img' aria-label='Emotion'>
                <img src={emotion} alt='' width='64px' height='64px'/>
                <p>Emotion</p>
            </Column>
            </Row>
        </SectionStyled>
    );
};

export default Skills;