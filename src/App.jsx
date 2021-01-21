import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import TodoCard from './components/TodoCard';
import { GlobalStyles, light, dark } from './theme';
import './assets/app.scss';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme((prevState) => !prevState);

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <>
        <GlobalStyles />

        <div className="bg">
          <TodoCard />
          <button type="button" onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
