import React from 'react';
import ButtonTop from '../../components/ButtonTop';
import MessageAlert from '../../components/MessageAlert';

import './home.css';

const Home = () => {
  return (
    <div className="container container-home" id="home">
      <div className="info">
        <p className="hello">Olá, meu nome é</p>
        <h1>Rubens Lima.</h1>
        <h2>Eu construo coisas para a web.</h2>
        <p className="description">
          Olá! Meu nome é Rubens Lima, sou aluno de Sistemas de Informação da
          IFCE, atualmente estou no 7º semestre da faculdade. Tenho experiencia
          em algumas tecnologias como NodeJS, Postgres, Prisma, Express, React,
          entre outros.
        </p>
        <MessageAlert />
      </div>
      <ButtonTop />
    </div>
  );
};

export default Home;
