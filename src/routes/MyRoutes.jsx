import { Routes, Route } from "react-router-dom"
import { Lobby } from "../pages/lobby/Lobby"
import { Game } from "../pages/game/Game"

export function MyRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Lobby />} />
      <Route path='/game' element={<Game />} />
    </Routes>
  )
}
