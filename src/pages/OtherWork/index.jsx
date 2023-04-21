import React from 'react';

import './OtherWork.css';

const OtherWork = () => {
  return (
    <div className="container">
      <h2 className="title-other">Other Noteworthy Projects</h2>
      <p className="p-other">view the archive</p>

      <div className="section-other">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card text-bg-dark">
              <div className="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h1>
                      <i class="bi bi-folder"></i>
                    </h1>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="https://github.com/RubensLFerreira/API-Ingredientes-em-Foco"
                      target="_blank"
                    >
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">API-Ingredientes-em-Foco</h5>
                <p class="card-text">
                  Supermercado SQ needs a system where its customers who live
                  with food allergies can exchange information about allergenic
                  products and/or view information such as ingredients and
                  nutritional values.
                </p>
                <p className="p-footer">
                  Node.js Express.js PostgreSQL Sequelize
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card text-bg-dark">
              <div className="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h1>
                      <i class="bi bi-folder"></i>
                    </h1>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="https://github.com/RubensLFerreira/api_rest_node_typescript"
                      target="_blank"
                    >
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">api_rest_node_typescript</h5>
                <p class="card-text">
                  Project developed in the Rest API course with TypeScript using
                  Knex and Jest.
                </p>
                <p className="p-footer">Node.js TypeScript Knex Jest</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card text-bg-dark">
              <div className="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h1>
                      <i class="bi bi-folder"></i>
                    </h1>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="https://github.com/RubensLFerreira/Ingredientes-em-Foco"
                      target="_blank"
                    >
                      <i class="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Ingredientes-em-Foco</h5>
                <p class="card-text">
                  O Supermercado SQ necessita de um sistema onde seus clientes
                  que convivem com alergias alimentares possam trocar
                  informações sobre produtos alergênicos e/ou visualizar
                  informações como ingredientes e valores nutricionais.
                </p>
                <p className="p-footer">Reactjs JWT MateriaIU Axios</p>
              </div>
            </div>
          </div>

          {/* <div class="col">
            <div class="card text-bg-dark">
              <div className="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h1>
                      <i class="bi bi-folder"></i>
                    </h1>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="bi bi-github"></i>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="p-footer">Footer</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card text-bg-dark">
              <div className="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h1>
                      <i class="bi bi-folder"></i>
                    </h1>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="bi bi-github"></i>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="p-footer">Footer</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card text-bg-dark">
              <div className="card-header">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <h1>
                      <i class="bi bi-folder"></i>
                    </h1>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="bi bi-github"></i>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="p-footer">Footer</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OtherWork;
