import React from 'react';

import { ThemeProvider } from './theme';
import { ToastProvider } from './toast';

const AppProviders = ({ children }) => (
  <ThemeProvider>
    <ToastProvider>{children}</ToastProvider>
  </ThemeProvider>
);

export default AppProviders;
