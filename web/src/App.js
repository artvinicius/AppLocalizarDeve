import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github </label>
          <input name="github_username" id="username_github" required></input>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required></input>
        </div>

        <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
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
