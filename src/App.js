import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './context';
import Wrapper from './components/Wrapper';
import Toast from './components/Toast';
import Header from './components/Header';
import Pages from './pages/Pages';

const App = () => (
  <AppProviders>
    <Router>
      <Wrapper>
        <Header />
        <Pages />
      </Wrapper>
    </Router>
    <Toast />
  </AppProviders>
);

export default App;
