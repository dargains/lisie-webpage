import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes'

// import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  const height = window.innerHeight
  return (
    <ThemeProvider theme={lightTheme}>
      <main className="App" style={{ height }}>
        <Home />
      </main>
    </ThemeProvider>
  );
}

export default App;
