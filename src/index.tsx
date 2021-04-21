import React from 'react';
import ReactDOM from 'react-dom';
import ExperiencesList from './components/ExperiencesList';
import Idade from './components/Idade';
import Portfolio from './components/Portfolio';
import SkillsList from './components/SkillsList';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Idade Nascimento={new Date("1987-11-15")} />
  </React.StrictMode>,
  document.getElementById('idade')
);

ReactDOM.render(
  <React.StrictMode>
    <SkillsList />
  </React.StrictMode>,
  document.getElementById('skill')
);

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('portfolio')
);

ReactDOM.render(
  <React.StrictMode>
    <ExperiencesList />
  </React.StrictMode>,
  document.getElementById('experience')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
