import React from 'react';
import AppProviders from './context';
import Wrapper from './components/Wrapper';
import Toast from './components/Toast';
import './firebase';
import Left from './pages/Left';
import Right from './pages/Right';

function App() {
  return (
    <AppProviders>
      <Wrapper>
        <Left />
        <Right />
      </Wrapper>
      <Toast />
    </AppProviders>
  );
}

export default App;
