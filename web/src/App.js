import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
        <div class="input-block">
          <label htmlFor="github_username">Usuário do Github </label>
          <input name="github_username" id="username_github" required></input>
        </div>

        <div class="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required></input>
        </div>

        <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required></input>
        </div>

        <div class="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" required></input>
        </div>
        </div>

        <button type="submit"> Salvar</button>
        </form>
      </aside>
      <main>

    <ul>
      <li className="dev-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/57199895?s=460&u=2e2dd450b8e98478c40043913d43d7ef28deef1f&v=4" alt="Arthur Vinícius"></img>
     <div className="user-info">
       <strong>Arthur Vinícius</strong>
       <span>Java, ReactJS, React Native, Node.Js</span>
       <p>Back-end developer | Experience with RestFull Web service with spring boot</p>
       <a href="https://github.com/artvinicius">Acessar perfil no GitHub</a>
     </div>
      </header>
      </li>

      <li className="dev-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/57199895?s=460&u=2e2dd450b8e98478c40043913d43d7ef28deef1f&v=4" alt="Arthur Vinícius"></img>
     <div className="user-info">
       <strong>Arthur Vinícius</strong>
       <span>Java, ReactJS, React Native, Node.Js</span>
       <p>Back-end developer | Experience with RestFull Web service with spring boot</p>
       <a href="https://github.com/artvinicius">Acessar perfil no GitHub</a>
     </div>
      </header>
      </li>

      <li className="dev-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/57199895?s=460&u=2e2dd450b8e98478c40043913d43d7ef28deef1f&v=4" alt="Arthur Vinícius"></img>
     <div className="user-info">
       <strong>Arthur Vinícius</strong>
       <span>Java, ReactJS, React Native, Node.Js</span>
       <p>Back-end developer | Experience with RestFull Web service with spring boot</p>
       <a href="https://github.com/artvinicius">Acessar perfil no GitHub</a>
     </div>
      </header>
      </li>

      <li className="dev-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/57199895?s=460&u=2e2dd450b8e98478c40043913d43d7ef28deef1f&v=4" alt="Arthur Vinícius"></img>
     <div className="user-info">
       <strong>Arthur Vinícius</strong>
       <span>Java, ReactJS, React Native, Node.Js</span>
       <p>Back-end developer | Experience with RestFull Web service with spring boot</p>
       <a href="https://github.com/artvinicius">Acessar perfil no GitHub</a>
     </div>
      </header>
      </li>

    </ul>

      </main>
    </div>
  );
}

export default App;
