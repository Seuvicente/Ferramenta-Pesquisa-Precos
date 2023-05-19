// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextoProvider } from './Contexto/Contexto.jsx'
import './reset.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextoProvider>
        <App/>
    </ContextoProvider>
    
 
)
