import * as React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-around;
    background-color: #1B3A4B;
    padding: 0 15%;
    overflow: hidden;
    z-index: 1;
    margin: auto;
`;

const Row = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    @media (max-width: 768px){
        flex-wrap: wrap;
    }
`;

const Name = styled.h2`
    display: flex;
    flex: auto;
    list-style-type: none;
`;

const Navig = styled.a`
    border-radius: .5rem;
    padding: 10px;
    text-decoration: none;
    color: #ffffffde;;
    &:hover {
        background-color: #065A60;
    }
`;

const Header = () => {
    return(
        <NavBar className="navbar">
            <Name>Simon HAZARD</Name>
            <Row className="menu">                
                <li>
                    <Navig href="#">A propos</Navig>
                </li>
                <li>
                    <Navig href="#">Projets</Navig>
                </li>
                <li>
                    <Navig href="#">Compétences</Navig>
                </li>
                <li>
                    <Navig href="#">Contact</Navig>
                </li>
            </Row>
        </NavBar>
    );
};

export default Header;