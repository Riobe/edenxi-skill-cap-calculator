import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import theme from './theme';
import Layout from './components/Layout';

import { CSSReset, ThemeProvider } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Layout />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
