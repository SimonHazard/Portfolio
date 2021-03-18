import * as React from 'react';
import styled from 'styled-components';

const ParagrapheStyle = styled.p`
   text-align: justify;
`;

const Container = styled.div`
   padding: 0 15%;
`;

const About = () => {
    return(
        <Container id="about">
            <h1>Hello, je suis Simon.</h1>
            <ParagrapheStyle>Jeune développeur passionné par le développement informatique.
            Ayant obtenu mon BTS SIO en 2019 et mon bachelor dans le développement en 2020,
            j'ai décidé, en parallèle de ma recherche d'emploi, de me consacrer à des projets personnels.
            Je commence par ce portfolio qui sera régulièrement mis à jour au fil des technos qui me plaisent
            et des nouveaux projets que je pourrais sortir.
            Je suis tout particulièrement attiré par le développement web et le développement de jeux-vidéo.
            </ParagrapheStyle>
        </Container>
    );
};

export default About;