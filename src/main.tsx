import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// importing unocss styles
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
