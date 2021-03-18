import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Foot = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    background-color: #1B3A4B;
    bottom: 0;
    margin-top: auto;
`;

const Icon = styled.a`
    text-decoration: none;
    color: #ffffffde;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const linkedIn = <FontAwesomeIcon icon={faLinkedin} size='2x'/>;
const github = <FontAwesomeIcon icon={faGithub} size='2x'/>;

//https://www.linkedin.com/in/simon-hazard-470ab9158/
//https://github.com/SimonHazard

const Footer = () => {
    return(
        <Foot>
            <Icon href="https://www.linkedin.com/in/simon-hazard-470ab9158/">{linkedIn}</Icon>
            <Icon href="https://github.com/SimonHazard">{github}</Icon>
        </Foot>
    );
};

export default Footer;