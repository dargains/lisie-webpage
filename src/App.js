import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes'

// import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  const height = window.innerHeight
  return (
    <ThemeProvider theme={lightTheme}>
      <main className="App" style={{ height }}>
        <Router basename={'/Lisie'}>
          <Route path='/' component={Home} />
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App;
