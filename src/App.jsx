import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import TodoCard from './components/TodoCard';
import { GlobalStyles, light, dark } from './theme';

import { MoonIcon, SunIcon } from './components/Icons';

import './assets/app.scss';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme((prevState) => !prevState);

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <>
        <GlobalStyles />

        <div className="wrapper">
          <div className="container">
            <div className="header">
              <h1>T O D O</h1>
              <button
                className="header__toggle-btn"
                type="button"
                onClick={toggleTheme}
              >
                { isDarkTheme ? <SunIcon /> : <MoonIcon /> }
              </button>
            </div>
            <TodoCard />
          </div>
          <center className="hint">
            <small>Drag and drop to reorder list</small>
          </center>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
