import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {Navigation} from './src';
import theme from './src/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme.lightTheme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;