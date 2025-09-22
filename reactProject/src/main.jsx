import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './Cards.jsx'
import ComponentB from './ComponentB.jsx'
import ComponentA from './ComponentA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentA/>
    <ComponentB/>
  </StrictMode>,
)