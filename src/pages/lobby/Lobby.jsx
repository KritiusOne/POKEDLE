import { Link } from "react-router-dom"
import "./lobby.css"
export function Lobby() {
  return (
    <div className="lobby">
      <h2 className="lobby__title">POKEDLE!</h2>
      <Link to="/game" className="lobby__button">
        {" "}
        JUGAR!
      </Link>
    </div>
  )
}
