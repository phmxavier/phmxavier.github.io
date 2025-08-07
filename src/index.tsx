import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import ReactGA from 'react-ga4';
import reportWebVitals from './reportWebVitals';

// Inicializa o Google Analytics 4
ReactGA.initialize('G-P1K03P034R');

// Registra a visualização da página inicial
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

// Usa a nova API createRoot do React 18
const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Envia métricas de Web Vitals para o Google Analytics
reportWebVitals(({ id, name, value }) => {
  ReactGA.event({
    category: 'Web Vitals',
    action: name,
    label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    nonInteraction: true,
  });
});
