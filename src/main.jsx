import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Lobby } from './pages/lobby/Lobby'
import { Game } from './pages/game/Game'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/lobby' element={<Lobby />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
