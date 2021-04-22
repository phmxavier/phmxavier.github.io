import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('menu')
);

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('content')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Profile />
//   </React.StrictMode>,
//   document.getElementById('profile')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <AboutMe />
//   </React.StrictMode>,
//   document.getElementById('about')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Idade Nascimento={new Date("1987-11-15")} />
//   </React.StrictMode>,
//   document.getElementById('idade')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <SkillsList />
//   </React.StrictMode>,
//   document.getElementById('skill')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Portfolio />
//   </React.StrictMode>,
//   document.getElementById('portfolio')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ExperiencesList />
//   </React.StrictMode>,
//   document.getElementById('experience')
// );

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
