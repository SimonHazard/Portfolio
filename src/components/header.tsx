import * as React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-around;
    background-color: rgb(18, 18, 18);
    padding: 0.7rem 2rem;
    overflow: hidden;
    z-index: 1;
    margin: auto;
`;

const Row = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
`;

const Name = styled.h2`
    display: flex;
    flex: auto;
    list-style-type: none;
`;

const Navig = styled.span`
    border-radius: .5rem;
    padding: 10px;
    &:hover {
        background-color: grey;
    }
    &:focus {
        background-color: grey;
    }
`;

const Header = () => {
    return(
        <NavBar>
            <Name>Simon HAZARD</Name>
            <Row>
                <li>
                    <Navig>A propos</Navig>
                </li>
                <li>
                    <Navig>Projets</Navig>
                </li>
                <li>
                    <Navig>Compétences</Navig>
                </li>
                <li>
                    <Navig>Contact</Navig>
                </li>
            </Row>
        </NavBar>
    );
};

export default Header;