import { useState } from 'react';

import './Experience.css';

const Work = () => {
  const [buttonAtive, setButtonAtive] = useState('button1');

  const buttonClick = (buttonId) => {
    setButtonAtive(buttonId);
  };

  return (
    <div className="container" id="experience">
      <div className="row section-experience">
        <h2 className="title-about">
          <span className="span-about">02. </span>Experiências
        </h2>
        <div className="col-3 left">
          <button className="btn-flex" onClick={() => buttonClick('button1')}>
            Atlântico Bootcamp
          </button>
          <button className="btn-flex" onClick={() => buttonClick('button2')}>
            Prof. de Informática
          </button>
        </div>

        <div className="col right">
          {buttonAtive === 'button1' && (
            <div>
              <h2>Atlântico Academy Bootcamp</h2>
              <p className="p-experience">
                Atlântico Academy Bootcamp tinha como objetivo selecionar alguns
                candidatos para participar do programa de capacitação.
              </p>
              <p className="p-experience">
                O curso tem duração de 8 semanas, as equipes serão separadas em
                squads, onde todas as squads receberam o mesmo desafio, mas cada
                equipe criar a aplicação com base no que a equipe decidiu.{' '}
              </p>
              <p className="p-experience">
                A bootcamp me proporcional uma experiência real, onde
                precisavamos criar regra de negócio, prototipação, utilizar base
                de dados relacional, desenvolver uma aplicação fullstack e fazer
                o deploy.
              </p>
            </div>
          )}
          {buttonAtive === 'button2' && (
            <div>
              <h2>Professor de informática na Líder</h2>
              <p className="p-experience">
                Até então tiver vários empregos, mas todos fora da área até
                então, porém tive o prazer de licenciar em sala de aula onde
                pude passar meu conhecimento para uma turma maravilhosa.
              </p>
              <p className="p-experience">
                Ensinar conteúdo para minha filha me proporcionou a capacidade
                de explicar de forma clara e objetiva. Todas essas habilidade
                pude aproveitar dentro de sala de aula, criando proximidade com
                meus alunos.
              </p>
              <p className="p-experience">
                A experiência em sala de aula foi ótima, espera licenciar em
                breve!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
