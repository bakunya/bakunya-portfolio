import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import ThemeProvider from './context/ThemeContext'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <ThemeProvider initialTheme="dark">
            <App />
        </ThemeProvider>
      </Router>
  </React.StrictMode>
)
