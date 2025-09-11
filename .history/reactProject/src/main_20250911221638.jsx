import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cards from './card.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Cards />
  </StrictMode>,
)
