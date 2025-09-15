import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Cards from './Cards.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>
      <Cards/>
  </StrictMode>,
)
