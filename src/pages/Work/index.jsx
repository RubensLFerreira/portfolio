import React from 'react';

import img01 from '../../../public/image/1.png';
import img02 from '../../../public/image/2.png';
import img03 from '../../../public/image/3.png';

import './Work.css';

const Work = () => {
  return (
    <div class="container container-work" id="work">
      <div className="section-work">
        <h2 className="title-about">
          <span className="span-about">03. </span>Algumas coisas que construí
        </h2>

        <div className="row div-row">
          <div className="col-7">
            <img src={img01} className="img-fluid" alt="..." />
          </div>
          <div className="col">
            <p className="title-p">Featured Project</p>
            <h3>Mega Movie</h3>
            <p className="desc-p">
              Projeto desenvolvido para avaliação da disciplina PWEB2. Nós
              utilizamos a biblioteca React, axios, com o The Movie Database
              (TMDB) API.
            </p>
            <ul className="list-work">
              <li>React</li>
              <li>Axios</li>
              <li>TMDb API</li>
              <li>Ajax</li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://github.com/RubensLFerreira/mega_movie"
                  target="_blank"
                >
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://mega-movie-rubens.netlify.app/"
                  target="_blank"
                >
                  <i class="bi bi-arrow-up-right-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row div-row">
          <div className="col">
            <p className="title-p">Featured Project</p>
            <h3>GuiaPress</h3>
            <p className="desc-p">
              GuiaPress permite ao usuário ler artigos ou buscar artigos por
              categorias. O usuário tem a possibilidade de criar uma conta e
              faça login, isso permite criar, editar e excluir artigos e
              categorias.
            </p>
            <ul className="list-work">
              <li>EJS engine</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Bcryptjs</li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://github.com/RubensLFerreira/guiaPress"
                  target="_blank"
                >
                  <i class="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-7">
            <img src={img03} className="img-fluid" alt="..." />
          </div>
        </div>

        <div className="row div-row">
          <div className="col-7">
            <img src={img02} className="img-fluid" alt="..." />
          </div>
          <div className="col">
            <p className="title-p">Featured Project</p>
            <h3>Question Guide</h3>
            <p className="desc-p">
              Sistema simples onde os usuários podem fazer perguntas ou
              responder perguntas feitas por outros usuários.
            </p>
            <ul className="list-work">
              <li>Nodejs</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>EJS</li>
              <li>Postgres</li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://github.com/RubensLFerreira/questionsGuide"
                  target="_blank"
                >
                  <i class="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
