import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GridThemeProvider } from 'styled-bootstrap-grid';

const gridTheme = {
  row: {
    padding: 10,
  },
  col: {
    padding: 5,
  },
  container: {
    padding: 0,
  },
}

ReactDOM.render(
  <GridThemeProvider gridTheme={gridTheme}>
    <App />
  </GridThemeProvider>,
  document.getElementById('root')
);